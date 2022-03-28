import "./App.css";
import "./styles/_global.scss";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/warehouse/details/:id" component={WarehouseDetails} />
            <Route path="/inventory" exact component={Inventory} />
            <Route path="/warehouse/new" exact component={NewWarehouse} />
            <Route path="/warehouse/edit/:id" component={EditWarehouse} />
            <Route path="/inventory/new" component={NewInventoryItem} />
            <Route path="/inventory/edit/:id" component={EditInventoryItem} />
            <Route
              path="/inventory/details/:id"
              exact
              component={InventoryItemDetails}
            /> */}
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
