/* eslint-disable no-undef */
import React from "react";
import styles from "./App.module.css";

import ReactWizard from "react-wizard/dist/index";
import "react-wizard/dist/index.css";

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <ReactWizard
          background="#3399ff"
          color="white"
          shadow
          dots
          submit={() => alert("SUBMITTED")}
          titlePosition="right"
          titles={["Form 1", "Form 2", "Form 3", "Form 4"]}
        >
          <h1>ONE</h1>
          <h1>TWO</h1>
          <h1>THREE</h1>
          <h1>FOUR</h1>
        </ReactWizard>
      </div>
    </div>
  );
};

export default App;
