const ImpressumCard = () => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 max-w-3xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Impressum</h2>

      <div className="text-gray-700 space-y-4">
        <div>
          <p className="font-semibold">Impressum gemäß § 5 DDG</p>
          <p>Dr. Peter Wonneberger</p>
          <p>Eilenburger Str. 30</p>
          <p>04317 Leipzig</p>
        </div>

        <div>
          <p className="font-semibold">Vertreten durch:</p>
          <p>Dr. Peter Wonneberger</p>
        </div>

        <div>
          <p className="font-semibold">Kontakt:</p>
          <p>Telefon: +4917683847230</p>
          <p>E-Mail: kontakt.auentee@posteo.de</p>
        </div>

        <div>
          <p className="font-semibold">Steueridentifikationsnummer:</p>
          <p>232/299/00757</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mt-6">Haftungsausschluss:</h3>
          <p className="font-semibold">Haftung für Inhalte</p>
          <p>
            Ich habe die Inhalte meiner Website mit größter Sorgfalt erstellt, kann jedoch keine
            Gewähr für deren Richtigkeit, Vollständigkeit und Aktualität übernehmen. Als
            Diensteanbieter bin ich gemäß § 7 Abs.1 TMG nach den allgemeinen Gesetzen für eigene
            Inhalte auf dieser Website verantwortlich. Nach §§ 8 bis 10 TMG bin ich jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
            nach Hinweisen auf rechtswidrige Tätigkeiten zu durchsuchen. Verpflichtungen zur
            Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            bleiben hiervon unberührt. Eine Haftung in diesem Zusammenhang entsteht jedoch erst ab
            dem Zeitpunkt, an dem mir eine konkrete Rechtsverletzung bekannt wird. Sobald mir solche
            Rechtsverletzungen bekannt werden, werden die betroffenen Inhalte umgehend entfernt.
          </p>
        </div>

        <div>
          <p className="font-semibold">Haftung für Links</p>
          <p>
            Die in meinem Angebot enthaltenen Links zu externen Webseiten Dritter, enthalten Inhalte
            auf den ich keinen Einfluss haben. Deshalb kann ich auch keine Gewähr für diese fremden
            Inhalte übernehmen. Verantwortlich für die Inhalte der verlinkten Seiten ist stets der
            jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Zum Zeitpunkt der
            Verlinkung wurden die verlinkten Seiten auf mögliche Rechtsverstöße überprüft, wobei
            rechtswidrige Inhalte nicht erkennbar waren. Eine permanente inhaltliche Kontrolle der
            verlinkten Seiten ist jedoch nicht zumutbar. Wird mir eine Rechtsverletzung bekannt,
            werde ich derartige Links umgehend löschen.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mt-6">Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber veröffentlichte Inhalte und Werke auf dieser Website
            unterliegen dem deutschen Urheberrecht. Die Bearbeitung, Vervielfältigung, Verbreitung
            und jede Art der Nutzung/Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
            einer schriftlichen Zustimmung des Website Betreibers. Downloads und Kopien dieser Seite
            sind nur für den privaten, aber nicht den kommerziellen Gebrauch gestattet. Soweit
            bestimmte Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, findet eine
            Beachtung der Urheberrechte von Dritten statt. Insbesondere werden Inhalte Dritter als
            solche deutlich gekennzeichnet. Sollten Sie trotz allem auf eine Urheberrechtsverletzung
            aufmerksam werden, bitte ich Sie um Kontaktaufnahme. Bei Bekanntwerden von
            Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mt-6">Datenschutz</h3>
          <p>
            Die Nutzung dieser Webseite ist ohne Angabe personenbezogener Daten möglich. Falls auf
            meiner Website personenbezogene Daten erhoben werden, erfolgt dies, soweit möglich,
            stets auf freiwilliger Basis. Diese Daten werden nicht ohne Ihre ausdrückliche
            Zustimmung an Dritte weitergegeben. Wir weisen darauf hin, dass die Internetdatenübertragung
            im Internet Sicherheitslücken aufweisen kann. Ein vollständiger Schutz der Daten vor dem
            Zugriff durch Dritte ist technisch nicht realisierbar. Der Nutzung von im Rahmen der
            Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übermittlung von nicht
            angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Der
            Betreiber der Website behält sich ausdrücklich rechtliche Schritte im Falle der
            unverlangten Zusendung von Werbeinformationen vor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpressumCard;
