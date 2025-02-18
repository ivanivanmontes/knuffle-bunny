import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./styles/BoxContainer.module.scss";

const BoxContainer = ({ imageSrc, buttonText, navigateTo }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(navigateTo);
  };

  return (
    <div className={styles.boxContainer}>
      <div className={styles.boxImage} onClick={handleButtonClick}>
        <img src={imageSrc} alt="Box content" />
      </div>
      <button className={styles.boxButton} onClick={handleButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default BoxContainer;