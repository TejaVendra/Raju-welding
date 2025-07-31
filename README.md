# 🔧 Raju Welding Shop – Frontend (React)

This is the **frontend** of the **Raju Welding Shop** project — a modern, responsive, and multilingual website for a local welding business. The goal is to allow users to browse categorized welding designs (Gates, Windows, Stairs, Balcony, Furniture), view them in full screen, and place orders through an online form.

This frontend is built using **React** and consumes data from a Django backend via REST APIs. Cloudinary is used to host all media, and Framer Motion brings the UI to life with scroll-triggered animations.

---

## 🌐 Live Website

👉 [https://raju-weldings.onrender.com](https://raju-weldings.onrender.com)

---

## 📸 Features Overview

| Feature                   | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| ✅ Category Gallery       | Shows welding designs by category like gates, windows, stairs, etc.        |
| ✅ Full-Screen Preview    | Users can click any design to see a larger version                         |
| ✅ Online Order Form      | Simple form (name, village, phone) to order a selected design              |
| ✅ Multilingual Support   | Supports multiple languages using `react-i18next`                          |
| ✅ Scroll Animations      | Smooth UI animations with Framer Motion on scroll                          |
| ✅ Cloudinary Integration | All images and videos are loaded from Cloudinary URLs                      |
| ✅ Responsive Design      | Mobile-friendly layout with media queries                                  |
| ✅ Lazy Loading           | Optimized loading using `loading="lazy"` for images                        |

---

## 🛠 Tech Stack

### Frontend

- **React (Vite)**
- **React Router DOM**
- **Axios** – for API calls
- **Framer Motion** – for animations
- **React i18next** – for translations
- **Cloudinary** – image and video hosting
- **Custom CSS** – component-based modular styling

### Backend (consumed via API)

- **Django**
- **Django REST Framework**
- **Hosted on Render**
- **CORS headers configured**

---

## 📁 Project Folder Structure (Frontend)

```
frontend/
├── public/                    # Public files
│   └── index.html
├── src/
│   ├── components/            # Reusable UI components
│   ├── pages/                 # Route-based components
│   ├── styles/                # Custom CSS
│   ├── locales/               # i18n translation files
│   ├── App.jsx                # App entry
│   ├── main.jsx               # ReactDOM render file
│   └── i18n.js                # i18next config
├── .env                       # Environment variables
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/TejaVendra/Raju-welding.git
cd Raju-welding/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `frontend/` folder:

```env
VITE_API_URL=https://backend-welding-1.onrender.com
```

> Replace the URL if your backend is hosted somewhere else.

### 4. Start the Development Server

```bash
npm run dev
```

Open your browser and visit: [http://localhost:5173](http://localhost:5173)

---

## 🔨 Build for Production

To generate the optimized production build:

```bash
npm run build
```

The static files will be generated in the `dist/` folder.

---

## 🌍 Translations

This project uses `react-i18next` for multilingual support.

Translation files are stored at:

```
src/locales/en/translation.json
src/locales/te/translation.json
```

You can add more languages by creating additional folders (e.g., `hi`, `ta`) and updating the `i18n.js` config.

---

## 💡 Scroll Animations with Framer Motion

Each design card fades in and slides upward when it enters the viewport:

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.5, delay: index * 0.05 }}
>
```

This enhances the user experience with smooth and dynamic motion.

---

## 🔗 API Endpoints (Consumed from Backend)

| Endpoint                      | Description                         |
|------------------------------|-------------------------------------|
| `GET /api/images/<category>/` | Fetch images for a specific category |
| `POST /api/submit-order/`     | Submit a design order with details  |

These endpoints are provided by the Django backend hosted on Render.

---

## 🧪 Order Flow

1. User selects a category (e.g., Gates)  
2. Scrolls through the designs  
3. Clicks “Order Now” below a design  
4. Enters name, village, and phone number  
5. Submits the form  
6. Backend confirms and shows success message  

---

## 🐞 Known Issues / Future Enhancements

- Add validation for phone number format  
- Improve UI feedback for API errors and offline use  
- Add admin panel for design uploads (via backend)  
- Replace loading spinners with skeleton loaders  

---

## 🙋‍♂️ Author

**Teja Vendra**  
🎓 B.Tech CSE (AI & ML), VIT-AP  
💼 Web Developer  
🌐 [https://raju-weldings.onrender.com](https://raju-weldings.onrender.com)  
📧 tejavendra2006@example.com  

---

## 📜 License

Licensed under the **MIT License**.

---

## 🙏 Acknowledgments

- **Cloudinary** – for hosting media files  
- **Render** – for backend/frontend deployment  
- **Framer Motion** – for animation handling  
  
