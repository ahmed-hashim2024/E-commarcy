
<h1 align="center">
    🛍️ E-Commerce Store
</h1>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&pause=1000&color=28a745&center=true&vCenter=true&width=750&lines=A+Full-Featured+E-Commerce+Front-end;Built+with+React%2C+Redux%2C+and+React-Bootstrap;Complete+Shopping+Experience+and+User+Authentication;" alt="Typing SVG" />
</div>

---

## 🎯 Project Overview

This project is a modern, responsive, and feature-rich front-end application simulating a complete e-commerce experience. It is designed to demonstrate proficiency in React functional components, advanced state management using **Redux Toolkit**, dynamic routing, and professional UI development with **React-Bootstrap**.

The platform fetches all product data dynamically from the **DummyJSON API**.

### ✨ Key Features Implemented

* **Global State Management (Redux):** Centralized state for the shopping cart, managing the addition, quantity increment/decrement, and removal of items. The application is wrapped with the Redux `Provider`.
* **Complete Shopping Cart Flow:** Users can manage quantities directly in the cart, view the subtotal, and proceed to a mock checkout.
* **Dynamic Routing:** Seamless navigation between Home, Products, Categories (`/category/:categoryName`), individual Product details (`/product/:id`), Search results, Cart, and Auth pages.
* **Search Functionality:** Implemented advanced search logic that reads the `q` parameter from the URL to fetch specific results using the DummyJSON search endpoint.
* **Authentication UI:** Dedicated, responsive Sign In and Sign Up pages. Utilizes the powerful **`react-hook-form`** library for efficient form validation.
* **Advanced Product Details (`MoreData.jsx`):** Features dynamic fetching of product details, quantity control, price calculations (discounted price vs. original price), stock alerts, rating display (stars), and a carousel for related products.
* **Responsive Carousels:** Uses **Swiper** for the category slider on the home page and **React Slick** for related products in the product detail view.
* **Professional UI/UX:** Built on **React-Bootstrap** components, featuring a sticky `Navbar` with an `Offcanvas` mobile menu, displaying the real-time cart count (Redux selector).

---

## 🔗 Live Demo

Access the hosted version of the project:

<div align="center">
  <a href="https://ahmed-hashim2024.github.io/E-commarcy/">
    <img src="https://img.shields.io/badge/VIEW%20LIVE%20PROJECT-28a745?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo Link" />
  </a>
</div>

---

## 🛠️ Technologies & Dependencies

| Category | Technology | Key Usage in Project | Badge |
| :--- | :--- | :--- | :--- |
| **Core Frontend** | **React** (Vite) | Main application structure and component lifecycle. | <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> |
| **State Management** | **Redux Toolkit** | Centralized management of the global shopping cart state. | <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /> |
| **UI Framework** | **React-Bootstrap** | Responsive components, layout (`Container`, `Row`, `Col`), and navigation utilities. | <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" /> |
| **Routing** | `react-router-dom` | Defining routes and navigation between views. | <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" /> |
| **Form Handling** | `react-hook-form` | Efficient and performant validation for the Sign In/Sign Up forms. | <img src="https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" /> |
| **UI Utilities** | Swiper / React Slick | Used for responsive product and category carousels. | <img src="https://img.shields.io/badge/Carousel-Swiper-007AFF?style=for-the-badge&logo=swiper&logoColor=white" /> |
| **APIs/Data** | DummyJSON | Provides mock data for all products, categories, and search results. | <img src="https://img.shields.io/badge/API-Data%20Fetching-4EAA25?style=for-the-badge" /> |
| **Notifications** | `react-hot-toast` | Displays sleek, non-blocking notifications for cart actions. | <img src="https://img.shields.io/badge/Toast-Notifications-FF9900?style=for-the-badge&logo=react&logoColor=white" /> |

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v14+)
* npm or yarn

### Installation and Run

1.  **Clone the Repository:**
    ```bash
    git clone [Your Repository URL]
    cd [your-project-name]
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the Development Server (using Vite):**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically be available at `http://localhost:5173/`.

---

## 📂 Key Code Structure

The project maintains a clear and modular structure for easy maintenance and scalability:

| File/Component | Purpose & Feature Highlight |
| :--- | :--- |
| `App.jsx` | Defines the main application layout (Navbar, Routes, Footer) and integrates `react-router-dom`. |
| `main.jsx` | Entry point, setting up React `StrictMode` and wrapping the app with **Redux `Provider`**. |
| `Navbar.jsx` | Responsive navigation with **Redux selector for real-time cart count** and an effective search handler. |
| `Home.jsx` | Landing page structure, dynamic category fetching, and **Swiper** integration. |
| `MoreData.jsx` | Product Detail Page. Handles unique product fetching, related product slider, quantity management, and Redux dispatching. |
| `ShoppingCart.jsx` | Cart view, displaying items, calculated total, and using Redux actions (`incrementQuantity`, `decrementQuantity`, `removeFromCart`). |
| `SignIn.jsx` / `SignUp.jsx` | Separate, fully responsive authentication pages using **`react-hook-form`** for client-side validation. |
| `SearchPage.jsx` / `CategoryPage.jsx` | Dedicated pages for displaying data filtered by URL parameters (search query `q` or category name). |
| `footer.jsx` | Standard footer structure using `Container`, `Row`, and `Col` from **React-Bootstrap**. |

---

## 👨‍💻 Developed By

<h1 align="center">
    I'm <strong>Ahmed Hashim</strong>
</h1>

<div align="center">
    <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=490&pause=1000&color=2596be&center=true&vCenter=true&width=490&lines=Fullstack+Developer+%7C+React+%26+Django;Building+Scalable+%26+Clean+Web+Solutions;" alt="Typing SVG" />
</div>

---

## 🤝 Connect with Me

<div align="center">
  <a href="https://www.linkedin.com/in/eng-ahmedhashim2024/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:eng.ahmedhashim2024@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="https://github.com/ahmed-hashim2024">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="tel:+201156501103">
    <img src="https://img.shields.io/badge/Phone-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Phone" />
  </a>
</div>
