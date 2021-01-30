import Logo from "components/ui/Header/Logo";
import Navigator from "components/ui/Header/Navigator";

const Header = () => {
  return (
    <header className="flex flex-row w-screen bg-gray-900 shadow-md p-1 position fixed z-10">
      <Logo />
      <div className="flex flex-grow" />
      <Navigator />
    </header>
  );
};

export default Header;
