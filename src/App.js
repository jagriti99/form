import { Component } from "react";
import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import "./Form.css";
import "./View.css";
import "./Popup.css";

class App extends Component {
  state = {
    firstname: " ",
    lastname: "",
    number: "",
    role: "",
    message: "",
    show: false,
  };

  showModal = (e) => {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="form">
        <Form onChange={this.changeHandler} onClick={this.showModal} />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          number={this.state.number}
          role={this.state.role}
          message={this.state.message}
        />
        {this.state.show ? (
          <Popup
            click={this.showModal}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            number={this.state.number}
            role={this.state.role}
            message={this.state.message}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
