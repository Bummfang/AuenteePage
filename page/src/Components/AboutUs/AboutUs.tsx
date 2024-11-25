import { useState } from 'react';

const AboutUsCard = () => {
  // State, um zu steuern, ob der zusätzliche Text angezeigt wird
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle-Funktion zum Umschalten des Textes
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden flex flex-col md:flex-row-reverse mt-20">

      {/* Textbereich */}
      <div className="p-8 md:w-3/5">
        <h2 className="font-bold text-3xl text-gray-800 mb-6">Über uns</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Auentee – das sind Peter, ein promovierter Chemiker, und Steffi, eine Apothekerin, die ihre Leidenschaft und ihr Wissen über nachhaltige Bodenbearbeitung, den Anbau von Pflanzen, Umweltschutz und Teegenuss vereinen.<br /><br />
          Nach vielen Jahren in unseren erlernten Berufen fassten wir schließlich den Entschluss, den Schritt in die Selbstständigkeit zu wagen. Zuvor hatten wir unterschiedlichste Beschäftigungen bei verschiedenen Arbeitgebern, doch keine dieser Tätigkeiten konnte uns wirklich erfüllen. Als Freigeister konnten und wollten wir uns nicht mit der gegenwärtigen Arbeitskultur abfinden. Wir hangelten uns von Job zu Job und stellten immer wieder fest: Wenn wir nicht das tun, was uns glücklich macht, steuern wir unweigerlich auf eine Depression zu. <br /><br />
          {isExpanded && (
            <span>
              Dank unserer über zehnjährigen Erfahrung in der Gartenarbeit wussten wir schon, was uns Freude bereitet: Es sollte etwas mit Pflanzen zu tun haben! Natürlich nachhaltig, mit einem klaren Fokus auf regionalen Vertrieb. Doch unsere Vorliebe für außergewöhnliche Projekte, unsere begrenzten Investitionsmittel und die aktuelle Marktsituation in Leipzig schränkten unsere Möglichkeiten stark ein. Weder klassische Landwirtschaft noch der Gemüseanbau für Abonnements kamen für uns infrage. Gerade Letzteres wird in Leipzig bereits von zahlreichen tollen Solawis (solidarische Landwirtschaften) abgedeckt. Also überlegten wir weiter und stießen auf unsere zweite große gemeinsame Leidenschaft: Tee. Guten Kräutertee. <br /><br />
              Seit Jahren experimentieren wir begeistert mit verschiedensten Kräutern und Gewürzen, immer auf der Suche nach neuen Teekreationen – ob frisch oder getrocknet. Dabei entwickelten wir unsere Ideen für neue Sorten und Geschmacksrichtungen stetig weiter.<br /><br />
              Als die Idee, in den Teeanbau einzusteigen, einmal gefasst war, ließ sie uns nicht mehr los. Also beschlossen wir, Nägel mit Köpfen zu machen und uns ein geeignetes Grundstück zu suchen. Nach überraschend kurzer Zeit wurden wir im schönen Mölkau im Leipziger Osten fündig. Direkt am Naturschutzgebiet Rietzschkeaue haben wir auf dem Gelände der ehemaligen Gärtnerei Naumann ein altes Grundstück übernommen. Dort beginnen wir nun mit einer großflächigen Umgestaltung und dem Anbau unserer Teekulturen.
            </span>
          )}
        </p>
        <button
          onClick={toggleText}
          className="text-blue-500 hover:text-blue-700 mt-6"
        >
          {isExpanded ? 'Weniger lesen' : 'Mehr lesen'}
        </button>
      </div>

      {/* Bildbereich */}
      <div className="md:w-2/5 h-96 p-4 mt-16 ">
        <img
          src="/images/tea/BergteeZwei.webp"
          alt="Tee-Feld"
          className="object-cover h-full w-full rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default AboutUsCard;
