// Script to create placeholder image data URLs
// Run this in browser console if needed

export const placeholderImage =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%231a1a24"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%236b7280"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';

// For different aspect ratios
export const placeholders = {
  landscape:
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080"%3E%3Crect width="1920" height="1080" fill="%231a1a24"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="48" fill="%236b7280"%3EProject Screenshot%3C/text%3E%3C/svg%3E',

  portrait:
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="1200"%3E%3Crect width="800" height="1200" fill="%231a1a24"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="32" fill="%236b7280"%3EMobile Screenshot%3C/text%3E%3C/svg%3E',

  square:
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="800"%3E%3Crect width="800" height="800" fill="%231a1a24"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="32" fill="%236b7280"%3EProfile Image%3C/text%3E%3C/svg%3E',

  certificate:
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="900"%3E%3Crect width="1200" height="900" fill="%231a1a24"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="40" fill="%236b7280"%3ECertificate Image%3C/text%3E%3C/svg%3E',
};
