
// import ProductsSection from "./components/ProductsSection";
// import BuildGrowSection from "./components/BuildGrowSection";
// import WhyUsSection from "./components/WhyUsSection";
// import SecuritySection from "./components/SecuritySection";
// import HowItWorksSection from "./components/HowItWorksSection";
// import PricingSection from "./components/PricingSection";
// import FAQSection from "./components/FAQSection";
// import DemoSection from "./components/DemoSection";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";
import BuildGrowSection from "./components/BuildGrowSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <Header />
      <main>
        <div className="pattern-square"></div>
        <HeroSection />
        <ProductsSection />
        <BuildGrowSection />
        {/* <WhyUsSection /> */}
        {/* <SecuritySection /> */}
        {/* <HowItWorksSection /> */}
        {/* <PricingSection /> */}
        {/* <FAQSection /> */}
        {/* <DemoSection /> */}
      </main>
      {/* <Footer />
      <ScrollToTop /> */}
    </div>
  );
}

export default App;
