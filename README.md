# Task Manager App

A simple, user-friendly **React Task Manager** where users can **add tasks, mark them as done, and reset tasks** with a smooth animation. This project is optimized for **machine coding rounds** and follows best coding practices.

## 🚀 Features

- ✅ **Add Tasks**: Enter a task and press **Enter** or click **Add**.
- ✅ **Toggle Completion**: Click on a task to mark it **done/undone**.
- ✅ **Auto Reset with Delay**: When all tasks are done, they reset **one by one with a 1-second delay**.
- ✅ **Keyboard Accessibility**:
  - Press **Enter** to add a task.
  - Press **Enter/Space** to toggle task completion.
- ✅ **Accessible & Responsive**: Includes **ARIA labels** for screen readers and works on all screen sizes.

## 📂 File Structure
```
📦 task-manager-app
├── 📂 src
│   ├── 📂 components
│   │   ├── TaskInput.js  (Handles task input UI & logic)
│   │   ├── TaskList.js   (Displays & manages tasks)
│   │   ├── TaskItem.js   (Single task component)
│   ├── 📂 styles
│   │   ├── TaskInput.css  
│   │   ├── TaskList.css 
│   │   ├── TaskItem.css
│   ├── App.js           (Main component)
│   ├── index.js         (Entry point)
│   ├── styles.css       (Global styling)
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Om-Shree-0709/Teachers-Task-List.git
   cd Teachers-Task-List
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the app:**
   ```sh
   npm start
   ```

## 📝 How It Works

### **1️⃣ Adding a Task**
- Users enter a task in the input field and press **Enter** or click the **Add button**.
- The task is **stored in the state** with a unique `id`.

### **2️⃣ Marking a Task as Done**
- Clicking on a task **toggles** its `done` state.
- The UI updates dynamically to reflect the change.

### **3️⃣ Auto Resetting Tasks (Smart Delay)**
- When **all tasks are marked as done**, a **delayed reset** starts.
- **One task is reset per second** to enhance UX.

## 🌟 Why This is Great?
- ✅ **Follows best coding practices** (modular components, unique IDs, immutability).
- ✅ **Efficient state updates** (controlled state changes, `useEffect` for auto-reset).
- ✅ **Good UX & accessibility** (smooth task reset, ARIA labels, keyboard support).
- ✅ **Scalable & Maintainable** (separate components for input, task list, and items).

## 📜 License
This project is **open-source** and free to use under the MIT License.

---

🔥 **Made with React & ❤️**
