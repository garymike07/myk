# ICT Professional Portfolio Website

A modern, dark-mode, static portfolio website with an integrated creator dashboard for content management. Built with HTML, CSS, and JavaScript, featuring GitHub Pages deployment and Termux compatibility.

## 🌟 Features

- **Modern Dark Theme**: Futuristic aesthetic with neon blue (#00b7eb) and purple (#8b00ff) accents
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Integrated Dashboard**: Seamless content management without separate login
- **Dynamic Content**: JSON-based content management system
- **Smooth Animations**: CSS transitions and scroll-triggered animations
- **GitHub Integration**: Automated deployment to GitHub Pages

## 📁 Project Structure

```
myk/
├── src/                          # Source files
│   ├── index.html               # Main HTML file
│   ├── style.css                # Stylesheet with dark theme
│   └── script.js                # JavaScript functionality
├── assets/                      # Static assets
│   ├── data.json               # Main content data
│   ├── comments.json           # User comments data
│   ├── profile-placeholder.jpg # Profile picture
│   ├── projects/               # Project thumbnails
│   ├── resumes/                # Resume files
│   ├── blogs/                  # Blog thumbnails
│   └── videos/                 # Competency showcase video
├── docs/                       # Documentation
├── deploy.sh                   # Deployment script
├── README.md                   # This file
└── .gitignore                  # Git ignore rules
```


### Content Management

#### Using the Dashboard

1. **Access Dashboard**: Click "Edit Content" button on the homepage
2. **Navigate Tabs**: Switch between different content sections
3. **Edit Content**: Modify text fields, upload images, manage data
4. **Save Changes**: Click "Save Changes" to download updated `data.json`
5. **Update Files**: Replace `assets/data.json` with the downloaded file

#### Manual Editing

Edit `assets/data.json` directly using nano or any text editor:

```bash
nano assets/data.json
```

#### Content Structure

```json
{
  "about": {
    "name": "Your Name",
    "title": "Your Title",
    "description": "Your description",
    "profilePicture": "../assets/profile-placeholder.jpg"
  },
  "skills": {
    "technical": ["Skill 1", "Skill 2"],
    "soft": ["Skill 1", "Skill 2"],
    "languages": ["Language 1", "Language 2"]
  },
  "experience": [
    {
      "role": "Job Title",
      "date": "Date Range",
      "description": "Job description"
    }
  ],
  "projects": [
    {
      "title": "Project Name",
      "thumbnail": "../assets/projects/project1.jpg",
      "description": "Project description"
    }
  ]
}
```

### Asset Management

#### Image Requirements
- **Profile Picture**: Square format (1:1 ratio)
- **Project Thumbnails**: Landscape format (16:9 ratio)
- **Blog Thumbnails**: Landscape format (16:9 ratio)
- **Resume Thumbnail**: Portrait format (3:4 ratio)
- **File Size**: Recommended < 5MB for optimal loading

#### Video Requirements
- **Format**: MP4 with H.264 codec
- **Duration**: Maximum 30 seconds
- **Resolution**: 1280x720 (HD)
- **File Size**: Maximum 5MB

#### File Organization
```
assets/
├── profile-placeholder.jpg      # Main profile picture
├── projects/
│   ├── project1-placeholder.jpg
│   ├── project2-placeholder.jpg
│   └── ...
├── resumes/
│   ├── resume-placeholder.pdf
│   └── resume-thumb-placeholder.jpg
├── blogs/
│   ├── blog1-placeholder.jpg
│   ├── blog2-placeholder.jpg
│   └── ...
└── videos/
    └── competency-placeholder.mp4
```

## 🌐 Deployment

### Automated Deployment

The `deploy.sh` script handles the complete deployment process:

```bash
# Full deployment
./deploy.sh

# Check status
./deploy.sh status

# Clean up
./deploy.sh clean

# Show help
./deploy.sh help
```

### Deployment Process

1. **Initialize Git repository** (if not exists)
2. **Pull latest changes** from GitHub
3. **Create update branch** (`portfolio-update`)
4. **Commit changes** with timestamp
5. **Push to GitHub** and create pull request
6. **Merge automatically** using GitHub API
7. **Enable GitHub Pages** for hosting
8. **Clean up** temporary branches

### GitHub Pages Configuration

- **Repository**: `https://github.com/garymike07/myk`
- **Branch**: `main`
- **Path**: `/` (root)
- **URL**: `https://garymike07.github.io/myk`

### Manual Deployment

If automated deployment fails, use manual Git commands:

```bash
# Initialize and configure
git init
git remote add origin https://garymike07:YOUR_GITHUB_TOKEN@github.com/garymike07/myk.git
git config user.name "Portfolio Bot"
git config user.email "portfolio@example.com"

# Pull, commit, and push
git pull origin main --allow-unrelated-histories
git add .
git commit -m "Portfolio update"
git push origin main
```

## 🎨 Customization

### Theme Colors

Modify CSS variables in `src/style.css`:

```css
:root {
  --primary-color: #00b7eb;    /* Neon blue */
  --secondary-color: #8b00ff;  /* Purple */
  --bg-color: #1a1a1a;        /* Dark background */
  --card-bg: #2a2a2a;         /* Card background */
  --text-color: #ffffff;      /* White text */
  --text-secondary: #b0b0b0;  /* Gray text */
}
```

### Fonts

Current fonts (loaded from Google Fonts):
- **Primary**: Poppins
- **Secondary**: Montserrat

### Animations

- **Fade In**: Elements appear with smooth fade
- **Hover Effects**: Interactive element responses
- **Scroll Animations**: Content reveals on scroll
- **Profile Picture**: Hover scale and glow effect

## 📧 Contact Form

### Formcarry Integration

1. **Sign up** at [Formcarry.com](https://formcarry.com)
2. **Create form** and get form ID
3. **Update form action** in `src/script.js`:
   ```javascript
   <form action="https://formcarry.com/s/YOUR_FORM_ID" method="POST">
   ```

### Comment System

Comments are stored in `assets/comments.json` and managed through the dashboard:

```json
{
  "comments": [
    {
      "id": 1,
      "name": "Visitor Name",
      "email": "visitor@email.com",
      "message": "Comment message",
      "date": "2024-01-20",
      "approved": true
    }
  ]
}
```

## 🔧 Troubleshooting

### Common Issues



#### Git Authentication Issues
```bas
### Error Handling

#### Video Not Loading
- Check file format (MP4 with H.264)
- Verify file size (< 5MB)
- Ensure correct path in `data.json`
- Test in different browsers

#### Images Not Displaying
- Verify file paths in `data.json`
- Check image formats (JPG, PNG)
- Ensure files exist in correct directories
- Test with placeholder images

#### Dashboard Not Working
- Check browser console for JavaScript errors
- Verify `data.json` is valid JSON
- Clear browser cache
- Test in incognito/private mode

## 📱 Mobile Optimization

### Performance Optimization

- **Minified CSS**: Compressed stylesheets
- **Optimized images**: WebP format where supported
- **Lazy loading**: Images load as needed
- **Caching**: Browser caching for static assets

## 🔒 Security

### Token Management

- **GitHub Token**: Has repository access only
- **Expiration**: Monitor token expiration date
- **Rotation**: Update token when needed
- **Environment**: Store securely, don't commit to public repos

### Best Practices

- **HTTPS**: Always use secure connections
- **Input Validation**: Sanitize user inputs
- **File Uploads**: Validate file types and sizes
- **Access Control**: Dashboard has no authentication (by design)

## 📊 Analytics & Monitoring

### GitHub Pages Analytics

- **Repository Insights**: View traffic and engagement
- **Deployment Status**: Monitor build and deployment
- **Error Logs**: Check for deployment issues

### Performance Monitoring

- **Lighthouse**: Test performance, accessibility, SEO
- **Browser DevTools**: Monitor loading times
- **Mobile Testing**: Test on various devices

## 🤝 Contributing

### Development Workflow

1. **Fork repository** (if contributing)
2. **Create feature branch**: `git checkout -b feature-name`
3. **Make changes** and test locally
4. **Commit changes**: `git commit -m "Description"`
5. **Push branch**: `git push origin feature-name`
6. **Create pull request** on GitHub

### Code Standards

- **HTML**: Semantic markup, accessibility
- **CSS**: BEM methodology, responsive design
- **JavaScript**: ES6+, clean code principles
- **Comments**: Document complex functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

### Getting Help

- **Issues**: Report bugs on GitHub Issues
- **Documentation**: Check this README first
- **Community**: Join discussions on GitHub

### Contact Information

- **GitHub**: [@garymike07](https://github.com/garymike07)
- **Repository**: [myk](https://github.com/garymike07/myk)
- **Website**: [https://garymike07.github.io/myk](https://garymike07.github.io/myk)

---

**Last Updated**: January 2024  
**Version**: 1.0.0  
**Compatibility**: GitHub Pages, Modern Browsers

