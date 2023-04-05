import React from "react";
import "./_header.sass";
import Logo from "../../assets/icnons/Logo";
import DeliveryInput from "./DeliveryInput/DeliveryInput";
import Menu from "../../assets/icnons/Menu";
import BuyCart from "../../assets/icnons/BuyCart";
import ContactsPhone from "./ContactsPhone/ContactsPhone";

const Header = () => {
  return (
    <header className="header">
      <div className="row">
        <div className="container">
          <div className="header-wrap">
            <Menu className="menuBtn" />
            <Logo className="header-logo" color={"#fff"} />
            <DeliveryInput />
            <ContactsPhone />
            <div className="buyCartBtn">
              <BuyCart className="buyCartBtn-icon" />
              <span className="buyCartBtn-name">корзина</span>
              <span className="buyCartBtn-value">4</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
