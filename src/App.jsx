import HeroSection from "./assets/components/HeroSection/HeroSection.jsx";
import NavBar from "./assets/components/NavBar/NavBar.jsx";
import ProductsSection from "./assets/components/ProductsSection/ProductsSection.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ProductsSection />
      </main>
    </>
  );
}

export default App;
