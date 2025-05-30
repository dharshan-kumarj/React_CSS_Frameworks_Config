
#  React + Bootstrap + Vite + TypeScript Template

This branch contains a **React** starter template using **Bootstrap 5**, built with **Vite** and **TypeScript**. It's structured for quick frontend development with classic Bootstrap components.

---

## 📁 Folder Structure


```
.  
├── public/  
├── src/  
├── .gitignore  
├── README.md  
├── eslint.config.js  
├── index.html  
├── package-lock.json  
├── package.json  
├── postcss.config.cjs  
├── tailwind.config.js (unused in this branch)  
├── tsconfig.json  
├── tsconfig.app.json  
├── tsconfig.node.json  
└── vite.config.ts

```

> Note: `tailwind.config.js` exists but is not used in this branch. You can safely ignore or delete it.

---

## 🧰 Tech Stack

- ⚛️ React
- ⚡ Vite
- 🟦 TypeScript
- 🎯 Bootstrap 5


---

## 🚀 Getting Started

### 1. Clone the Repository & Checkout the Bootstrap Branch

```bash
git clone https://github.com/dharshan-kumarj/React_CSS_Frameworks_Config/tree/Bootstrap
cd React_CSS_Frameworks_Config
git checkout Bootstrap

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Start the Development Server

```bash
npm run dev

```

----------

## 🎨 Bootstrap Setup

Bootstrap is installed via **npm** and imported into your project globally via `main.tsx` or `index.tsx`.

###  Install Bootstrap (if not already)

```bash
npm install bootstrap

```

###  Import in `main.tsx` or `index.tsx`

```tsx
import 'bootstrap/dist/css/bootstrap.min.css';

```

You can also optionally import JavaScript for components like modals and tooltips:

```tsx
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

```

----------

## 🧪 Testing Bootstrap

To verify Bootstrap is working:

1.  Open `src/App.tsx`
    
2.  Add a button:
    

```tsx
<button className="btn btn-primary">Click Me</button>

```

3.  Run the app and confirm the Bootstrap styles are applied.
    

----------

## 🏗️ Build for Production

```bash
npm run build

```

Then preview the build using:

```bash
npm run preview

```
