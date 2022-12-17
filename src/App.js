import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Testimonial from "./components/Testimonial/Testimonial";
import Virtual from "./components/Virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Slider></Slider>
      <Virtual></Virtual>
      <Products></Products>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;
