import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApodDetails from "./pages/ApodDetails";
import Overview from "./pages/Overview";
import Contact from "./pages/Contact";
import floatingSymbols from "./data/floatingSymbols";
import "./App.css";

function App() {
  return (
    <div className="site-shell">
      <div className="floating-symbols" aria-hidden="true">
        {floatingSymbols.map((item) => (
          <span
            key={`${item.symbol}-${item.top}-${item.left}`}
            className="floating-symbol"
            style={{
              top: item.top,
              left: item.left,
              fontSize: `${item.size}px`,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            {item.symbol}
          </span>
        ))}
      </div>
      <Navbar />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/apod" element={<ApodDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
