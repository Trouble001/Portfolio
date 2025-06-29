import Icons from "../components/Icons";

const SkillSection = () => {
  return (
    <section className="w-full h-screen pt-10">
      <div className="flex items-center justify-center py-4">
        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-600">MY SKILLS</h4>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-8">
        <div className="w-full h-full flex items-center justify-center">
          <p className="w-10/12 mx-auto text-center text-sm sm:text-sm md:text-base lg:text-md xl:text-lg text-black/80 dark:text-white/70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis cum iure sequi. Quo, esse incidunt non expedita autem quod numquam. Hic nisi nam, eius explicabo dolorem amet temporibus eaque inventore.</p>
        </div>
        <Icons />
      </div>
    </section>
  )
}

export default SkillSection
