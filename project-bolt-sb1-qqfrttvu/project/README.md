# ÜNIO - AI Marketing Ecosystem

Welcome to the fully functional version of the ÜNIO AI Marketing Ecosystem! This is a complete single-page application built with vanilla JavaScript, HTML, and CSS that maintains the original design while adding full functionality.

## Features Implemented

### Core Functionality
- ✅ All buttons fully functional (Explore Services, Try App, View More, Request Consultation)
- ✅ Smooth scrolling navigation between sections
- ✅ Contact form with localStorage data persistence
- ✅ Complete login/register system with localStorage authentication
- ✅ User dashboard with campaign progress and notifications
- ✅ Mobile-responsive design with bottom navigation bar
- ✅ Simulated mobile app interface
- ✅ Animations and microinteractions (hover effects, fade-ins, scroll reveals)

### User Authentication
- Login/Register system using localStorage
- Protected dashboard access
- User profile display
- Secure logout functionality

### Data Management
- Contact form submissions saved to localStorage
- User account information securely stored
- Campaign progress tracking
- Notification system

### Responsive Design
- Full mobile navigation with bottom bar
- Mobile app interface simulation
- Responsive layouts for all screen sizes
- Touch-friendly elements

## How to Run Locally

### Method 1: Using Python
If you have Python installed:
```bash
# For Python 3
python -m http.server 8000

# For Python 2
python -m SimpleHTTPServer 8000
```

### Method 2: Using Node.js
If you have Node.js installed:
```bash
# Install a simple server
npx serve .

# Or install http-server globally
npm install -g http-server
http-server
```

### Method 3: Using Live Server (VS Code)
If you're using VS Code with the Live Server extension:
- Right-click on `index.html`
- Select "Open with Live Server"

## Deployment to Vercel

### Prerequisites
- A Vercel account (sign up at https://vercel.com for free)
- Your project code in a GitHub repository

### Deployment Steps

1. **Prepare your project:**
   - Ensure your `index.html` file is in the root of your project
   - All resources should be properly linked (no broken paths)

2. **Deploy via GitHub:**
   - Push your project to a GitHub repository
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect and configure your static site
   - Click "Deploy"

3. **Deploy via Vercel CLI:**
   ```bash
   # Install Vercel CLI globally
   npm install -g vercel
   
   # Navigate to your project directory
   cd your-project-directory
   
   # Deploy
   vercel --prod
   ```

4. **Deploy by Drag & Drop:**
   - Go to https://vercel.com
   - Click "New Project"
   - Choose "Create a new project from your file system"
   - Drag and drop your project folder or `index.html` file
   - Click "Deploy"

### Post-Deployment
- You'll receive a deployment URL (e.g., `your-project-name.vercel.app`)
- The site will automatically update when you push changes to your GitHub repository (if connected)
- You can customize your domain in the Vercel dashboard

## File Structure
```
project/
├── index.html          # Main HTML file with all functionality
├── README.md          # This file
└── (other files)      # Any additional assets
```

## Technical Details

### JavaScript Functionality
- **Authentication**: Uses localStorage for user data persistence
- **Contact Form**: Submits data to localStorage with validation
- **Navigation**: Smooth scrolling with anchor links
- **State Management**: Tracks user session and UI state
- **Animations**: CSS-driven animations for better UX

### Styling
- **Tailwind CSS**: CDN version included for utility classes
- **Custom CSS**: Additional styling for animations and layout
- **Responsive Design**: Mobile-first approach with media queries
- **Typography**: Poppins font loaded from Google Fonts

### Browser Compatibility
- Modern browsers with JavaScript enabled
- CSS Grid and Flexbox for layouts
- Smooth scrolling API for navigation

## Customization

### Adding New Features
The application is built with extensibility in mind. To add new features:
1. Modify the HTML structure in `index.html`
2. Add new JavaScript functionality in the script tag
3. Update CSS as needed in the style section

### Updating Content
All text content, images, and styling can be modified directly in the `index.html` file.

### Branding Changes
- Update colors by changing Tailwind classes (e.g., `from-[#5936FF]` to your brand color)
- Replace logo/icon elements
- Update text content as needed

## Troubleshooting

### Common Issues
- **Images not loading**: Ensure image paths are correct
- **Buttons not working**: Check browser console for JavaScript errors
- **Mobile layout broken**: Verify viewport meta tag is present

### Debugging
Open browser developer tools to check for:
- JavaScript errors in the Console tab
- Network issues in the Network tab
- CSS styling conflicts in the Elements tab

## Support

This is a standalone HTML file with no backend dependencies. All data is stored in the browser's localStorage and will persist across sessions but only on the same device and browser.

For support, please check the browser console for errors or contact the developer who created this implementation.

---

© 2025 ÜNIO - AI Marketing Ecosystem