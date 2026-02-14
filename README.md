# ⭐ Student Favourite List App (React + Context API)

A simple **Student Management & Favourite List** web app built using **React.js**, **Context API**, and **Tailwind CSS**.

This project allows users to:

* ➕ Add new students
* 🗑️ Delete students
* ❤️ Mark students as favourites
* 🚫 Prevent duplicate entries
* ⚡ See instant UI updates

---

## 🚀 Features

### ✅ Student Management

* Add student with:

  * Name
  * Roll Number
  * Department
* Automatically generates a **unique ID** for each student
* Prevents duplicate roll numbers

---

### ❤️ Favourite Students

* Add students to favourite list
* Prevents adding the same student twice
* Separate favourite list storage

---

### 🗑️ Delete Functionality

* Remove any student instantly
* Uses unique ID for accurate deletion

---

### ⚡ Smart UI Updates

* Uses React Context API for global state
* Uses unique keys to prevent rendering bugs
* Real-time UI updates

---

## 🛠️ Tech Stack

* **React.js**
* **Context API**
* **Tailwind CSS**
* **JavaScript (ES6+)**

---

## 📂 Project Structure

```
src/
│── components/
│   ├── AddStudent.jsx
│   ├── Student.jsx
│   ├── Favourite.jsx
│
│── App.jsx
│── main.jsx
│── index.css
```

---

## 🧠 Key Concepts Used

* useState Hook
* useContext Hook
* List Rendering with Keys
* Array Methods:

  * map()
  * filter()
  * some()
* Controlled Inputs
* State Immutability

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/student-fav-app.git
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run Project

```bash
npm run dev
```

---

## 🎯 How It Works

### Adding Student

* User enters details
* App checks duplicates
* Generates unique ID
* Updates global state

---

### Favourite Feature

* Checks if already favourited
* Adds to favourite list safely

---

### React Rendering Fix

Each student has:

```js
{
  id: Date.now(),
  Name,
  Roll_no,
  Dept
}
```

This ensures **proper React list rendering**.

---

## 📸 UI Highlights

* Gradient background design
* Responsive card layout
* Clean Tailwind styling

---

## 🔥 Future Improvements

* LocalStorage persistence
* Edit student feature
* Search & filter students
* Dark mode support
* Backend integration

---

## 👨‍💻 Author

**Shabarish R**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!

---

## 📜 License

This project is open source and free to use.
