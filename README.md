# 🎮 Tic Tac Toe – React Edition

A modern take on the classic 3 × 3 Tic Tac Toe built with **React 19**, sporting a responsive layout and a sleek wine‑themed colour palette. Perfect for learning component composition, hooks, and immutable state management – or just for a quick match against a friend!

<p align="center">
  <a href="https://aramyst.github.io/TicTacToeGame/" target="_blank"><img src="docs/screenshot.png" alt="Screenshot of the React Tic Tac Toe game" width="680"></a>
</p>

> **Live demo →** [https://aramyst.github.io/TicTacToeGame/](https://aramyst.github.io/TicTacToeGame/)

---

## ✨ Features

|                                 |                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------ |
| ✅ **Classic 3 × 3 board**       | Alternate turns placing **X** and **O** until someone wins or the board fills. |
| ⏪ **Time‑travel move history**  | Jump back to any previous state of the game with a single click.               |
| 📱 **Fully responsive UI**      | Plays and looks great on phones, tablets, and desktops.                        |
| 🎨 **Wine‑themed palette**      | Deep reds and purples create a distinctive aesthetic.                          |
| ⚛️ **Hooks & immutable state**  | Built with `useState` and pure functions to calculate winners.                 |
| 🛠 **Create React App tooling** | Instant dev server, hot‑reload, and ready‑to‑deploy build.                     |

---

## 🛠 Tech Stack

| Layer     | Technology                  | Notes                                              |
| --------- | --------------------------- | -------------------------------------------------- |
| Framework | **React 19**                | Functional components & hooks.                     |
| Styling   | **CSS Modules** (plain CSS) | Responsive grid board using CSS custom properties. |
| Tooling   | **Create React App 5**      | Zero‑config build, ESLint integration.             |
| Hosting   | **GitHub Pages**            | Static deployment via the `gh-pages` branch.       |

---

## 🗂 Project Structure

```
├── public/
│   ├── index.html          # CRA template
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js              # Minimal version (no history)
│   ├── Board.js            # 3×3 board component
│   ├── Game.js             # Time‑travel implementation
│   ├── Square.jsx          # Single square component
│   ├── index.css           # Wine palette & responsive grid
│   └── index.js            # Entry – renders <Game />
├── package.json
└── README.md               # You are here
```
