# Image File Checklist

This file helps you verify all image files are correctly named and placed.

## ✅ Images Found in Your Project

### Profile Image

- [x] `/images/profile.WebP` - Found ✓

### Experience

- [x] `/images/CrescentRating.WebP` - Found ✓

### Velora Project

- [x] `/images/projects/velora/Home Page Velora.jpg` - Found ✓
- [x] `/images/projects/velora/About Page Velora.jpg` - Found ✓
- [x] `/images/projects/velora/hasil deteksi.jpeg` - Found ✓

### CertiVerify Project

- [x] `/images/projects/certiverify/login.png` - Found ✓
- [x] `/images/projects/certiverify/Dashboard.png` - Found ✓
- [x] `/images/projects/certiverify/Profil.png` - Found ✓
- [x] `/images/projects/certiverify/Scann cam.png` - Found ✓
- [x] `/images/projects/certiverify/Dompet Sertif.png` - Found ✓

### Certificates

- [x] `/images/certificates/BuildWithAnggaCourse.jpg` - Found ✓
- [x] `/images/certificates/backend_dicoding_putra-1.png` - Found ✓
- [x] `/images/certificates/rest_api_intermediate certificate-1.png` - Found ✓
- [x] `/images/certificates/SERTIFIKAT HIMA.jpg` - Found ✓

### Awards

- [x] `/images/awards/Dengan Rahmat Tuhan Yang Maha Esa -1.png` - Found ✓
- [x] `/images/awards/Proyek Terbaik Pertama Mata Kuliah RPL (1)-1.png` - Found ✓
- [x] `/images/awards/Proyek Terbaik Kedua Mata Kuliah Pemrograman web (1)-1.png` - Found ✓

---

## 📝 Notes

All images are correctly placed and referenced in the code. The project is ready to run!

### Important Image Notes:

1. **WebP Format**: Profile and experience images use WebP format for better performance
2. **Responsive Sizes**: All images use next/image with proper sizes configuration
3. **Lazy Loading**: Images are automatically lazy-loaded by Next.js
4. **Alt Text**: All images have descriptive alt text for accessibility

### Missing Images (Optional):

If you want to add these later:

- **NgeKos Project**: Currently no images (project will show placeholder gradient)
- **BASMI Project**: Currently no images (project will show placeholder gradient)
- **Additional Certificates**: You have placeholders for 2 more certificates (currently showing duplicates of existing ones)

You can add these images later by:

1. Creating the folder: `/public/images/projects/[slug]/`
2. Adding screenshot images
3. Updating the `images` array in `lib/data.ts`

---

## 🎨 Recommended Image Sizes

For best results, use these dimensions:

- **Profile**: 400x400px (square, WebP)
- **Experience Poster**: 1920x1080px (16:9, WebP)
- **Project Screenshots**: 1920x1080px (16:9, JPG/PNG)
- **Certificates**: 1200x900px (4:3, JPG/PNG)
- **Awards**: 1200x900px (4:3, PNG)

All images will be automatically optimized by Next.js.
