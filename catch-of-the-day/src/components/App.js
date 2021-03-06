import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Evy is Awesome" />
          <Header tagline="Shubha is Cool" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
