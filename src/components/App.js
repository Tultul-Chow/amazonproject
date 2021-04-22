import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import CleaningContext from "../context/CleaningContext";
import ClothingContext from "../context/ClothingContext";
import HomeContext from "../context/HomeContext";
import PetContext from "../context/PetContext";
import BestSellerContext from "../context/BestSellerContext";
import CleaningCategory from "../pages/Individual";
import '../css/app.css'
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import AboutUs from "../pages/AboutUs"
import Cleaning from "../pages/Cleaning"
import Clothing from "../pages/Clothing"
import HomeDecor from "../pages/HomeDecor"
import PetNeeds from "../pages/PetNeeds"
import BestSeller from '../pages/BestSeller';
import Cart from '../pages/Cart'
import ProductList from './ProductList';

const App = () => {

  const [cleanings, setCleanings] = useState([]);
  const [clothings, setClothings] = useState([]);
  const [products, setProducts] = useState([]);
  const [homes, setHomes] = useState([]);
  const [pets, setPets] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);


  useEffect(() => {

    fetch("https://amazonapp-fakedb.herokuapp.com/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        });

    fetch("https://amazonapp-fakedb.herokuapp.com/products?category=1")
      .then(res => res.json())
      .then((data) => {

        setCleanings((previousState) => {
          previousState = data;
          return previousState
        });
    })
      .catch(err => console.log(`Error ${err}`));
    fetch("https://amazonapp-fakedb.herokuapp.com/products?category=2")
      .then(res => res.json())
      .then((data) => {
        setClothings((previousState) => {
          previousState = data;
          return previousState
        });
    })
      .catch(err => console.log(`Error ${err}`));
    fetch("https://amazonapp-fakedb.herokuapp.com/products?category=3")
      .then(res => res.json())
      .then((data) => {
        setHomes((previousState) => {
          previousState = data;
          return previousState
        });
    })
      .catch(err => console.log(`Error ${err}`));

    fetch("https://amazonapp-fakedb.herokuapp.com/products?category=4")
      .then(res => res.json())
      .then((data) => {
        setPets((previousState) => {
          previousState = data;
          return previousState
        });
    })
      .catch(err => console.log(`Error ${err}`));
    fetch("https://amazonapp-fakedb.herokuapp.com/products?bestSeller=true")
      .then(res => res.json())
      .then((data) => {
        setBestSellers((previousState) => {
          previousState = data;
          return previousState
        });
      })
      .catch(err => console.log(`Error ${err}`));
}, [])

  console.log("App")

  return (
    <div className="bg-light">
      <CleaningContext.Provider value={{ cleanings }}>
        <ClothingContext.Provider value={{ clothings }}>
          <HomeContext.Provider value={{ homes }}>
            <PetContext.Provider value={{ pets }}>
              <BestSellerContext.Provider value={{ bestSellers }}>
                <Router>
                  <Switch>
                    <Route exact path="/"><Home products={products} /></Route>
                    <Route path="/products/:id"><CleaningCategory /></Route>
                    <Route path="/productlist"><ProductList products={products} /></Route>
                    <Route path="/SignUp"><SignUp /></Route>
                    <Route path="/Login"> <Login /></Route>
                    <Route path="/AboutUs">   <AboutUs /> </Route>
                    <Route path="/Cleaning"> <Cleaning /></Route>
                    <Route path="/Clothing">  <Clothing /> </Route>
                    <Route path="/HomeDecor"><HomeDecor /> </Route>
                    <Route path="/PetNeeds"><PetNeeds /> </Route>
                    <Route path="/BestSellers"><BestSeller /> </Route>
                    <Route path="/Cart"><Cart /> </Route>
                  </Switch>
                </Router>
              </BestSellerContext.Provider>
            </PetContext.Provider>
          </HomeContext.Provider>
        </ClothingContext.Provider>
      </CleaningContext.Provider>
    </div>
  )
}

export default App