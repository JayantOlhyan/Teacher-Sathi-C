# TeacherSathi 🎓 

> **Teachers ka Superpower | शिक्षकों का सुपरपावर**
> *Built for my mother, a government school teacher.*

TeacherSathi is a next-generation, AI-powered teaching companion designed specifically for Indian government and private schools. It operates entirely in the browser—no hardware clickers required—and is fully optimized for 75-inch smart classroom displays. With native bilingual support (English/Hindi), TeacherSathi allows educators to generate comprehensive study materials, track student analytics, and assign assessments with ease.

---

## 🚀 Features

The MVP focuses on delivering a highly premium, intuitive frontend experience tailored for both teachers and administrative operators.

### 📚 Content Delivery & Interactivity
- **Choose Chapter (Bookshelf UI)**: A beautifully designed visual bookshelf where subjects are organized by spine colors and premium chapters feature lock overlays.
- **Chapter Hub**: An 8-card grid dashboard for specific chapters (e.g., *Light — Reflection & Refraction*) offering AI Videos, MCQs, Q&A banks, Mind Maps, and PDFs.
- **Custom Video Player**: A dark-themed video interface featuring chapter navigation, jump-to timestamps, adjustable playback speed, and a dedicated "Classroom Mode".
- **Quick MCQ Quiz Engine**: An interactive quiz interface with real-time feedback (correct/incorrect), floating difficulty badges, and celebratory confetti effects.
- **Chapter Test Environment**: A high-stakes exam UI featuring a 25-question grid navigator, active countdown timer, flagging system, and review functionalities.

### 👩‍🏫 User Dashboards
- **Teacher Dashboard**: A robust control panel with a sticky-note KPI row tracking students and tests, alongside detailed "My Classes" cards displaying upcoming test progress and recent activity feeds.
- **Authentication**: Seamless split-screen login and signup pages supporting both Teacher and Student roles, with built-in Google OAuth support.
- **Landing & Pricing Pages**: High-conversion marketing pages with competitor contrasts (vs. hardware-based solutions) and clear Free/Pro tier breakdowns.

### ⚙️ Admin Tools
- **Pipeline Control**: A secure, terminal-inspired interface for triggering and monitoring the autonomous AI video generation pipeline. Features real-time job status tracking (Queued, Processing, Done, Failed) and budget analytics.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) Primitives, [Lucide Icons](https://lucide.dev/)
- **Internationalization (i18n):** `next-intl` (Cookie-based locale detection for seamless EN/HI switching without URL routing changes)
- **Backend/Auth SDK:** [Supabase JS](https://supabase.com/)

---

## 📂 Project Structure

```text
teacher-sathi/
├── src/
│   ├── app/
│   │   ├── admin/pipeline/      # Terminal-style autonomous pipeline control
│   │   ├── content/[grade]/     # Subject/Chapter bookshelf & Hub
│   │   │   └── [subject]/[chapter]/
│   │   │       ├── video/       # Custom video player UI
│   │   │       ├── quiz/        # MCQ Quiz interface
│   │   │       └── test/        # High-stakes Chapter Test interface
│   │   ├── dashboard/           # Teacher control panel
│   │   ├── login/               # Authentication UI
│   │   ├── pricing/             # Subscription tiers
│   │   ├── layout.tsx           # Root layout with i18n NextIntlClientProvider
│   │   └── page.tsx             # Landing Page
│   ├── components/
│   │   ├── ui/                  # Reusable Button, Card primitives
│   │   └── LanguageToggle.tsx   # Cookie-based EN/HI switcher
│   ├── lib/
│   │   └── supabase.ts          # Supabase client configuration
│   └── i18n.ts                  # next-intl configuration
├── messages/
│   ├── en.json                  # English localization strings
│   └── hi.json                  # Hindi localization strings
└── tailwind.config.ts           # Custom brand colors and marquee animations
```

---

## 💻 Local Setup & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JayantOlhyan/TeacherSathi.git
   cd TeacherSathi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🌍 Internationalization (i18n) Guide
TeacherSathi uses `next-intl` for localization. We use a cookie-based approach (`NEXT_LOCALE`) rather than parameterized routing to keep URLs clean (e.g., `/dashboard` instead of `/en/dashboard`). To add new translations, simply update `messages/en.json` and `messages/hi.json`.

---

## 🔜 Roadmap (Phase 5 & 6)
- **State Management:** Connect interactive elements to Zustand/React Query.
- **Backend Integration:** Implement actual Supabase Auth flow and RLS policies.
- **Video Logic:** Hook up the YouTube IFrame API to the custom video player interface.
- **SEO & Polish:** Implement `sitemap.xml`, `robots.txt`, and loading skeleton UIs.
