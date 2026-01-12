# Admin Dashboard

## Overview
The admin dashboard allows you to manage all content on your website without editing code files.

## Access
Navigate to `/admin` in your browser (e.g., `http://localhost:3000/admin`)

## Features

### Site Configuration
- Business name and tagline
- Location information
- Hero section content
- SEO settings

### Services Management
- Add, edit, or remove cleaning service packages
- Update prices, durations, and features
- Manage service images

### Pricing Plans
- Manage recurring plans (Weekly, Bi-Weekly, Monthly)
- Set discounts and highlight featured plans
- Update plan descriptions

### Add-on Services
- Manage optional add-on services
- Update pricing and descriptions
- Configure icons

### Contact Information
- Update WhatsApp number and default message
- Set business hours
- Configure service area information

### FAQ Management
- Add, edit, or remove frequently asked questions
- Update questions and answers

### Testimonials
- Manage customer testimonials
- Update names, locations, and testimonial text
- Configure avatar images

### How It Works
- Manage booking process steps
- Update step titles, descriptions, and icons

### Trust & Safety
- Manage trust points and safety features
- Update titles, descriptions, and icons

## How It Works

1. **Edit Content**: Use the forms in each tab to edit content
2. **Save Changes**: Click "Save Changes" button in each section
3. **View Site**: Click "View Site" to see your changes (note: changes are saved to browser localStorage)

## Important Notes

⚠️ **Current Implementation**: Changes are saved to browser localStorage. This means:
- Changes are only visible in the browser where you made them
- Changes will be lost if you clear browser data
- For production use, you should integrate with a backend API or database

## Future Enhancements

To make this production-ready, consider:
1. Adding authentication/authorization
2. Connecting to a backend API or database
3. Adding image upload functionality
4. Exporting/importing configuration
5. Version history/rollback capabilities
