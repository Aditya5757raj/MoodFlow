# 🧠 MoodFlow

<div align="center">

![MoodFlow Banner](https://img.shields.io/badge/MoodFlow-Productivity_that_adapts_to_your_mind-667eea?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+)

**Productivity tools that work with your energy, not against it.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[✨ Live Demo](https://your-demo-link.com) • [📖 Documentation](https://your-docs-link.com) • [🐛 Report Bug](https://github.com/yourusername/moodflow/issues) • [💡 Request Feature](https://github.com/yourusername/moodflow/issues)

</div>

---

## 🌟 What is MoodFlow?

MoodFlow is a revolutionary productivity system that **adapts to your mental state**, not the other way around. Traditional task managers treat you like a machine, but humans don't work that way. Some days you're energized and focused. Other days you're drained and stressed.

**MoodFlow understands this.**

Instead of forcing you into rigid workflows, it creates an environment designed for where you are **right now** — leading to less resistance, better focus, and sustainable productivity.

---

## ✨ Features

### 🎯 Core Features

- **Mood-Based Adaptation** - Interface transforms based on your current mental state (Low Energy, Normal, Focused, Stressed)
- **3D Flip Card Authentication** - Modern, premium login/signup experience with smooth 3D transitions
- **Glassmorphism Design** - Beautiful frosted glass effects with backdrop blur
- **Floating Labels** - Smooth, animated form inputs with intuitive UX
- **Real-time Validation** - Instant password matching feedback with visual indicators
- **Toast Notifications** - Elegant, non-intrusive notifications for user feedback

### 🎨 Design Highlights

- **Animated Starfield Background** - Dynamic parallax effect with twinkling stars
- **Floating Brain Character** - Smooth animations with orbital particles
- **Micro-interactions** - Thoughtful hover effects, button feedback, and transitions
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile
- **Password Visibility Toggle** - Easy-to-use eye button for password fields
- **Smooth Transitions** - Cubic-bezier easing for premium feel

---

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/moodflow.git
   cd moodflow
   ```

2. **Open the project**
   ```bash
   # Simply open index.html in your browser
   open index.html
   
   # Or use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **That's it!** 🎉 No build process, no dependencies to install.

---

## 📂 Project Structure

```
moodflow/
├── index.html              # Landing page
├── auth.html              # Login/Signup page with 3D flip card
├── assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   └── main.js        # Core JavaScript
│   └── images/
│       └── logo.svg       # Brand assets
├── README.md              # You are here!
└── LICENSE                # MIT License


---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic structure and accessibility |
| **CSS3** | Advanced animations, glassmorphism, 3D transforms |
| **JavaScript (Vanilla)** | Interactive features, form validation, toast system |
| **Google Fonts (Inter)** | Modern, readable typography |
| **No frameworks!** | Pure, lightweight, fast-loading code |

---

## 🎯 Key Components

### 1. **3D Flip Card System**
```css
.flip-card-wrapper {
    perspective: 2000px;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.flip-card-wrapper.flipped {
    transform: rotateY(180deg);
}
```

### 2. **Toast Notification System**
```javascript
function showToast(type, title, message, duration = 4000) {
    // Creates beautiful, dismissible notifications
    // Types: success, error, warning, info
}
```

### 3. **Floating Label Pattern**
- Labels animate smoothly when input is focused or filled
- Provides better UX than traditional placeholder text
- Accessible and keyboard-friendly

---

## 🎨 Color Palette

```css
/* Primary Gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Glass Effects */
background: rgba(255, 255, 255, 0.12);
backdrop-filter: blur(25px);
border: 1px solid rgba(255, 255, 255, 0.3);

/* Status Colors */
Success: #4ade80
Error: #f87171
Warning: #fbbf24
Info: #60a5fa
```

---

## 🚧 Roadmap

- [ ] **Mood Tracking Dashboard** - Visualize your productivity patterns
- [ ] **Task Management System** - Smart task prioritization based on mood
- [ ] **Dark/Light Mode Toggle** - User preference support
- [ ] **Backend Integration** - User authentication and data persistence
- [ ] **Mobile App** - Native iOS and Android applications
- [ ] **Calendar Integration** - Sync with Google Calendar, Outlook
- [ ] **Analytics & Insights** - AI-powered productivity recommendations
- [ ] **Team Collaboration** - Share mood-adaptive workflows with teams

---

## 🤝 Contributing

We love contributions! Here's how you can help make MoodFlow even better:

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add comments for complex logic
- Test your changes across different browsers
- Update documentation as needed

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have an idea? We'd love to hear from you!

- **Bug Report**: [Create an issue](https://github.com/yourusername/moodflow/issues/new?template=bug_report.md)
- **Feature Request**: [Request a feature](https://github.com/yourusername/moodflow/issues/new?template=feature_request.md)

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 MoodFlow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 💝 Acknowledgments

- Inspired by the need for more human-centered productivity tools
- Design influenced by modern glassmorphism and neumorphism trends
- Built with ❤️ for people who believe productivity should adapt to humans, not the other way around

---

## 📬 Contact & Support

<div align="center">

**Have questions or need help?**

[![Email](https://img.shields.io/badge/Email-hello@moodflow.com-667eea?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hello@moodflow.com)
[![Twitter](https://img.shields.io/badge/Twitter-@moodflow-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/moodflow)
[![Discord](https://img.shields.io/badge/Discord-Join_Community-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/moodflow)

</div>

---

## ⭐ Show Your Support

If you find MoodFlow helpful, please consider:

- ⭐ **Starring this repository**
- 🐦 **Sharing on Twitter**
- 📝 **Writing a blog post**
- 💬 **Telling your friends**

<div align="center">

**Made with 🧠 and ❤️ by the Aditya**

[⬆ Back to Top](#-moodflow)

</div>