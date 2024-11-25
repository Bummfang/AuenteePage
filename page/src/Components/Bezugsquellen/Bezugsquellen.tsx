const BezugsquelleCard = () => {
    return (
      <div className="bg-gray-100 py-12 px-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Bezugsquelle für unseren Tee</h2>
        <p className="text-gray-600 mb-6 text-center max-w-4xl mx-auto">
          Falls ihr jetzt durstig geworden seid, stellt sich natürlich die Frage: Wo kann man unseren Tee kaufen?
          <br /><br />
          Aufgrund unserer Philosophie wollen wir unseren Tee in kleinen, regionalen Läden, Bäckereien und Cafés anbieten lassen. 
          Da aktuell der Betriebsaufbau im Vordergrund steht, fallen die diesjährigen Produktionsmengen eher gering aus. 
          Es wird daher in nächster Zeit nicht möglich sein, eine regelmäßige Belieferung zu gewährleisten. 
          Ab Sommer 2025 rechnen wir erstmals mit einer größeren Ernte. Zur Zeit sind wir mit verschiedenen Personen im Gespräch, um eine Vermarktung zu realisieren. 
          Eine übersichtliche Auflistung von Bezugsquellen findet ihr hier. Schaut ab und zu mal hier vorbei, die Aufzählung ist im stetigen Wachstum begriffen.
        </p>
          
        {/* Bildbereich */}
        <div className="flex justify-center mb-6">
          <div className="w-full md:w-2/3 lg:w-1/2 mt-4">
            <img 
              src="/images/Bezugsquellen/BezugsquelleEins.png" 
              alt="Standortkarte"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
  
        {/* Abschnitt mit Bezugsquelle Details */}
        <div className="text-center text-gray-700 mt-6">
          <p className="text-lg font-semibold">Das Backstübel – mit Wonne gebacken</p>
          <p className="text-base mt-2">Rochlitzer Straße 65</p>
          <p className="text-base">09648 Mittweida</p>
          <a href="https://www.dasbackstuebel.de/" className="text-blue-500 mt-2 inline-block">
            www.dasbackstuebel.de
          </a>
        </div>
      </div>
    );
  };
  
  export default BezugsquelleCard;
  