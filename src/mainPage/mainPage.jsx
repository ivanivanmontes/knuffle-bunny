import React from "react";
import BoxContainer from "./BoxContainer";
import "../styles/mainPage.scss";


const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Res</h1>
      <div className="box-grid">
        <BoxContainer
          imageSrc="../valentinesScreen.png"
          buttonText="valentines"
          navigateTo="/valentines"
        />
        <BoxContainer
          imageSrc="https://i.etsystatic.com/40590577/r/il/1856a7/4594795237/il_570xN.4594795237_lbcr.jpg"
          buttonText="res"
          navigateTo="/"
        />
        <BoxContainer
          imageSrc="https://i.etsystatic.com/40590577/r/il/1856a7/4594795237/il_570xN.4594795237_lbcr.jpg"
          buttonText="res"
          navigateTo="/"
        />
        <BoxContainer
          imageSrc="https://i.etsystatic.com/40590577/r/il/1856a7/4594795237/il_570xN.4594795237_lbcr.jpg"
          buttonText="res"
          navigateTo="/"
        />
        <BoxContainer
          imageSrc="https://i.etsystatic.com/40590577/r/il/1856a7/4594795237/il_570xN.4594795237_lbcr.jpg"
          buttonText="res"
          navigateTo="/"
        />
      </div>
    </div>
  );
};

export default MainPage;
