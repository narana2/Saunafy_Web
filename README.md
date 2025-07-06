# Saunafy Landing Page

A modern, responsive landing page for the Saunafy app, designed to showcase the app's features and drive downloads.

## Overview

This landing page is built with HTML, CSS, and vanilla JavaScript. It follows Apple's design aesthetic with clean typography, ample white space, and subtle animations.

## Structure

The landing page consists of the following sections:

1. **Hero** - Main headline and app showcase
2. **Features** - Core app functionality
3. **Apple Watch Integration** - Watch-specific features
4. **Recovery Insights** - Data-driven recovery metrics
5. **Testimonials** - User feedback
6. **Pricing** - Subscription options
7. **FAQ** - Common questions
8. **Download CTA** - Final call to download

## Getting Started

### Prerequisites

- Basic web server (can be local or hosted)
- Image assets for the app screenshots, logos, etc.

### Installation

1. Clone this repository or download the files
2. Add your custom images to the `images` folder
3. Update the app store link in the HTML file
4. Deploy to your web server

## Customization

### Images

The landing page requires several image assets:

- `images/saunafy-logo.svg` - Your app logo
- `images/app-showcase.png` - Hero image of the app
- `images/watch-app.png` - Apple Watch app screenshot
- `images/recovery-score.png` - Recovery score screenshot
- `images/hrv-tracking.png` - HRV tracking screenshot
- `images/session-analytics.png` - Session analytics screenshot
- `images/testimonial-1.jpg` and `images/testimonial-2.jpg` - User photos
- `images/app-store-badge.svg` - App Store download badge
- `images/icon-twitter.svg`, `images/icon-instagram.svg`, `images/icon-facebook.svg` - Social icons

### Colors

The primary color scheme is defined in the `:root` section of `css/styles.css`:

```css
:root {
  --primary: #FF7D00; /* Saunafy orange */
  --primary-dark: #E06D00;
  --secondary: #0088CC; /* Cool blue for contrast */
  --accent: #5856D6; /* Apple-style purple */
  /* Additional colors... */
}
```

Modify these values to match your brand colors.

### Content

Update the text content in `index.html` to reflect your app's specific features, pricing, and messaging.

## Browser Support

The landing page uses modern CSS features like CSS variables, flexbox, and grid. It should work in all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Mobile Responsiveness

The landing page is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px+)
- Mobile (under 768px)

The responsive design adjusts layouts, typography, and spacing for optimal viewing on all devices.

## SEO Considerations

For best SEO results:

1. Update the title and meta tags in the `<head>` section
2. Add a favicon
3. Optimize image sizes for fast loading
4. Consider adding Open Graph and Twitter Card meta tags for better social sharing

## Deployment

To deploy the landing page:

1. Upload all files to your web hosting
2. Ensure all file paths are correct
3. Test all links and verify images are loading properly

## Adding Analytics

To track visitor engagement:

1. Add Google Analytics or similar tracking code before the closing `</body>` tag
2. Set up conversion tracking for app download button clicks

## License

This landing page template is provided for use with the Saunafy app only.

## Contact

For support or questions, please contact support@saunafy.app 