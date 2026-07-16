# 🚀 GOKUL RAJA G — Portfolio

A premium, responsive, single-page portfolio built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- 🎨 Dark navy theme with electric blue/purple gradients
- 💎 Glassmorphism cards with hover effects
- 🎭 Smooth scroll-triggered animations (Framer Motion)
- 📱 Fully responsive (mobile / tablet / desktop)
- 📄 One-file configuration for all personal data
- 📬 Formspree-powered contact form
- 🔍 Full SEO, Open Graph, and Twitter Card support
- 🎯 Custom 404 page

---

## 📂 Project Structure

```
gokul-portfolio/
├── public/
│   ├── resume.pdf          ← Replace with your resume
│   ├── favicon.svg
│   ├── 404.html
│   └── og-image.png        ← Replace with your OG image
├── src/
│   ├── config/
│   │   └── siteConfig.js   ← ✏️ EDIT THIS FILE for all data
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Elevate.jsx
│   │   ├── CareerObjective.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollReveal.jsx
│   │   └── GradientBlob.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## ✏️ How to Edit Your Details

**All personal data is in one file:** `src/config/siteConfig.js`

Open it and edit:

| Section | What to change |
|---------|---------------|
| `name`, `role`, `tagline` | Your personal info |
| `about` | About me paragraphs |
| `education` | Degree, year, CGPA |
| `skills` | Technical & soft skills with proficiency levels |
| `projects` | Project titles, descriptions, tech stacks, URLs |
| `elevate` | Business name, services, descriptions |
| `careerObjective` | Your career objective text |
| `contact` | Email, phone, location, Formspree endpoint |
| `social` | LinkedIn, GitHub, WhatsApp URLs |
| `seo` | Page title, description, OG image, URL |

### Resume
Replace `public/resume.pdf` with your actual resume file (keep the filename `resume.pdf`).

### Contact Form
1. Go to [formspree.io](https://formspree.io) and create a free form
2. Copy your endpoint (e.g., `https://formspree.io/f/xyzabc123`)
3. Paste it in `siteConfig.js` → `contact.formspreeEndpoint`

---

## 🖥️ Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/gokul-portfolio.git
cd gokul-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

---

## 📤 Upload to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: portfolio site"

# Create a repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/gokul-portfolio.git
git branch -M main
git push -u origin main
```

---

## 🚀 Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `gokul-portfolio` repository
4. Framework Preset: **Vite** (auto-detected)
5. Click **Deploy** — done! 🎉

### Option B: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

---

## 🛠️ Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 📄 License

Built with ❤️ by **GOKUL RAJA G** — © 2026
