# ⚡ React Concurrent Search

A small but focused playground to explore **React concurrent rendering features**, specifically  
`useTransition` and `Suspense`, through a real-world search UI.

This project demonstrates how to keep **user input responsive** while deferring **expensive UI updates**.

---

## 🧪 What This Project Explores

- Urgent vs non-urgent state updates
- Non-blocking rendering with `useTransition`
- Data fetching with `Suspense`
- Independent loading boundaries
- Controlled latency and error simulation
- Clean, feature-based React architecture

> The goal is learning React concurrency — not building a production search engine.

---

## ✨ Features

- ⚡ **Instant input** with deferred results rendering
- 🔄 Toggle between **Immediate** and **Transition** update modes
- ⏳ Configurable artificial network delay
- 🧱 `Suspense`-based loading skeletons
- ❌ Error handling via Error Boundaries
- 🧼 Feature-based folder structure
- 📦 Fake API backed by local JSON data

---

## 🧠 Why This Exists

React concurrency APIs are hard to understand in isolation.

This project intentionally:

- Uses a **fake API** to fully control latency
- Avoids external dependencies that add noise
- Makes performance differences _visible and measurable_

You should be able to **feel** the difference between blocking and non-blocking updates.
