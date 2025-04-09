import React from "react";
import {NavLink } from "react-router-dom";
import styles from "../assets/scss/Header.module.scss";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.SiteHeader}>
        <nav>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)} >Home</NavLink></li>
            <li><NavLink to="/user" className={({ isActive }) => (isActive ? styles.active : undefined)} >Users</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;