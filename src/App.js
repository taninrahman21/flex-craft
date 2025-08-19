import "./App.css";
import Footer from "./Components/Footer/Footer";
import CardGrid from "./Components/Layouts/CardGrid/CardGrid";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Layout Options */}
        <section className="layout-options">
          <div className="container">
            <h2 class="section-title">Flex Layouts</h2>
            <div class="options-btns">
              <button class="option-btn active" data-category="hot">
                Card Grid
              </button>
              <button class="option-btn" data-category="cold">
                Cold Brew
              </button>
              <button class="option-btn" data-category="specialty">
                Specialty
              </button>
            </div>
          </div>
        </section>

        {/* Layout */}
        <CardGrid />
      </main>

      <Footer />
    </>
  );
}

export default App;
