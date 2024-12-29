import CommunitySection from "./assets/components/CommunitySection/CommunitySection.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";
import HeroSection from "./assets/components/HeroSection/HeroSection.jsx";
import NavBar from "./assets/components/NavBar/NavBar.jsx";
import ProductsSection from "./assets/components/ProductsSection/ProductsSection.jsx";
import Testimonials from "./assets/components/Testimonials/Testimonials.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ProductsSection />
        <Testimonials />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}

export default App;
