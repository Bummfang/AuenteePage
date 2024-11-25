import  Header from "./Components/Header/Header"
import  BackgroundSlider  from "./Components/ImageGallerie/images"
import AboutUs from "./Components/AboutUs/AboutUs"

function App() {
  return (
    <div>
      <Header />
      <div id="home" className="scroll-mt-header">
        <BackgroundSlider />
      </div>
      <div id="about" className="scroll-mt-header">
        <AboutUs />
      </div>
      <div id="tea" className="scroll-mt-header">
        {/* Tee-Abschnitt */}
        <div className="h-screen bg-gray-200 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Unser Tee</h2>
        </div>
      </div>
      <div id="impressum">
        {/* Impressum-Abschnitt */}
        <div className="h-screen bg-gray-100 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Impressum</h2>
        </div>
      </div>
    </div>
  );
}

export default App;

