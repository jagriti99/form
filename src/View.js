import React from "react";

const View = (props) => {
  return (
    <div className="container">
      <div className="vertical-line"></div>
      <h1>This is your input</h1>

      <div className="line1"></div>
      <p className="content" placeholder="firstname">
        First name:{props.firstname}
      </p>
      <div className="line1"></div>
      <p className="content" placeholder="lastname">
        Last name:{props.lastname}
      </p>
      <div className="line1"></div>
      <p className="content" placeholder="Phonenumber">
        Phone number:{props.number}
      </p>
      <div className="line1"></div>
      <p className="content" placeholder="Role">
        Role:{props.role}
      </p>
      <div className="line1"></div>
      <p className="content" placeholder="Message">
        Message:{props.message}
      </p>
    </div>
  );
};
export default View;
