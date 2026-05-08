# Which Elite Council Boss Are You?

A personality-driven interactive experience for **Tien Len Tournament Season IV**, built by the Vietnamese International Student Association (VISA) at USF.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/Status-Archive-lightgrey?style=flat)

---

## Overview

The **Elite Council Quiz** is a personality-driven interactive web application developed as a promotional experience for Tien Len Tournament Season IV. Using a "sorting hat" mechanic, it assigns users to one of five **Elite Boss** archetypes:

| Boss | Archetype |
|------|-----------|
| **Machination** | Strategic & calculating |
| **Monomania** | Intense & single-minded |
| **Legilimency** | Perceptive & intuitive |
| **Prescience** | Prophetic & far-sighted |
| **Sangfroid** | Emotionless & composed |

By combining psychological profiling with generative AI, the quiz drives user engagement through immersive storytelling and interactive roleplay.

---

## 🏛️ Project Details

| Field | Info |
|-------|------|
| **Organization** | VISA at USF |
| **Team** | Marketing & Events |
| **Timeline** | 2 Weeks |
| **Purpose** | Event Promotion — Tien Len Tournament Season IV |

---

## ✨ Key Features

- **Conversational UI** — Chat-based interface with bot messages left, user responses right, simulating a direct line to the Elite Council
- **Simulated Latency** — 600ms logic delays + typing animations for a natural, human reading rhythm
- **Personality-Driven AI** — Context-aware responses that detect themes (fear, power, emotion, strategy) and adapt to each boss's unique voice
- **Glass-morphism Design** — Layered opacity, CSS backdrop blurs, and luxury typography (`Cinzel` for titles, `Poppins` for body)
- **Fully Responsive** — Elegant royal aesthetic across all mobile and desktop viewports

---

## 🛠️ Built With

**Design**
- Figma
- Adobe Illustrator / Photoshop

**Frontend**
- React
- Tailwind CSS
- Framer Motion

**AI Infrastructure**
- Vercel AI SDK
- Custom System Prompts
- Edge Runtime

---

## 🎬 Final Product Walkthrough

Watch the full experience from start to finish:

🎥 [**Watch on Loom →**](https://www.loom.com/share/836393cea4bc4823aafffd06d44dedf4)

---

## 🎨 Design File

View the full UI design and prototype on Figma:

🔗 [**Open in Figma →**](https://server-play-06832724.figma.site)

---

## 🔒 Live Version

The live experience is currently **invite-only** and intended for Tien Len Tournament Season IV participants. If you'd like access, please reach out to the VISA at USF team directly.

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/elite-council-quiz.git

# Navigate into the project
cd elite-council-quiz

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

## 🧩 Design Decisions

### Conversational Interface
Standard forms were replaced with a chat-based UI. Bot messages appear on the left and user responses on the right — simulating a direct line of communication with the Council.

### Simulated Latency
Real-time AI responses can feel too fast and robotic. A 600ms logic delay combined with typing animations ensures a natural reading rhythm that makes the experience feel alive.

### Personality-Driven AI
Each Elite Boss has distinct voice patterns and philosophical approaches. The AI detects contextual themes in user messages and responds accordingly — Machination is strategic, Monomania is intense, Legilimency is perceptive, Prescience is prophetic, Sangfroid is emotionless.

### Responsive Luxury Aesthetic
A custom Glass-morphism UI using layered opacity, CSS backdrop blurs, and sophisticated typography maintains a premium, royal aesthetic that loads instantly without heavy image assets.

---

## ⚔️ Challenges & Solutions

**Hallucinations & Breaking Character**
> Implemented context-aware AI that detects themes in user messages and triggers personality-specific dialogue. Each boss has its own distinct voice and philosophical framework to stay in character.

**Maintaining Luxury Aesthetic**
> Built a custom Glass-morphism UI with layered opacity, CSS backdrop blurs, and curated typography (Cinzel + Poppins) for a premium feel that loads instantly without heavy assets.

**Quiz Scoring & Tie-Breaking**
> Developed a deterministic tie-breaker system with priority ranking: `Sangfroid > Prescience > Legilimency > Monomania > Machination`, ensuring fair personality distribution across all result outcomes.

---

## 📊 Results & Impact

| Metric | Result |
|--------|--------|
| **Responsive** | 100% — flawless layout stability across all viewports |
| **Users** | 300+ unique students engaged during the two-week launch window |
|**Avg. Session**| 3.5 minutes per user, indicating deep investment in the storyline |

---

## 👥 Team

| Role | Name |
|------|------|
| Creative Lead | [Trang Pham](https://www.linkedin.com/in/trang-pham-441140299/) |
| Lead Product Designer | [Khanh Le](https://www.linkedin.com/in/khanh-le-b95688341/) |
| Technical Lead | [Tuan Huynh](https://www.linkedin.com/in/tunawork/) |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> *Built with love for VISA at USF — Go Bulls! 🤘*
