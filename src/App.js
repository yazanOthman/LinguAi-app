import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Features />
        {/* <HowItWorks />
        <Testimonials />
        <FAQ /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
