import { IoMenu } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="relative">
      <div className="container mx-auto py-4 px-4 md:px-0 flex justify-between items-center">
        <a href="#">
          <img src="/src/images/logo.svg" alt="logo pagina" />
        </a>
        <button className="text-4xl text-m-grash-violet">
          <IoMenu />
        </button>
        <nav className="flex flex-col absolute top-16 left-0 right-0 text-center mx-4 bg-m-violet text-white py-8 gap-6 px-6 rounded-lg font-bold justify-center">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <div className="h-[1px] w-full bg-m-grash-violet"></div>
          <a href="#">Login</a>
          <a className="bg-m-cyan py-2 rounded-[32px] inline-block shadow" href="#">Sign Up</a>
        </nav>
      </div>
    </header>
  )
}
