# 🚀 Sumit Sharma - Portfolio

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://www.sumitsharma.codes/)

A professional, high-fidelity personal portfolio built using the **MERN stack** (React frontend + Node/Express backend). This project features a modern UI/UX design, smooth motion physics, and a fully integrated backend for contact management and automated emailing.

**🔗 [Live Demo](https://www.sumitsharma.codes/)**

---

## 🚀 Key Features

*   **⚡ Modern Frontend:** Developed with **React 19** and **Vite** for lightning-fast HMR and optimized production builds.
*   **🎭 Fluid Animations:** Utilizes **Framer Motion** for sophisticated scroll reveals, hover effects, and Page transitions.
*   **🎨 Dynamic Styling:** Built with **Tailwind CSS 4.0**, featuring a responsive grid system and custom utility classes for a sleek aesthetic.
*   **📩 Integrated Contact System:** A robust backend powered by **Express 5** and **Nodemailer** to handle contact form submissions with automated email notifications.
*   **💬 Live Chat Integration:** Embedded **Tawk.to** support for real-time visitor interaction.
*   **🧩 Interactive Components:** Includes a custom TypeWriter effect, Tilt images, and Floating Elements for an engaging user experience.
*   **📱 Fully Responsive:** Mobile-first architecture ensuring seamless performance across all device types.

---

## 🛠 Technology Stack

### Frontend
| Technology | Version | Description |
| :--- | :--- | :--- |
| **React** | `^19.1.1` | UI Library |
| **Vite** | `^7.1.2` | Build Tool/Bundler |
| **Framer Motion** | `^12.29.2` | Animation Engine |
| **Tailwind CSS** | `^4.1.12` | Styling Framework |
| **React Router** | `^7.8.2` | Client-side Routing |

### Backend
| Technology | Version | Description |
| :--- | :--- | :--- |
| **Node.js** | LTS | Runtime Environment |
| **Express** | `^5.1.0` | Web Framework |
| **Nodemailer** | `^7.0.6` | Email Service |
| **Dotenv** | `^17.2.1` | Environment Management |

---

## 📂 Directory Structure

```text
.
├── Portfolio/                  # Frontend Application (React + Vite)
│   ├── src/
│   │   ├── components/         # Atomic UI Components
│   │   │   ├── Card/           # Reusable Data Cards
│   │   │   ├── Home/           # Section-based layouts
│   │   │   ├── Modal/          # Overlay Dialogs
│   │   │   └── utils/          # Logic Helpers (TypeWriter, Tilt)
│   │   ├── Context/            # Global State (AppContext)
│   │   ├── pages/              # Main Route Components
│   │   └── assets/             # Static Assets & Icons
│   ├── public/                 # Static Public Files
│   └── vite.config.js          # Vite Configuration
│
└── server/                     # Backend Application (Node.js)
    ├── controller/             # Business Logic (Contact logic)
    ├── middleware/             # Email & Config Middleware
    ├── routes/                 # API Endpoints
    ├── utils/                  # Email Templates
    └── index.js                # Entry Point
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18.x or higher)
- npm or yarn

### Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Sumit444-commits/Portfolio-Using-React.git
    cd Portfolio-Using-React
    ```

2.  **Backend Configuration**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory and add:
    ```env
    PORT=5000
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-app-password
    CLIENT_URL=http://localhost:5173
    ```

3.  **Frontend Configuration**
    ```bash
    cd ../Portfolio
    npm install
    ```

4.  **Running the Project**
    *   Start Backend: `npm run dev` (inside `/server`)
    *   Start Frontend: `npm run dev` (inside `/Portfolio`)

---

## 👤 Author

**Sumit Sharma**
*   **GitHub:** [@Sumit444-commits](https://github.com/Sumit444-commits)
*   **Website:** [sumitsharma.codes](https://www.sumitsharma.codes/)
*   **LinkedIn:** [sumit-sharma-a0b2c7](www.linkedin.com/in/sumit-sharma-a0b2c7)

---

Designed with ❤️ Autome