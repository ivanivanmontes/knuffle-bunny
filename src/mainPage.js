import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/test.module.scss";


const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className={styles.h1}> hello world</h1>
      <button onClick={() => {navigate("/valentines")}}> valentines </button> 
    </div>
  );
};

export default MainPage;
