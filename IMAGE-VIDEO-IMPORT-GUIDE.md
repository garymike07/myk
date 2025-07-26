# Image and Video Import Guide for Portfolio Website

## Overview

This guide explains how to import and update images and videos in your GitHub Pages hosted portfolio website. Since GitHub Pages is a static hosting service, direct file uploads from the browser dashboard are not possible. Instead, you'll need to follow a manual process to update your media files.

## Understanding the File Structure

Your portfolio website uses the following directory structure for media files:

```
myk/
├── assets/
│   ├── profile-placeholder.jpg          # Your profile picture
│   ├── projects/                        # Project thumbnails
│   │   ├── project1-placeholder.jpg
│   │   ├── project2-placeholder.jpg
│   │   ├── project3-placeholder.jpg
│   │   ├── project4-placeholder.jpg
│   │   └── project5-placeholder.jpg
│   ├── resumes/                         # Resume files
│   │   ├── resume-placeholder.pdf
│   │   └── resume-thumb-placeholder.jpg
│   ├── blogs/                           # Blog thumbnails
│   │   ├── blog1-placeholder.jpg
│   │   ├── blog2-placeholder.jpg
│   │   └── blog3-placeholder.jpg
│   └── videos/                          # Video files
│       └── competency-placeholder.mp4
├── assets/data.json                     # Content data file
└── ...
```

## Image Requirements

### Profile Picture
- **Format**: JPG, PNG, or WebP
- **Dimensions**: Square format (1:1 ratio), recommended 400x400px
- **File Size**: Maximum 2MB
- **Filename**: Can be any name, but update the path in `data.json`

### Project Thumbnails
- **Format**: JPG, PNG, or WebP
- **Dimensions**: Landscape format (16:9 ratio), recommended 800x450px
- **File Size**: Maximum 3MB each
- **Quantity**: Up to 5 projects supported by default

### Blog Thumbnails
- **Format**: JPG, PNG, or WebP
- **Dimensions**: Landscape format (16:9 ratio), recommended 600x338px
- **File Size**: Maximum 2MB each
- **Quantity**: Up to 3 blog posts supported by default

### Resume Thumbnail
- **Format**: JPG, PNG, or WebP
- **Dimensions**: Portrait format (3:4 ratio), recommended 300x400px
- **File Size**: Maximum 1MB
- **Purpose**: Visual preview of your resume PDF

## Video Requirements

### Competency Showcase Video
- **Format**: MP4 with H.264 codec
- **Duration**: Maximum 30 seconds recommended
- **Resolution**: 1280x720 (HD) or 1920x1080 (Full HD)
- **File Size**: Maximum 10MB
- **Audio**: Optional, but if included should be clear and professional

## Step-by-Step Import Process

### Method 1: Using the Dashboard (Recommended for Text + Planning Media Updates)

1. **Access the Dashboard**
   - Visit your live website: https://garymike07.github.io/myk/
   - Click the "Edit Content" button in the top navigation

2. **Navigate to the Appropriate Section**
   - Click the relevant tab (About, Projects, Video, Resume, Blogs)
   - Make any text changes you need

3. **Plan Your Media Updates**
   - Note which images/videos you want to replace
   - Prepare your new media files according to the requirements above

4. **Save Changes**
   - Click "Save Changes" to download the updated `data.json`
   - This file contains your text updates and will be used in the next steps

### Method 2: Direct File Management

1. **Prepare Your Media Files**
   - Resize and optimize your images according to the requirements
   - Ensure video files meet the format and size requirements
   - Name your files appropriately (you can keep existing names or create new ones)

2. **Access Your Project Files**
   - If you have the project locally: Navigate to your `myk` folder
   - If you don't have it locally: Clone the repository:
     ```bash
     git clone https://github.com/garymike07/myk.git
     cd myk
     ```

3. **Replace Media Files**
   - Copy your new images to the appropriate folders:
     - Profile picture → `assets/`
     - Project images → `assets/projects/`
     - Blog images → `assets/blogs/`
     - Resume thumbnail → `assets/resumes/`
     - Videos → `assets/videos/`

4. **Update data.json (if needed)**
   - If you changed filenames, edit `assets/data.json` to reflect the new paths
   - Or replace it with the file downloaded from the dashboard

5. **Deploy Changes**
   ```bash
   git add .
   git commit -m "Update images and videos"
   git push origin main
   ```

## Detailed Workflow Examples

### Example 1: Updating Profile Picture

1. **Prepare the Image**
   - Resize to 400x400px
   - Save as `my-profile.jpg`

2. **Replace the File**
   ```bash
   # Navigate to your project
   cd myk
   
   # Copy your new image
   cp /path/to/my-profile.jpg assets/my-profile.jpg
   ```

3. **Update data.json**
   - Open `assets/data.json`
   - Find the `about` section
   - Change `"profilePicture": "assets/profile-placeholder.jpg"` to `"profilePicture": "assets/my-profile.jpg"`

4. **Deploy**
   ```bash
   git add .
   git commit -m "Update profile picture"
   git push origin main
   ```

### Example 2: Adding Project Images

1. **Prepare Project Images**
   - Resize to 800x450px
   - Name them: `project1.jpg`, `project2.jpg`, etc.

2. **Replace Files**
   ```bash
   cp /path/to/project1.jpg assets/projects/
   cp /path/to/project2.jpg assets/projects/
   ```

3. **Update data.json**
   - In the `projects` array, update the `thumbnail` paths:
   ```json
   {
     "title": "My Amazing Project",
     "thumbnail": "assets/projects/project1.jpg",
     "description": "Description here"
   }
   ```

4. **Deploy Changes**
   ```bash
   git add .
   git commit -m "Update project images"
   git push origin main
   ```

### Example 3: Updating Competency Video

1. **Prepare Video**
   - Ensure it's MP4 format, under 10MB
   - Name it `my-competency-video.mp4`

2. **Replace File**
   ```bash
   cp /path/to/my-competency-video.mp4 assets/videos/
   ```

3. **Update data.json**
   - Find the `competencyVideo` section
   - Update: `"url": "assets/videos/my-competency-video.mp4"`

4. **Deploy**
   ```bash
   git add .
   git commit -m "Update competency showcase video"
   git push origin main
   ```

## Quick Reference Commands

### Clone Repository (First Time)
```bash
git clone https://github.com/garymike07/myk.git
cd myk
```

### Update and Deploy Changes
```bash
# Add all changes
git add .

# Commit with message
git commit -m "Update media files"

# Push to GitHub (triggers automatic deployment)
git push origin main
```

### Check Deployment Status
- Visit: https://github.com/garymike07/myk/actions
- Look for the latest workflow run to see deployment progress

## Troubleshooting

### Common Issues

1. **Images Not Displaying**
   - Check file paths in `data.json` match actual file locations
   - Ensure image files are in the correct folders
   - Verify image formats are supported (JPG, PNG, WebP)

2. **Video Not Playing**
   - Confirm video is MP4 format with H.264 codec
   - Check file size is under 10MB
   - Verify path in `data.json` is correct

3. **Changes Not Appearing**
   - Wait 2-3 minutes for GitHub Pages to rebuild
   - Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
   - Check GitHub Actions for deployment errors

4. **File Size Issues**
   - Compress images using tools like TinyPNG or ImageOptim
   - For videos, use HandBrake or similar tools to reduce file size

### Getting Help

If you encounter issues:
1. Check the GitHub repository's Actions tab for deployment errors
2. Verify all file paths in `data.json` are correct
3. Ensure all media files meet the specified requirements
4. Try clearing your browser cache and waiting a few minutes

## Best Practices

1. **Optimize Before Upload**
   - Always compress images to reduce loading times
   - Use appropriate dimensions to avoid unnecessary scaling

2. **Consistent Naming**
   - Use descriptive, lowercase filenames
   - Avoid spaces and special characters in filenames

3. **Backup Originals**
   - Keep original high-resolution files as backups
   - Version control helps track changes

4. **Test Locally**
   - If possible, test changes locally before deploying
   - Use `python3 -m http.server 8080` in the project directory

5. **Regular Updates**
   - Update content regularly to keep your portfolio fresh
   - Monitor file sizes to maintain good performance

## Alternative Solutions

If you need more dynamic file upload capabilities, consider:

1. **Using a CMS with GitHub Integration**
   - Netlify CMS
   - Forestry.io
   - Decap CMS (formerly Netlify CMS)

2. **Moving to a Dynamic Hosting Platform**
   - Netlify with form handling
   - Vercel with serverless functions
   - Traditional web hosting with PHP/Node.js backend

3. **Using Cloud Storage**
   - Store large media files on services like Cloudinary or AWS S3
   - Reference them via URLs in your `data.json`

This approach maintains the benefits of GitHub Pages while providing more flexibility for media management.

