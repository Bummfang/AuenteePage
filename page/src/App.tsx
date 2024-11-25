import Header from "./Components/Header/Header";
import BackgroundSlider from "./Components/ImageGallerie/images";
import AboutUs from "./Components/AboutUs/AboutUs";
import TeaVarieties from "./Components/TeaVarieties/TeaVarieties";
import BezugsquelleCard from "./Components/Bezugsquellen/Bezugsquellen";
import WillkommenCard from "./Components/Willkommen/Willkommen";
import ScrollNavigation from "./Components/Header/ScrollNavigation"; // Importiere die ScrollNavigation
import ImpressumCard from "./Components/Impressum/Impressum";

function App() {
  return (
    <div>
      {/* Header bleibt oben */}
      <Header />

      {/* ScrollNavigation */}
      <ScrollNavigation />

      {/* Verschiedene Abschnitte */}
      <div id="home" className="scroll-mt-header">
        <BackgroundSlider />
      </div>
      <div id="welcome" className="scroll-mt-header">
        <WillkommenCard />
      </div>
      <div id="about" className="scroll-mt-header">
        <AboutUs />
      </div>
      <div id="tea" className="scroll-mt-header">
        <TeaVarieties />
      </div>
      <div id="bezug" className="scroll-mt-header">
        <BezugsquelleCard />
      </div>
      <div id="impressum" className="scroll-mt-header">
        <ImpressumCard />
      </div>
    </div>
  );
}

export default App;
