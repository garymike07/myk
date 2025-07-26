#!/bin/bash

# Portfolio Website Deployment Script
# This script handles Git operations, GitHub integration, and deployment to GitHub Pages

set -e  # Exit on any error

# Configuration
GITHUB_USERNAME="garymike07"
GITHUB_REPO="myk"
GITHUB_TOKEN="${GITHUB_TOKEN}"
MAIN_BRANCH="main"

echo "🚀 Starting Portfolio Website Deployment..."

# Function to check if we're in a git repository
check_git_repo() {
    if [ ! -d ".git" ]; then
        echo "📁 Initializing Git repository..."
        git init
        git remote add origin https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git
    else
        echo "✅ Git repository already initialized"
    fi
}

# Function to configure Git user
configure_git() {
    echo "🔧 Configuring Git user..."
    git config user.name "Portfolio Bot"
    git config user.email "portfolio@example.com"
}

# Function to pull latest changes
pull_changes() {
    echo "📥 Pulling latest changes from remote..."
    git fetch origin
    
    # Check if main branch exists on remote
    if git ls-remote --heads origin | grep -q "refs/heads/$MAIN_BRANCH"; then
        echo "✅ Main branch exists, pulling changes..."
        git checkout -B $MAIN_BRANCH origin/$MAIN_BRANCH 2>/dev/null || git checkout -b $MAIN_BRANCH
        git pull origin $MAIN_BRANCH --allow-unrelated-histories || echo "⚠️  No changes to pull or merge conflicts resolved"
    else
        echo "📝 Main branch doesn't exist, will create it"
        git checkout -b $MAIN_BRANCH
    fi
}

# Function to stage and commit changes
commit_changes() {
    echo "📝 Staging and committing changes..."
    git add .
    
    # Check if there are changes to commit
    if git diff --staged --quiet; then
        echo "ℹ️  No changes to commit"
        return 0
    fi
    
    COMMIT_MSG="Update portfolio website - $(date +'%Y-%m-%d %H:%M:%S')"
}

# Function to push changes
push_changes() {
    echo "📤 Pushing changes to GitHub..."
    git push https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git $MAIN_BRANCH
    echo "✅ Changes pushed to branch: $MAIN_BRANCH"
}

# Function to enable GitHub Pages
enable_github_pages() {
    echo "🌐 Configuring GitHub Pages..."
    
    # Enable GitHub Pages using GitHub API
    PAGES_RESPONSE=$(curl -s -X POST \
        -H "Authorization: token $GITHUB_TOKEN" \
        -H "Accept: application/vnd.github.v3+json" \
        https://api.github.com/repos/$GITHUB_USERNAME/$GITHUB_REPO/pages \
        -d "{
            \"source\": {
                \"branch\": \"$MAIN_BRANCH\",
                \"path\": \"/\"
            }
        }")
    
    if echo $PAGES_RESPONSE | grep -q '"status":"built"'; then
        echo "✅ GitHub Pages enabled successfully"
    else
        echo "ℹ️  GitHub Pages may already be enabled or configuration in progress"
    fi
    
    echo "🌐 Site will be available at: https://$GITHUB_USERNAME.github.io/$GITHUB_REPO"
}

# Function to cleanup
cleanup() {
    echo "🧹 Cleaning up..."
    git checkout $MAIN_BRANCH 2>/dev/null || true
    git branch -D $BRANCH_NAME 2>/dev/null || true
}

# Main deployment process
main() {
    echo "📍 Current directory: $(pwd)"
    
    # Check if we're in the right directory
    if [ ! -f "index.html" ]; then
        echo "❌ Error: Not in the correct project directory. Please run from the project root."
        exit 1
    fi
    
    check_git_repo
    configure_git
    pull_changes
    commit_changes
    push_changes
    enable_github_pages
    cleanup
    
    echo ""
    echo "🎉 Deployment completed successfully!"
    echo "📱 Your portfolio website will be available at:"
    echo "   https://$GITHUB_USERNAME.github.io/$GITHUB_REPO"
    echo ""
    echo "⏰ Note: GitHub Pages may take a few minutes to update after deployment."
    echo "🔄 You can check the deployment status at:"
    echo "   https://github.com/$GITHUB_USERNAME/$GITHUB_REPO/deployments"
}

# Handle script arguments
case "${1:-}" in
    "help"|"-h"|"--help")
        echo "Portfolio Website Deployment Script"
        echo ""
        echo "Usage: $0 [command]"
        echo ""
        echo "Commands:"
        echo "  help    Show this help message"
        echo "  status  Show Git and deployment status"
        echo "  clean   Clean up temporary branches and files"
        echo ""
        echo "Default: Run full deployment process"
        ;;
    "status")
        echo "📊 Git Status:"
        git status --short 2>/dev/null || echo "Not a git repository"
        echo ""
        echo "🌐 Remote URL:"
        git remote get-url origin 2>/dev/null || echo "No remote configured"
        ;;
    "clean")
        cleanup
        echo "✅ Cleanup completed"
        ;;
    *)
        main
        ;;
esac


