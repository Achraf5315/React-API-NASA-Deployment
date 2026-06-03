import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApodDetails from "./pages/ApodDetails";
import Overview from "./pages/Overview";
import Contact from "./pages/Contact";
import "./App.css";

const floatingSymbols = [
  {
    symbol: "∑",
    top: "10%",
    left: "12%",
    size: 54,
    delay: "0s",
    duration: "18s",
  },
  {
    symbol: "π",
    top: "18%",
    left: "74%",
    size: 40,
    delay: "-4s",
    duration: "16s",
  },
  {
    symbol: "Δ",
    top: "42%",
    left: "8%",
    size: 34,
    delay: "-9s",
    duration: "20s",
  },
  {
    symbol: "Ω",
    top: "30%",
    left: "88%",
    size: 48,
    delay: "-3s",
    duration: "19s",
  },
  {
    symbol: "λ",
    top: "67%",
    left: "17%",
    size: 34,
    delay: "-6s",
    duration: "15s",
  },
  {
    symbol: "φ",
    top: "78%",
    left: "76%",
    size: 42,
    delay: "-7s",
    duration: "17s",
  },
  {
    symbol: "∞",
    top: "58%",
    left: "48%",
    size: 50,
    delay: "-2s",
    duration: "21s",
  },
  {
    symbol: "°",
    top: "84%",
    left: "36%",
    size: 30,
    delay: "-5s",
    duration: "14s",
  },
];

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
