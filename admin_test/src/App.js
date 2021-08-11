import "./App.css";
import Header from "./MyComponents/Header";
import Products from "./MyComponents/Products";

import Footer from "./MyComponents/Footer";

function App() {
  let products = [
    {
      sn: 1,
      name: "Shirts",
      price: 350,
      material: "cotton",
      brand: "Peter England",
    },
    {
      sn: 2,
      name: "Shoes",
      price: 2400,
      material: "Mesh",
      brand: "Adidas",
    },
    {
      sn: 3,
      name: "Jeans Pants",
      price: 600,
      material: "Denim",
      brand: "Cotton County",
    },
  ];

  return (
    <>
      <Header title="Product List" pricing={true} />


      <Products products={products} />

      <Footer />
    </>
  );
}

export default App;
