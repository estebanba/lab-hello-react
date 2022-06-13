import "./App.css";
import navLogo from "./images/ironhack-logo-xs.png";
import menuTop from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <div>
        <div className="hero">
          <nav>
            <div className="left">
              <img src={navLogo} alt="logo"></img>
            </div>
            <div className="right">
              <img className="navMenu" src={menuTop} alt="logo"></img>
            </div>
          </nav>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use...</p>
          <button>Awesome!</button>
        </div>
        <div className="features">
          <div className="card">
            <img src={icon1} alt="feature"></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className="card">
            <img src={icon2} alt="feature"></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className="card">
            <img src={icon3} alt="feature"></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className="card">
            <img src={icon4} alt="feature"></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
