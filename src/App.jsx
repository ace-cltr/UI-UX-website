import Navbar from "./navbar/Navbar";
import "./style.css";
import SearchBar from "./navbar/SearchBar";
import Category from "./navbar/Category";
import Body from "./Body";
import Header from "./components/Header";
import SecondaryTab from "./components/SecondaryTab";
import Tags from "./components/Tags";
import RoutePath from "./components/RoutePath";
import ProductCard from "./components/ProductCard";
import Footer from "./footer/Footer";
import SignUp from "./footer/SignUp";

export default function App() {
  return (
    <>
      <Navbar>
        <SearchBar />
        <Category text={"Categories"} />
        <Category text={"Website builder"} />
        <Category text={"Today's deals"} />
      </Navbar>
      <Body>
        <Header />
        <SecondaryTab />
        <Tags />
        <RoutePath />
        <ProductCard />
      </Body>
      <SignUp />
      <Footer />
    </>
  );
}
