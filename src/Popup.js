import React from "react";
const Popup = (props) => {
  return (
    <div className="popup">
      <p placeholder="firstname">First name:{props.firstname}</p>
      <p placeholder="lastname">Last name:{props.lastname}</p>
      <p placeholder="Phonenumber">Phone number:{props.number}</p>
      <p placeholder="Role">Role:{props.role}</p>
      <p placeholder="Message">Message:{props.message}</p>
      <button className="close" onClick={props.click}>
        X
      </button>
    </div>
  );
};

export default Popup;
