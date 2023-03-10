import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

//Store
import store from "./store/Store";

//Components
//import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import NavbarBootStepComponent from "./components/NavbarBootStepComponent/NavbarBootStepComponent"
import FooterComponent from "./components/FooterComponent/FooterComponent";

//Pages
import AboutPage from "./pages/AboutPage/AbouPaget";
import HomePage from "./pages/HomePage/HomePage";
import PageNotFoundPage from "./pages/PageNotFoundPage/PageNotFoundPage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import ContactPage from "./pages/ContactPage/ContactPage";


function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          {/* <NavbarComponent /> */}
          <NavbarBootStepComponent/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path="*" element={<PageNotFoundPage />} />
          </Routes>
          <FooterComponent />
        </Router>
      </Provider>
    </div>
  );
}

export default App;

/*
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
*/
