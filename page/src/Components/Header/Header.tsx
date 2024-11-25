const Header = () => {
  return (
    <div className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-black font-bold text-xl">
          <img
            src="/images/logo/logoMitSchrift.webp"
            alt="Firmenlogo"
            className="h-16 w-auto"
          />
        </div>
        <div className="flex space-x-4">
          <a href="#home" className="px-3 py-2 text-gray-700 hover:bg-green-600 hover:text-white rounded-lg">
            Home
          </a>
          <a href="#about" className="px-3 py-2 text-gray-700 hover:bg-green-600 hover:text-white rounded-lg">
            About
          </a>
          <a href="#tea" className="px-3 py-2 text-gray-700 hover:bg-red-600 hover:text-white rounded-lg">
            Tee
          </a>
          <a href="#impressum" className="px-3 py-2 text-gray-700 hover:bg-red-600 hover:text-white rounded-lg">
            Impressum
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
