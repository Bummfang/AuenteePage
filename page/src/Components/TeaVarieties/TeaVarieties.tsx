import { useState } from "react";

const TeaVarieties = () => {
  const teas = [
    {
      id: 1,
      name: "Bergtee",
      shortDescription: "Frisch und belebend, perfekt für den Start in den Tag.",
      fullDescription: `
     Griechischer Bergtee, auch bekannt als „Sideritis“, „Eisenkraut“ oder „Hirtentee“, ist ein wahres Geschenk der Natur. Diese Pflanze, die in den Bergregionen Griechenlands und Albaniens, vor allem auf Höhen über 1.000 Metern wild wächst, wird seit der Antike geschätzt. Ihr Name leitet sich vom griechischen Wort „Sideros“ ab, was „Eisen“ bedeutet. Die Menschen glaubten, dass der Tee heilende Kräfte gegen Wunden habe, die von eisernen Waffen verursacht wurden. Heute wird er vor allem für seine wohltuenden Eigenschaften und seinen aromatischen Genuss geschätzt.

Bei Griechischem Bergtee handelt es sich nicht um eine spezifische Art, sondern es ist eine Sammelbezeichnung für verschiedene Arten aus der Gattung der Gliedkräuter (Sideritis). Aktuell wächst bei uns Sideritis scardica, auch als „Olympischer Bergtee“ bekannt und Sideritis syriaca, welcher auch den Beinnamen „Kretischer Bergtee“ trägt. Weitere Arten aus der Gattung werden aktuell von uns auf ihre Eignung bezüglich Kultivierbarkeit und Eignung als Teedroge getestet. 

Die zarten Stängel und Blüten des griechischen Bergtees tragen eine silbrig-weiche Behaarung, die sie in der kargen Berglandschaft widerstandsfähig gegen Trockenheit, Hitze sowie frostiger Kälte und Wind macht. Diese Pflanze gedeiht in der mediterranen Sonne und speichert die reine Kraft der Natur in ihren Blättern und Blüten. Beim Aufgießen entfaltet sie ein mildes, leicht blumiges und erdiges Aroma, das an die wilde Schönheit der griechischen Berge erinnert. Der Duft ist sanft, aber unverkennbar, und die goldgelbe Tasse verspricht Entspannung und Wohlbefinden.
Griechischer Bergtee ist nicht nur ein aromatisches Erlebnis, sondern auch ein echter Gesundheitshelfer. Er ist reich an Antioxidantien, die den Körper vor schädlichen freien Radikalen schützen. Traditionell wird er gegen Erkältungen, Verdauungsbeschwerden und zur Stärkung des Immunsystems getrunken. Der Tee ist beruhigend für Magen und Nerven, fördert die Verdauung und kann sogar beim Einschlafen helfen. 
Die Zubereitung des griechischen Bergtees ist einfach und dennoch ein kleines Ritual: Einige getrocknete Blüten und Stängel werden in heißes Wasser gegeben und für etwa fünf bis zehn Minuten ziehen gelassen. Je länger der Tee zieht, desto intensiver wird das Aroma. Man kann ihn pur genießen oder wie es in Griechenland üblich ist, mit einem Löffel Honig und einem Spritzer Zitrone verfeinern, was seine wohltuende Wirkung noch verstärkt.
Für viele Griechen gehört der Bergtee zum Alltag, sei es nach einem langen Spaziergang in der Natur oder an einem kühlen Winterabend. Der Genuss dieses Tees verbindet uns mit der alten Weisheit der Menschen, die sich auf die Kräfte der Natur verlassen haben. Wer ihn einmal probiert hat, wird schnell verstehen, warum der griechische Bergtee so geschätzt wird: Er ist mehr als nur ein Getränk – er ist ein Stück griechische Kultur und ein Symbol für Gesundheit und Wohlbefinden.
In einer Welt, die oft hektisch und laut ist, bietet eine Tasse griechischen Bergtees einen Moment der Ruhe und Einkehr. Es ist, als würde man mit jedem Schluck ein Stück der griechischen Berge und ihre beruhigende Stille in sich aufnehmen.

In unserem Betrieb kultivieren wir Sideritis ausschließlich im Kiesbeet, an einem in Richtung Süden ausgerichteten Hang. Trotz seiner mediterranen Herkunft gedeiht Bergtee im Leipziger Klima, insbesondere in dem auf unseren Beeten vorherrschenden Mikroklima recht gut. Starke Sonneneinstrahlung und der als Bodenbedeckung genutzte helle Kiessand ohne störende Begleitvegetation sorgen für ein extrem helles, gut durchlüftetes Habitat mit großen Temperaturunterschieden im Tages- und Jahreslauf. Auch wenn unsere deutsche Sicht auf Griechenland wohl meist durch Wärme, ganzjährig zum Baden einladende Buchten mit klaren Wasser und viel Sonne geprägt ist, kann es insbesondere im Bergland zu starken Wintereinbrüchen mit viel Neuschnee und Frost kommen. Aus diesem Grund toleriert der Bergtee, einmal etabliert, auch den deutschen Winter ohne Probleme.
      `,
      image: "/images/tea/Bergtee.webp",
    },
    {
      id: 2,
      name: "Tulsi",
      shortDescription: "Eine harmonische Mischung aus Kräutern und Gewürzen.",
      fullDescription: `
Tulsi (Ocimum tenuiflorum), auch bekannt als "Heiliges Basilikum", ist ein kraftvolles Kraut aus der ayurvedischen Tradition, das für seine einzigartigen Heilkräfte und sein unverwechselbares Aroma geschätzt wird. Die Blätter verströmen einen warm-würzigen Duft, der sowohl süße als auch pfeffrige Noten vereint und beim Aufguss einen tiefen, komplexen Geschmack freisetzt. Tulsi-Tee ist angenehm mild und erinnert an eine Mischung aus Basilikum und Anis – ideal für alle, die sich nach Entspannung und innerem Gleichgewicht sehnen.
Tulsi wird als "Adaptogen" angesehen, was bedeutet, dass es dem Körper hilft, mit Stress umzugehen und seine Widerstandskraft zu stärken. Traditionell wird es zur Förderung von Klarheit und geistiger Wachheit genutzt und soll zugleich beruhigend auf die Nerven wirken. Darüber hinaus gilt Tulsi als entzündungshemmend und antioxidativ und kann das Immunsystem stärken. Für viele ist Tulsi daher ein ideales Getränk, um Körper und Geist ins Gleichgewicht zu bringen – perfekt für einen Moment der Achtsamkeit und Erholung im Alltag.
      `,
      image: "/images/tea/Tulsi.webp",
    },
    {
      id: 3,
      name: "Zitronenmelisse",
      shortDescription: "Klassisch kräftig und aromatisch im Geschmack.",
      fullDescription: `
Zitronenmelisse (Melissa officinalis) ist ein wunderbares Kraut, das durch sein erfrischend-zitroniges Aroma und seine beruhigende Wirkung seit Jahrhunderten als Tee geschätzt wird. Die Blätter verströmen einen feinen Duft, der an Zitrusfrüchte erinnert und bereits beim Aufbrühen eine angenehme Frische und Leichtigkeit in die Tasse zaubert. Zitronenmelisse-Tee ist sanft und mild im Geschmack, mit einer weichen, leicht süßlichen Note, die ihn zu einem vielseitigen Getränk macht – ob pur oder als Zutat in Teemischungen.
In der Naturheilkunde wird die Zitronenmelisse für ihre beruhigenden und entspannenden Eigenschaften geschätzt. Ihre ätherischen Öle, insbesondere Citral und Citronellal, wirken auf das zentrale Nervensystem und können dabei helfen, Nervosität und innere Unruhe zu lindern. Ein Tee aus Zitronenmelisse am Abend ist daher ideal, um nach einem langen Tag abzuschalten und Körper und Geist zur Ruhe zu bringen.
Neben ihrer entspannenden Wirkung kann Zitronenmelisse auch bei Verdauungsbeschwerden hilfreich sein. Sie wirkt krampflösend und beruhigend auf den Magen-Darm-Trakt und kann bei Blähungen oder Völlegefühl Linderung verschaffen. Ebenso wird sie traditionell zur Unterstützung des Immunsystems eingesetzt und kann helfen, leichte Erkältungsbeschwerden zu lindern. Ein warmes Zitronenmelisse-Getränk tut besonders gut, wenn der Körper ein wenig geschwächt ist.
Zitronenmelisse ist nicht nur wohltuend für den Körper, sondern bringt mit ihrem frischen Aroma auch Freude und Leichtigkeit in den Alltag. Ob als erfrischender Sommertee auf Eis oder als warme Tasse an einem kühlen Abend – Zitronenmelisse ist ein wahrer Allrounder für Genuss und Wohlbefinden.
      `,
      image: "/images/tea/Zitronenmelisse.webp",
    },
  ];

  const [expandedTea, setExpandedTea] = useState<number | null>(null);


  const toggleExpand = (id: number | null) => {
    setExpandedTea(expandedTea === id ? null : id);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Überschrift */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-left">
          Unsere Tee-Sorten
        </h2>

        {/* Karten-Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teas.map((tea) => (
            <div
              key={tea.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Bild */}
              <div className="h-48">
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Text */}
              <div className="p-4">
                <h3 className="font-semibold text-xl text-gray-800">{tea.name}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {expandedTea === tea.id
                    ? tea.fullDescription
                    : tea.shortDescription}
                </p>
                <button
                  onClick={() => toggleExpand(tea.id)}
                  className="text-blue-500 text-sm mt-4 underline focus:outline-none"
                >
                  {expandedTea === tea.id ? "Weniger lesen" : "Mehr lesen"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeaVarieties;
