#  MINT Learning Platform for Kids

**An interactive STEM learning platform designed for children aged 5–12.**  
Built with HTML, CSS and vanilla JavaScript (no frameworks), no dependencies. Just clean, accessible frontend development.

**[Live Demo → mintkenngas.onrender.com](https://mintkenngas.onrender.com)**

---

##  About the Project

This project was developed as a **frontend project at Hochschule Worms** (WiSe 2024/25).

The goal was to create an educational web platform that makes STEM topics (Mathematics, Computer Science, and Natural Sciences) approachable and fun for young children. The platform focuses on intuitive design, playful interaction, and accessibility  without relying on any external framework.

### Why this project matters as a developer

Building this in **pure JavaScript** without Angular or React was an intentional constraint. It forced a deep understanding of DOM manipulation, event handling, state management without a framework, and responsive layout from scratch.

---

##  Features

-  **Three learning areas** : Mathematics, Computer Science, Natural Sciences
-  **Interactive quizzes** : multiple-choice questions with immediate feedback
-  **Child-friendly UI** : large fonts, bright colors, intuitive navigation
-  **Responsive design** : works on desktop, tablet, and mobile
-  **Accessibility-focused** : clear structure, readable contrast, simple interactions
-  **No build step required** : open `index.html` and it just works

---

##  Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Semantic structure, multi-page layout |
| CSS3 | Responsive design, animations, child-friendly styling |
| Vanilla JavaScript | Quiz logic, DOM manipulation, dynamic content |

No frameworks. No dependencies. No build tools.

---

##  Project Structure

```
mint/
├── index.html              # Home page — subject selection
├── indexMaths.html         # Mathematics learning area
├── indexNatur.html         # Natural Sciences learning area
├── indexinformatik.html    # Computer Science learning area
├── main.js                 # Core JS — navigation & quiz engine
├── mainMaths.js            # Maths-specific quiz logic
├── mainNatur.js            # Natural Sciences quiz logic
├── mainInformatik.js       # CS quiz logic
├── style.css               # Global styles & responsive layout
└── images/                 # Visual assets
```

---

##  Getting Started

No installation needed. Simply clone and open:

```bash
git clone https://github.com/Lekeb25/mint.git
cd mint
open index.html
```

Or visit the live version directly: **[mintkenngas.onrender.com](https://mintkenngas.onrender.com)**

---

##  What I Learned

- Structuring a multi-page vanilla JS application without a router
- Managing UI state and quiz logic without a framework
- Designing for a non-technical, young audience (UX for kids)
- Writing clean, readable JavaScript with no external dependencies
- Setting up automatic deployment from a GitHub repository using Render

---

##  Context

| | |
|---|---|
| **Type** | Frontend Project — Hochschule Worms |
| **Semester** | WiSe 2024/25 |
| **Scope** | Individual project |
| **Status** |  Completed & deployed |

---

*Part of my portfolio at [kebodel-portfolio.netlify.app](https://kebodel-portfolio.netlify.app)*