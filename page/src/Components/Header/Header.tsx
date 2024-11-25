const Header = () => {
  return (
    <div className="bg-white fixed top-0 w-full z-10">
      <div className="flex items-center justify-between p-4">
        {/* Logo Container */}
        <div className="flex items-center">
          <img
            src="/images/logo/logoMitSchrift.webp"
            alt="Firmenlogo"
            className="h-64 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
