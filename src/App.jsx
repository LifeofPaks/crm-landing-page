
import BuildGrowSection from "./components/BuildGrowSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ProductsSection from "./components/ProductsSection";
import SecuritySection from "./components/SecuritySection";
import WhyUsSection from "./components/WhyUsSection";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <Header />
      <main>
        <div className="pattern-square"></div>
        <HeroSection />
        <ProductsSection />
        <BuildGrowSection />
        <WhyUsSection />
        <SecuritySection />
        <HowItWorksSection/>
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
