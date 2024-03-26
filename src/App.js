import "./App.css";
import Home from "./components/menu";
import PageMid from "./components/PageMid";
import Blogs from "./components/Blogs";
import Work from "./components/Work";
import Tpark from "./components/Tpark";
import Moneys from "./components/Moneys";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='overflow-hidden font-myfont'>
      <Home />
      <PageMid />
      <Blogs />
      <Work />
      <Tpark />
      <Moneys />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
