const HeroSection = () => {
  return (
    <section className="w-full min-h-screen h-auto grid grid-cols-1 xl:grid-cols-2 border-b-2 border-black/30 dark:border-white/30">
      <div className="w-full flex items-center justify-center">
        <div className="">
          <h5 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium text-black/90 dark:text-white/90">Hello!</h5>
          <h3 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black/100 dark:text-white/100">I'm <span className="text-green-600 dark:text-green-600">Pranesh Chaturvedi</span></h3>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-normal text-black/80 dark:text-white/80">Full Stack Web Developer</p>
          <div className="w-full flex flex-row items-center justify-start mt-2">
            <button className="text-xs sm:text-xs md:text-sm lg-text-base outline bg-green-600 outline-green-600 text-white dark:text-black px-6 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-1 sm:py-1 md:py-1.5 lg:py-2 xl:py-2 cursor-pointer rounded-full flex items-center justify-center shadow mr-2">Contact Me</button>
            <button className="text-xs sm:text-xs md:text-sm lg-text-base outline outline-green-600 text-green-600 px-6 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-1 sm:py-1 md:py-1.5 lg:py-2 xl:py-2 cursor-pointer rounded-full flex items-center justify-center shadow">Get Resume</button>
          </div>
        </div>
      </div>
      <div className="w-full"></div>
    </section>
  )
}

export default HeroSection;