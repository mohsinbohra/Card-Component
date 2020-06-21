import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './Components/MenuComponent';
import { DISHES } from './shared/dishes';
import Menu2 from './Components/MenuComponent2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){
  return (
    <div className="">
    <Navbar dark color="primary">
    <div className="container">
      <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
     
    </div>
  </Navbar>
  
  <Menu2 dishes={this.state.dishes} />
    </div>
  );
}
}
export default App;
