export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gray-200 px-6"
      id="home"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between relative z-10 gap-10">
        
        {/* Left - Image */}
        <div className="flex-shrink-0 pl-4 md:pl-12">
          <img
            src="/me.jpg"
            alt="Himanshu"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-white"
          />
        </div>

        {/* Right - Text */}
        <div className="text-center md:text-left md:pr-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Hi, I'm Himanshu</h1>
          <h2 className="text-2xl text-blue-600 font-semibold mt-2">Aspiring Full-Stack & AI Developer</h2>
          <p className="mt-4 text-gray-700 max-w-xl">
            Passionate about building powerful, scalable web apps and solving real-world problems with AI and machine learning.
          </p>
          <p className="mt-2 italic text-yellow-600 font-medium">
            "Empowering lives through intelligent solutions."
          </p>
        </div>
      </div>
    </section>
  );
}
