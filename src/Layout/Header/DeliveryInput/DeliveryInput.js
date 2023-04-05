import React from "react";
import Location from "../../../assets/icnons/Location";
import Search from "../../../assets/icnons/Search";
import "./_input.sass";
const DeliveryInput = () => {
  return (
    <div className="delivery-wrap">
      <Location className="input-location" />
      <input
        className="delivery-input"
        type="text"
        placeholder="Введите адрес доставки"
      />
      <Search className="input-search" />
    </div>
  );
};

export default DeliveryInput;
