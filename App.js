import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route } from 'react-router-dom'
import React, { Component } from "react";
import Home from './components/Home/Home.jsx'
import Nav from './components/Nav/Nav.jsx'
import Contact from './components/Contact/Contact.jsx'
import Products from './components/Products/Products.jsx'
import Footer from './components/Footer/Footer.jsx'
import shoes from './shoes.json'

class App extends Component{
  state = {
    products:[],
    filterProducts:[],
  }

  componentDidMount(){
    this.setState({products: shoes.allShoes})
  }

  filterSelect = () => {
    let filterBrand = document.querySelector(".filterByBrand").value;
    let filterPrice = document.querySelector(".filterByPrice").value;
    let filterArray = [...this.state.products]
    if (filterBrand !== "None") {
      filterArray = filterArray.filter(shoe => shoe.brand === filterBrand);
    }
    
    if (filterPrice !== "None") {
      if (filterPrice === "lowToHigh") {
        filterArray = filterArray.sort((priceOne, priceTwo) => priceOne.price-priceTwo.price);
      }
      if (filterPrice === "highToLow") {
        filterArray = filterArray.sort((priceOne, priceTwo) => priceTwo.price-priceOne.price);
      }
    }

    this.setState({
      filterProducts: filterArray
    })
  }
  
  
  render() {
    let products = [];
    if (this.state.filterProducts.length > 0) {
      products = this.state.filterProducts;
    } else {
      products = this.state.products;
    }
    return (
      <BrowserRouter>
      <Nav/>
      <>
      <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" render={() => <Products filterSelect={this.filterSelect} shoes={products}/>}/>
            <Route path="/contact" component={Contact} />
          </Switch>
      </>
       <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
