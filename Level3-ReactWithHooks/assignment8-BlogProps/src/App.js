
import './App.css';
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import BlogList from "./components/BlogList"
import data from "./data"
import Footer from "./components/Footer"
import Arrow from "./images/arrow-right-solid.svg"

function App() {
  
  const posts = data.map(item => {
    return (
      <BlogList
        key={item.id}
        item={item}
        />
      )
    })
  return (
    <div className="App">
      <div className="main">
        <div className="layerColor">
            <Navbar/>
            <Header/>
        </div> 
      </div>
      <div className="mainContent">
        {posts}
          <button>OLDER POSTS 
            <img className="arrow" src={Arrow}/></button>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
