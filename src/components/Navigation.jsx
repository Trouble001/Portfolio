import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  return (
    <div className="w-full h-12 bg-white dark:bg-black top-0 fixed z-50">
      <div className="w-11/12 mx-auto h-full flex items-center justify-between">
        <a href="/" className="text-base sm:text-md md:text-lg lg:text-xl text-black/100 dark:text-white/100">Folio</a>
        <div className="">
          <a href="/" className="text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 mr-2 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 hover:text-green-500 hover:border-b transition-all">Home</a>
          <a href="/" className="text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 mr-2 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 hover:text-green-500 hover:border-b transition-all">About</a>
          <a href="/" className="text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 mr-2 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 hover:text-green-500 hover:border-b transition-all">Projects</a>
          <a href="/" className="text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 hover:text-green-500 hover:border-b transition-all">Contact</a>
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navigation;
