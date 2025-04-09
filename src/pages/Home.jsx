import React from "react";
import Image from "../ui/Image";
import { Link } from "react-router-dom";
import styles from "../assets/scss/Home.module.scss";
import UserForm from "../ui/UserForm";

export default function Home() {
  const REST_API = import.meta.env.VITE_PHP_BACKEND_API;
  return (
    <>
      <section>
        <Image src="/image/banner.jpg" alt="Placeholder Image" tabletSrc="/image/banner-tablet.jpg" mobileSrc="/image/banner-mobile.jpg"/>
      </section>
      <section className={styles.Container}>
        <main className={styles.Main}>
          <h1>Welcome to Our Website</h1>
          <p>
            This is a comprehensive CRUD (Create, Read, Update, Delete) application built with React, designed to demonstrate the core functionalities of managing user data seamlessly. It provides an intuitive interface for interacting with the backend API, allowing you to explore, create, update, and delete user records efficiently.
          </p>
          <Link to="/user" className="button">View Users</Link>
        </main>
        <aside className={styles.Sidebar }>
          <h2>Create User</h2>
          <UserForm api={import.meta.env.VITE_PHP_BACKEND_API}/>
        </aside>
      </section>
    </>
  );
}