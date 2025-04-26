import { RevealOnScroll } from "../RevealOnScroll";
import deejayImg from "../../assets/deejay.jpg"; // adjust the path as needed
import gwayneImg from "../../assets/gwayne.jpg";

export const Home = () => {
  return (
    <>
      {/* First section - Hero */}
      <div id="home" className="min-h-screen w-full flex items-center justify-center relative bg-black">
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">
              Hack<span className="text-white">Stack</span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              Innovating at every sprint with creativity and technical excellence.
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-green-500 to-blue-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Second section - Team Introduction */}
      <div id="team" className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4 py-16">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-7xl md:text-7x font-bold  mb-4">MEET THE TEAM</h2>
            <p className="text-lg max-w-4xl text-gray-300">
              We are a passionate group of developers, designers, and dreamers working together to build impactful
              digital solutions. Our diverse backgrounds and shared vision drive us to innovate, collaborate, and
              constantly grow.
            </p>
          </div>
        </RevealOnScroll>

      {/* First row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-6 justify-center">
        {/* James */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 shadow-xl">
          <div className="bg-black rounded-2xl p-6 text-center h-full">
            <img src={deejayImg} alt="James Carlo Asperilla" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white" />
            <h3 className="text-xl font-bold text-white">James Carlo Asperilla</h3>
            <p className="text-white mt-2 text-sm">Team Lead & Backend Engineer. Passionate about scalable systems and clean architecture.</p>
          </div>
        </div>

        {/* Rojane */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 shadow-xl">
          <div className="bg-black rounded-2xl p-6 text-center h-full">
            <img src={deejayImg} alt="Rojane Gacu" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white" />
            <h3 className="text-xl font-bold text-white">Rojane Gacu</h3>
            <p className="text-white mt-2 text-sm">Frontend Developer with a keen eye for design and seamless user experiences.</p>
          </div>
        </div>

        {/* Deejay */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 shadow-xl">
          <div className="bg-black rounded-2xl p-6 text-center h-full">
            <img src={deejayImg} alt="Deejay Sarinas" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white" />
            <h3 className="text-xl font-bold text-white">Deejay Sarinas</h3>
            <p className="text-white mt-2 text-sm">DevOps Specialist. Ensures smooth CI/CD and robust deployment pipelines.</p>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl justify-center">
        {/* Gwayne */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-600 to-green-500 shadow-xl">
          <div className="bg-black rounded-2xl p-6 text-center h-full">
            <img src={gwayneImg} alt="Gwayne Adrian Santos" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white" />
            <h3 className="text-xl font-bold text-white">Gwayne Adrian Santos</h3>
            <p className="text-white mt-2 text-sm">UI/UX Designer who crafts intuitive interfaces and meaningful user journeys.</p>
          </div>
        </div>

        {/* Ron */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 shadow-xl">
          <div className="bg-black rounded-2xl p-6 text-center h-full">
            <img src={deejayImg} alt="Ron Mar Kyle Guerrero" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white" />
            <h3 className="text-xl font-bold text-white">Ron Mar Kyle Guerrero</h3>
            <p className="text-white mt-2 text-sm">Data Engineer focused on data pipelines, analytics, and machine learning integration.</p>
            <div className="flex justify-center gap-3 mt-4 text-white text-lg">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="projects" className="min-h-screen w-screen flex items-center justify-center bg-black text-white px-4 py-16 overflow-hidden">
    <RevealOnScroll>
        <div className="text-left mb-12 max-w-7xl w-full px-4">
          <h2 className="text-7xl md:text-7xl font-bold mb-4">OUR <span>MISSION</span></h2>
          <p className="text-lg text-justify max-w-4xl mx-auto text-gray-300">
          HackStack is committed to driving technical excellence and innovation, crafting impactful digital solutions that enhance user experiences. Through our diverse expertise in backend development, UI/UX design, DevOps, and data engineering, we collaborate to push boundaries and create scalable, intuitive, and efficient technologies.
          </p>
        </div>
    </RevealOnScroll>
    </div>
    


    <div id="projects" className="min-h-screen w-screen flex flex-col items-center justify-center bg-black text-white px-4 py-16 overflow-hidden">
    <RevealOnScroll>
      <div className="text-right mb-12 max-w-7xl w-full px-4">
        <h2 className="text-7xl md:text-7xl font-bold mb-4">
          OUR <span>VISION</span>
        </h2>
        <p className="text-lg text-justify max-w-4xl mx-auto text-gray-300">
          We envision a future where technology seamlessly integrates with human needs, fostering collaboration, growth, and continuous improvement. HackStack aspires to be a leading force in digital transformation, shaping the next generation of web experiences through creativity, technical mastery, and unwavering dedication to excellence.
        </p>
      </div>
    </RevealOnScroll>

    {/* VISION CARDS */}
    <div className="bg-black w-full gap-4 flex-wrap flex justify-center items-center py-12">
      {/* Card 1 */}
      <div className="w-60 p-2 bg-black rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img 
          className="h-40 object-cover rounded-xl" 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
          alt=""
        />
        <div className="p-2">
          <h2 className="font-bold text-lg text-center mb-2">Creativity</h2>
        </div>
      </div>
      

      {/* Card 2 */}
      <div className="w-60 p-2 bg-black rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img 
          className="h-40 object-cover rounded-xl" 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
          alt=""
        />
        <div className="p-2">
          <h2 className="font-bold text-lg text-center mb-2">Expertise</h2>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-60 p-2 bg-black rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img 
          className="h-40 object-cover rounded-xl" 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
          alt=""
        />
        <div className="p-2">
          <h2 className="font-bold text-lg text-center mb-2">Excellence</h2>
        </div>
      </div>
    </div>

  </div>





    </>
  );
};
