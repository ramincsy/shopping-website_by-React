import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          molestias velit praesentium, molestiae aperiam veniam sed accusamus
          vero suscipit et libero dignissimos voluptatibus nesciunt sunt natus
          fugiat fuga eveniet tempora!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
          mollitia sit est rem dolore! Commodi voluptates distinctio labore.
          Veniam eligendi vel, quas dignissimos repellat ipsum voluptates
          suscipit dolor quo laborum?
        </p>
      </div>
    </div>
  );
};
export default DescriptionBox;
