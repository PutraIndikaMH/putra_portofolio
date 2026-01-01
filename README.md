# Portfolio Website - Putra Indika Malik Hakim

Modern, responsive portfolio website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## 🚀 Features

- **One-Page Scroll Layout**: Single-page landing with smooth scroll sections
- **Dark Theme**: Clean, minimal, modern developer aesthetic
- **Responsive Design**: Mobile-first, works perfectly on all devices
- **Dynamic Project Pages**: Detailed project pages with `/project/[slug]` routes
- **Interactive Components**:
  - Hero section with profile and introduction
  - Experience showcase with industrial project
  - 4 Selected projects with clickable cards
  - 6 Certificates with modal previews
  - 3 Awards & Honors
  - Contact section with social links
- **Image Optimization**: Using next/image with lazy loading and WebP format
- **Modal System**: Certificate and experience detail modals
- **Image Galleries**: Full-featured galleries with thumbnails and fullscreen
- **TypeScript**: Full type safety
- **Clean Code**: Well-organized, maintainable structure
- **Performance Optimized**: Minimal JS, efficient section spacing

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── page.tsx               # Landing page (one-page scroll)
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles with Tailwind
│   └── project/
│       └── [slug]/
│           └── page.tsx       # Dynamic project detail pages
├── components/
│   ├── ProjectCard.tsx        # Project card component
│   ├── CertificateCard.tsx    # Certificate card component
│   ├── AwardCard.tsx          # Award card component
│   ├── ExperienceCard.tsx     # Experience card component
│   ├── ImageGallery.tsx       # Image gallery with lightbox
│   └── Modal.tsx              # Reusable modal component
├── lib/
│   ├── data.ts                # All portfolio data
│   └── placeholders.ts        # Placeholder images
├── public/
│   └── images/                # All image assets
│       ├── profile.WebP       # Profile image
│       ├── CrescentRating.WebP # Experience poster
│       ├── projects/          # Project screenshots by slug
│       ├── certificates/      # Certificate images
│       └── awards/            # Award images
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── QUICKSTART.md              # Quick setup guide
└── package.json               # Dependencies
```

## 🛠️ Installation & Setup

1. **Install dependencies:**

   ```bash
   cd portfolio-nextjs
   npm install
   ```

2. **Customize your data:**

   Edit [lib/data.ts](lib/data.ts) to update:

   - Profile information (name, role, about, contact)
   - Experience (industrial project)
   - Projects (4 featured projects)
   - Certificates (6 certificates)
   - Awards (3 awards)

3. **Add your images:**

   Place images in `/public/images/`:

   - Profile: `/images/profile.WebP`
   - Experience poster: `/images/CrescentRating.WebP`
   - Project screenshots: `/images/projects/[slug]/`
   - Certificates: `/images/certificates/`
   - Awards: `/images/awards/`

4. **Run development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

5. **Build for production:**

   ```bash
   npm run build
   npm start
   ```

## 📄 Page Structure

### Landing Page (/)

Single-page scroll layout with sections:

1. **Hero** - Profile image, name, role, about
2. **Experience** - Industrial project card (clickable for modal)
3. **Selected Projects** - 4 project cards (link to detail pages)
4. **Certificates** - 6 certificate thumbnails (clickable for modal)
5. **Awards** - 3 award cards
6. **Contact** - Email and social links

### Project Detail Pages (/project/[slug])

Dynamic routes for each project with:

- Project title & tagline
- Overview
- Problem & Solution
- System/Architecture image (optional)
- Tech stack
- Role & responsibilities
- Challenges & technical decisions
- Outcome & impact
- Image gallery
- GitHub/Demo links

## 🎨 Customization

### Update Colors

Edit [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  accent: {
    primary: "#4169e1",  // Change this
    hover: "#2b5fc4",
  },
  // ... other colors
}
```

### Update Profile Data

Edit [lib/data.ts](lib/data.ts):

```typescript
export const profile = {
  name: "Your Name",
  role: "Your Role",
  about: "Your about text (max 3 lines)",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  image: "/images/profile.WebP",
};
```

### Add New Project

1. Add project data to [lib/data.ts](lib/data.ts)
2. Add images to `/public/images/projects/[slug]/`
3. Route is automatically generated

## 📱 Responsive Design

- **Mobile**: Optimized for small screens
- **Tablet**: Adjusted layouts for medium screens
- **Desktop**: Full-featured layout

All images use `next/image` with responsive sizes and lazy loading.

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Image Optimization**: next/image
- **Fonts**: Plus Jakarta Sans (Google Fonts)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
vercel
```

### Deploy to Other Platforms

1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting platform

## 📝 Notes

- All images should be in WebP format for best performance
- Profile image recommended size: 160x160px
- Project images recommended: 1920x1080px (16:9 aspect ratio)
- Certificate images recommended: 1200x900px (4:3 aspect ratio)
- Award images recommended: 1200x900px (4:3 aspect ratio)

## 📋 Checklist

- [ ] Update profile information in `lib/data.ts`
- [ ] Add profile image to `/public/images/`
- [ ] Add experience poster to `/public/images/`
- [ ] Add project images to `/public/images/projects/[slug]/`
- [ ] Add certificate images to `/public/images/certificates/`
- [ ] Add award images to `/public/images/awards/`
- [ ] Update GitHub and LinkedIn links
- [ ] Test on mobile, tablet, and desktop
- [ ] Build and deploy

## 📞 Support

For questions or issues, please refer to [QUICKSTART.md](QUICKSTART.md) or create an issue.

---

**Built with ❤️ using Next.js & Tailwind CSS**

- **CertiVerify**: Add to `public/images/projects/certiverify/`

  - login.png
  - dashboard.png
  - profile.png
  - scan.png
  - camera.png
  - wallet.png
  - certificate.png

- **NgeKos**: Add to `public/images/projects/ngekos/`

  - (Add your screenshots here)

- **BASMI**: Add to `public/images/projects/basmi/`
  - (Add when ready)

### Certificates

Add to `public/images/certificates/`:

- buildwithangga.jpg
- backend-dicoding.png
- rest-api.png
- rpl-project.png
- aws-cloud.png
- hima.jpg

### Awards

Add to `public/images/awards/`:

- basmi.jpg
- best-project.jpg

## 🎨 Customization

### Colors (tailwind.config.js)

```js
colors: {
  accent: {
    primary: '#6366f1',    // Main accent color
    hover: '#818cf8',      // Hover state
  }
}
```

### Content (lib/data.ts)

- Update profile information
- Add/remove projects
- Modify experience details
- Update certificates and awards
- Change social media links

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Build for production

```bash
npm run build
npm start
```

## 📝 Data Structure

### Adding a New Project

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  category: 'personal',
  description: 'Short description',
  longDescription: 'Detailed description for modal',
  technologies: ['Tech1', 'Tech2'],
  images: ['/images/projects/project-id/image1.png'],
  featured: true,
  github: 'https://github.com/...',
  year: '2024'
}
```

### Adding a Certificate

```typescript
{
  id: 'cert-id',
  title: 'Certificate Title',
  issuer: 'Issuing Organization',
  date: '2024',
  description: 'Certificate description',
  image: '/images/certificates/cert.png',
  skills: ['Skill1', 'Skill2']
}
```

## 🎯 Features to Customize

1. **Landing Page Redirect Time**: Edit `app/page.tsx` (currently 3 seconds)
2. **Social Links**: Update `lib/data.ts` profile section
3. **Email**: Update `profile.email` in `lib/data.ts`
4. **Add More Sections**: Create new components in `components/`
5. **Theme Colors**: Modify `tailwind.config.js`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS Animations
- **Image Optimization**: Next.js Image component

## 📄 License

MIT License - Feel free to use for your own portfolio!

## 💡 Tips

1. Use high-quality images (at least 1920x1080 for projects)
2. Keep descriptions concise but informative
3. Update data.ts regularly with new projects/certificates
4. Test on multiple devices before deployment
5. Optimize images before uploading (use WebP format)

## 🆘 Troubleshooting

**Images not showing?**

- Check file paths in `lib/data.ts`
- Ensure images are in correct folders
- Check file extensions match

**Build errors?**

- Run `npm install` again
- Clear `.next` folder: `rm -rf .next`
- Check TypeScript errors

**Styling issues?**

- Clear browser cache
- Check Tailwind config
- Verify CSS imports

## 📞 Support

For questions or issues, check:

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

---

Built with ❤️ by Putra Indika Malik Hakim
