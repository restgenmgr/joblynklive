import React from 'react';
import ReactDOM from 'react-dom/client';

console.log("MAIN LOADED ✅");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("ROOT NOT FOUND ❌");
} else {
  console.log("ROOT FOUND ✅");
}

const root = ReactDOM.createRoot(rootElement!);

root.render(
  <h1 style={{ color: "red" }}>FORCE RENDER 🔥</h1>
);
