import Logo from "components/ui/Header/Logo";
import Navigator from "components/ui/Header/Navigator";
import LinkedInIcon from "./LinkedinIcon";
import GithubIcon from "./GithubIcon";

const Header = () => {
  return (
    <header className="flex flex-row w-screen bg-gray-900 shadow-md p-1 position fixed z-10">
      <Navigator />
      <div className="flex flex-grow" />
      <GithubIcon />
      <LinkedInIcon />
      <Logo />
    </header>
  );
};

export default Header;
