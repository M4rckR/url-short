import { IoMenu } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="relative">
      <div className="container mx-auto py-4 px-2 md:px-0 flex justify-between items-center">
        <a href="#">
          <img src="/src/images/logo.svg" alt="logo pagina" />
        </a>
        <button className="text-4xl md:hidden hidden">
          <IoMenu />
        </button>
        <nav className="flex flex-col absolute top-0 left-1/2 -translate-x-1/2 text-center">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <hr />
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </nav>
      </div>
    </header>
  )
}
