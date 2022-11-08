import React from "react";

const Form = (props) => {
  return (
    <form onChange={props.onChange}>
      <label>First name</label>
      <input type="text" name="firstname"></input>
      <label>Last name</label>
      <input type="text" name="lastname"></input>
      <label>Phone number</label>
      <input type="number" name="number"></input>
      <label>Role</label>
      <select type="text" name="role">
        Choose role...
        <option value="choose">Choose one...</option>
        <option value="Teacher">Teacher</option>
        <option value="Student">Student</option>
        <option value="Other">Other</option>
      </select>
      <label>Message</label>
      <input type="textarea" name="message"></input>
      <button type="submit" onClick={props.onClick}>
        Send
      </button>
    </form>
  );
};

export default Form;
