import "./App.css";
import CardGrid from "./Components/Layouts/CardGrid/CardGrid";
import ImageGallery from "./Components/Layouts/ImageGallery/ImageGallery";
import ServicesSection from "./Components/Layouts/ServicesSection/ServicesSection";
import { useState } from "react";

function App() {
  const layoutOptions = [
    { id: 1, title: "Card Grid", component: <CardGrid /> },
    { id: 2, title: "Services Section", component: <ServicesSection /> },
    { id: 3, title: "Image Gallery", component: <ImageGallery /> },
  ];

  const [activeLayout, setActiveLayout] = useState(layoutOptions[0].id);

  return (
    <>
      <main>
        {/* Layout Options */}
        <section className="layout-options">
          <div className="container">
            <h2 className="section-title">Flex Layouts</h2>
            <div className="options-btns">
              {layoutOptions.map((option) => (
                <button
                  key={option.id}
                  className={`option-btn ${
                    activeLayout === option.id ? "active" : ""
                  }`}
                  onClick={() => setActiveLayout(option.id)}
                >
                  {option.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Layout Display */}
        <section className="layout-display">
          {layoutOptions.map(
            (option) =>
              activeLayout === option.id && (
                <div key={option.id}>{option.component}</div>
              )
          )}
        </section>
      </main>
    </>
  );
}

export default App;
