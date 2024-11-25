import { BsArrowDown, BsArrowBarDown, BsArrowUp, BsArrowBarUp } from "react-icons/bs";

const ScrollNavigation = () => {
  const sectionIds = ["home", "welcome", "about", "tea", "bezug", "impressum"];

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getCurrentSectionIndex = (): number => {
    const offset = window.scrollY + window.innerHeight / 2;
    return sectionIds.findIndex((id) => {
      const element = document.getElementById(id);
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = rect.bottom + window.scrollY;
      return offset >= top && offset < bottom;
    });
  };

  return (
    <div
      className="fixed right-4 top-1/3 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-10"
    >
      {/* Ganz nach oben */}
      <button
        onClick={() => scrollToSection(sectionIds[0])}
        className="text-4xl text-gray-700 hover:text-black p-4 bg-gray-300 rounded-full shadow-md"
        title="Zum Anfang"
      >
        <BsArrowBarUp />
      </button>

      {/* Zum vorherigen Abschnitt */}
      <button
        onClick={() => {
          const current = getCurrentSectionIndex();
          if (current > 0) scrollToSection(sectionIds[current - 1]);
        }}
        className="text-4xl text-gray-700 hover:text-black p-4 bg-gray-100 rounded-full shadow-md"
        title="Nach oben"
      >
        <BsArrowUp />
      </button>

      {/* Zum nächsten Abschnitt */}
      <button
        onClick={() => {
          const current = getCurrentSectionIndex();
          if (current < sectionIds.length - 1) scrollToSection(sectionIds[current + 1]);
        }}
        className="text-4xl text-gray-700 hover:text-black p-4 bg-gray-100 rounded-full shadow-md"
        title="Nach unten"
      >
        <BsArrowDown />
      </button>

      {/* Ganz nach unten */}
      <button
        onClick={() => scrollToSection(sectionIds[sectionIds.length - 1])}
        className="text-4xl text-gray-700 hover:text-black p-4 bg-gray-100 rounded-full shadow-md"
        title="Zum Ende"
      >
        <BsArrowBarDown />
      </button>
    </div>
  );
};

export default ScrollNavigation;
