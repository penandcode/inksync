# InkSync📝🚀

A **real-time Markdown editor** built with  **React (Vite), Node.js (Express), and Tailwind CSS** . It provides  **live preview, syntax highlighting, file download, and theme customization** .

---

## **📌 Features**

✅ **Real-time Markdown to HTML conversion**

✅ **File download as `.md`**

✅ **Rate limiting** on backend for security

---

## **🛠️ Tech Stack**

* **Frontend:** React (Vite), Tailwind CSS, Remark-GFM
* **Backend:** Node.js, Express, Remark-GFM, Helmet, CORS
* **Deployment:** Vercel (Frontend) & Render (Backend)

---

## **🚀 Getting Started (Run Locally)**

### **📌 1. Clone the Repository**

```sh
git clone https://github.com/penandcode/inksync.git
cd inksync
```

### **📌 2. Setup Backend**

```sh
npm install
npm start
```

🚀 **Backend runs on:** `http://localhost:8082`

### **📌 3. Setup Frontend**

```sh
cd frontend
npm install
npm run dev
```

🚀 **Frontend runs on:** `http://localhost:5173`

## **📝 API Endpoints**

| Method   | Endpoint     | Description              |
| -------- | ------------ | ------------------------ |
| `POST` | `/convert` | Convert Markdown to HTML |

Example Request:

```json
{
  "content": "# Hello Markdown!"
}
```

Example Response:

```json
{
  "html": "<h1>Hello Markdown!</h1>"
}
```

---

## **🎯 Deployment**

### **Frontend**

* **Deployed on Vercel**
* Build & Deploy:
  ```sh
  npm run build
  ```

### **Backend**

* **Deployed on Render**
* Start server:
  ```sh
  node server.js
  ```
