import React from "react";
import AppRoutes from "../AppRoutes";
import Header from "../ui/Header";
import styles from "../assets/scss/Content.module.scss";

class Content extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className={styles.SiteContent}>
          <AppRoutes />
        </main>
      </>
    );
  }
}
export default Content;