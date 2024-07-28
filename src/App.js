import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import { Toaster } from "react-hot-toast";

// import HowItWorks from "./components/HowItWorks";
// import Testimonials from "./components/Testimonials";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
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
        {/* <HowItWorks />
        <Testimonials />
        <FAQ /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
