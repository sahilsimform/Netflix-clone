import React from "react";
import { MdOutlineContactless } from "react-icons/md";
import { FcSimCardChip } from "react-icons/fc";
import { RiVisaLine } from "react-icons/ri";

const Card = () => {
  return (
    <div className="card">
      <h3 className="bank">Bank</h3>
      <FcSimCardChip className="chip" />
      <MdOutlineContactless className="indicator" />
      <h3 className="number">4242 4242 4242 4242</h3>

      <h5 className="card-holder">
        <span>card holder</span>
        <br />
        Test Test
      </h5>
      <h5 className="valid">
        <span>expiry date</span>
        <br />
        24/25
      </h5>
      <RiVisaLine className="logo" />
    </div>
  );
};

export default Card;
