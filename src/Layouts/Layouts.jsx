import React from "react";

import styles from "./Layouts.module.css";

function Layouts({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h2>Crypto App</h2>
        <p>React.js Courses</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Ali 🤞</p>
      </footer>
    </>
  );
}

export default Layouts;
