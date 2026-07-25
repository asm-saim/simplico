<img src="./src/assets/logo.png" width="200"/>

# Simplico

A modern, responsive React app-marketplace UI in the style of an app store. Browse apps, search instantly, view detailed stats and rating charts, and install/uninstall apps with persistent local storage.

[![Live Demo](https://img.shields.io/badge/demo-live-3B82F6?style=flat-square)](https://simplico-v1.netlify.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

**🔗 Live Demo:** [simplico-v1.netlify.app](https://simplico-v1.netlify.app/)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Pages](#pages)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Overview

Simplico lets users:

- Browse featured and trending apps
- Search apps instantly with live, case-insensitive filtering
- View detailed app info, stats, and an interactive rating chart
- Install apps with persistent Local Storage support (duplicates prevented)
- Uninstall apps and sort the installed list by download count
- Get instant feedback via toast notifications
- Use a fully responsive UI across desktop, tablet, and mobile

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Routing | React Router |
| Styling | Tailwind CSS, DaisyUI |
| Charts | Recharts |
| Notifications | React Toastify |
| State Management | React Hooks |
| Data Source | Local JSON |
| Storage | Local Storage |
| Language | JavaScript (ES6+) |
| Build Tool | Vite |

---

## Features

<details>
<summary><strong>Home Page</strong></summary>

- Responsive hero banner
- Direct links to App Store / Play Store
- Statistics section
- Featured top apps + "Show All Apps" button

</details>

<details>
<summary><strong>Apps Page</strong></summary>

- All available apps in a responsive grid
- Live, case-insensitive search with total app counter
- "No App Found" state for empty search results

</details>

<details>
<summary><strong>App Details</strong></summary>

- Logo, screenshots, and full description
- Download count, average rating, review count
- Install button with dynamic (installed/not installed) state
- Responsive rating chart (Recharts)

</details>

<details>
<summary><strong>Installation Management</strong></summary>

- Install / uninstall apps with real-time UI updates
- Duplicate installs prevented
- Persisted via Local Storage across page refreshes
- Dedicated **My Installation** page
- Sort installed apps by downloads (High → Low / Low → High)

</details>

<details>
<summary><strong>Smart Validation & Notifications</strong></summary>

- Toast notifications on install / uninstall
- Disabled Install button once an app is installed

</details>

Also fully responsive: navbar, banner, app cards, charts, installation page, footer, and error page.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/asm-saim/simplico.git
cd simplico

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

The app runs locally at `http://localhost:5173` by default (Vite's default port).

---

## Pages

| Page | Contents |
|---|---|
| **Home** | Hero banner, statistics, top apps, footer |
| **Apps** | Search bar, app count, full apps grid |
| **App Details** | App info, rating overview, downloads & reviews, install button, rating chart, description |
| **My Installation** | Installed apps list, download sorting, uninstall action |
| **Error Page** | Custom 404 for invalid routes |

---

## Screenshots

| Home Page | Apps Page |
|---|---|
| <img src="./src/assets/homePage.png" width="380"> | <img src="./src/assets/appsPage.png" width="380"> |

| App Details | My Installation |
|---|---|
| <img src="./src/assets/appDetails.png" width="380"> | <img src="./src/assets/myInstallation.png" width="380"> |

**Mobile View**

<img src="./src/assets/mobile.png" width="220">

---

## Future Improvements

- Backend API integration
- User authentication
- Favorites system
- Dark mode
- Category filtering & pagination
- App recommendations and user reviews
- Cloud synchronization
- PWA support

---

## Author

**A S M Saim**

- GitHub: [@asm-saim](https://github.com/asm-saim)
- LinkedIn: [asmsaim](https://www.linkedin.com/in/asmsaim/)