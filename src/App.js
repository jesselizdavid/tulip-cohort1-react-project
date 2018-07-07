import React, { Component } from "react";
import Search from "./Search.js";
import { fetchLcboEndpoint } from "./api/lcbo.js";
import MyMapComponent from './Map.js';


class App extends Component {
  componentDidMount() {
    // example of making an API request to the LCBO API
    fetchLcboEndpoint("inventories", {
      product_id: "18"
    }).then(data => {
      console.log('app fetch');
    });
  }
  render() {
    return (
      <div>
        <Search />
        <MyMapComponent lat={43.6532} lng={-79.3832} />
      </div>
    );
  }
}

export default App;
