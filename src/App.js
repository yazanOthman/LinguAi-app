import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import { Toaster } from "react-hot-toast";
import Pricings from "./components/Pricings";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Header />
      <main>
        <Features />
        <Pricings />
      </main>
    </div>
  );
}

export default App;
