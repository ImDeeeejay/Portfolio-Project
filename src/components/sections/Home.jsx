import { RevealOnScroll } from "../RevealOnScroll";
import deejayImg from "../../assets/deejay.jpg";
import gwayneImg from "../../assets/gwayne.jpg";
import mianeImg from "../../assets/Miane.jpg";
import ronImg from "../../assets/ron.jpg";
import creativeImg from "../../assets/Creativity.jpg";
import ExpertiseImg from "../../assets/Expertise.jpg";
import excellenceImg from "../../assets/Excellence.jpg";
import { HashLink as Link } from 'react-router-hash-link';
export const Home = () => {
  return (
    <>
    {/* Title  */}
      <div id="home" className="min-h-screen w-full flex items-center justify-center relative bg-black">
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent">
              Hack<span className="text-white">Stack</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              Innovating at every sprint with creativity and technical excellence.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/project" className="bg-gradient-to-r from-red-500 to-gray-600 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(158,121,94,0.4)]">
                View Projects
              </Link>
              <Link to="/contact" className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(189,161,99,0.2)] hover:bg-red-500/10">
                Contact Us
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
      {/* Eto yung sa meet the team */}
      <div id="team" className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4 py-16">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-7xl font-bold mb-4">Meet the <span className="text-red-500">TEAM</span></h2>
            <p className="text-lg max-w-4xl text-gray-300">
              We are a passionate group of developers, designers, and dreamers working together to build impactful
              digital solutions. Our diverse backgrounds and shared vision drive us to innovate, collaborate, and
              constantly grow.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* miane */}
          <Link smooth to="/team#miane">
            <div className="group p-[2px] rounded-3xl bg-gradient-to-br from-pink-400 to-pink-900 shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="bg-black rounded-3xl p-8 text-center h-full flex flex-col justify-center group-hover:bg-opacity-90 group-hover:shadow-xl transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden border-4 border-transparent group-hover:scale-110 group-hover:border-pink-500 transition-all duration-500 transform">
                  <img
                    src={mianeImg}
                    alt="Rojane Gacu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-extrabold text-white group-hover:text-pink-500 transition-colors duration-300">
                  Rojane Gacu
                </h3>
                <p className="text-white mt-4 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Frontend Developer with a keen eye for design and seamless user experiences.
                </p>
              </div>
            </div>
          </Link>


          {/* dj */}
          <Link smooth to="/team#deejay">
            <div className="group p-[2px] rounded-3xl bg-gradient-to-br from-blue-400 to-blue-900 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="bg-black rounded-3xl p-8 text-center h-full flex flex-col justify-center group-hover:bg-opacity-90 group-hover:shadow-xl transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden border-4 border-transparent group-hover:scale-110 group-hover:border-blue-500 transition-all duration-500 transform">
                  <img
                    src={deejayImg}
                    alt="Deejay Sarinas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-extrabold text-white group-hover:text-blue-500 transition-colors duration-300">
                  Deejay Sarinas
                </h3>
                <p className="text-white mt-4 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Backend developer, Specialize in building robust and scalable server-side applications.
                </p>
              </div>
            </div>
          </Link>

          {/* Gwayne */}
          <Link smooth to="/team#gwayne">
            <div className="group p-[2px] rounded-3xl bg-gradient-to-br from-red-500 to-red-900 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="bg-black rounded-3xl p-8 text-center h-full flex flex-col justify-center group-hover:bg-opacity-90 group-hover:shadow-xl transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden border-4 border-transparent group-hover:scale-110 group-hover:border-red-500 transition-all duration-500 transform">
                  <img
                    src={gwayneImg}
                    alt="Gwayne Adrian Santos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-extrabold text-white group-hover:text-red-500 transition-colors duration-300">
                  Gwayne Adrian Santos
                </h3>
                <p className="text-white mt-4 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  UI/UX Designer who crafts intuitive interfaces and meaningful user journeys.
                </p>
              </div>
            </div>
          </Link>

          {/* Ron */}
          <Link smooth to="/team#ron">
            <div className="group p-[2px] rounded-3xl bg-gradient-to-br from-green-500 to-green-900 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="bg-black rounded-3xl p-8 text-center h-full flex flex-col justify-center group-hover:bg-opacity-90 group-hover:shadow-xl transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden border-4 border-transparent group-hover:scale-110 group-hover:border-green-500 transition-all duration-500 transform">
                  <img
                    src={ronImg}
                    alt="Ron Mar Kyle Guerrero"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-extrabold text-white group-hover:text-green-500 transition-colors duration-300">
                  Ron Mar Kyle Guerrero
                </h3>
                <p className="text-white mt-4 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Data Engineer focused on data pipelines, analytics, and machine learning integration.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Mission Vission */}
      <div id="projects" className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4 py-16 overflow-hidden">
        <RevealOnScroll>
          <div className="text-left mb-12 max-w-7xl w-full px-4">
            <h2 className="text-7xl md:text-7xl font-bold mb-4">
              OUR <span className="text-red-600">MISSION</span>
            </h2>
            <p className="text-lg text-justify max-w-4xl mx-auto text-gray-300">
              At HackStack, we’re passionate about building smart, meaningful digital experiences that actually make a difference. Whether it’s crafting smooth user interfaces, setting up solid backend systems, or ensuring everything runs like clockwork through DevOps and data engineering, our team brings a mix of creativity, curiosity, and technical know-how to every project. We love pushing boundaries, learning as we go, and creating solutions that are not just scalable and efficient — but genuinely enjoyable to use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl w-full px-4 mt-4">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-red-600 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🎨</div>
              <h3 className="text-xl font-semibold mb-2 text-center">UI/UX Design</h3>
              <p className="text-gray-400 text-center">
                We craft interfaces that are not just pretty — but intuitive and user-friendly, because a clean UI is a happy user!
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-red-600 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-semibold mb-2 text-center">Smart Backend</h3>
              <p className="text-gray-400 text-center">
                From REST APIs to real-time systems — we love writing code that works behind the scenes like magic (or JavaScript).
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-red-600 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🎓</div>
              <h3 className="text-xl font-semibold mb-2 text-center">Always Learning</h3>
              <p className="text-gray-400 text-center">
                We're students — always exploring, breaking stuff, fixing it again, and learning on the go. That's how we grow.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-red-600 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🤝</div>
              <h3 className="text-xl font-semibold mb-2 text-center">Team First</h3>
              <p className="text-gray-400 text-center">
                Collaboration is our cheat code. We brainstorm, debug, and build things together — and it’s awesome.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-red-600 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-center">Deploy & Iterate</h3>
              <p className="text-gray-400 text-center">
                Push to Git, ship to the world — then fix bugs right after. We believe in launching early and improving often.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-red-600 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">💡</div>
              <h3 className="text-xl font-semibold mb-2 text-center">Creative Ideas</h3>
              <p className="text-gray-400 text-center">
                Hackathons, late-night ideas, or group sprints — our best work starts with a spark and ends with something cool.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>




      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4 py-16 overflow-hidden">
        <RevealOnScroll>
          <div className="text-right mb-12 max-w-7xl w-full px-4">
            <h2 className="text-7xl md:text-7xl font-bold mb-4">
              OUR <span className="text-red-600">VISION</span>
            </h2>
            <p className="text-lg text-justify max-w-4xl mx-auto text-gray-300">
              We envision a future where technology seamlessly integrates with human needs, fostering collaboration, growth, and continuous improvement. HackStack aspires to be a leading force in digital transformation, shaping the next generation of web experiences through creativity, technical mastery, and unwavering dedication to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl w-full px-4 mt-4">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-red-600 transition-all duration-300">
              <img src={creativeImg}
                className="h-40 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">Creativity</h3>
              <p className="text-gray-400 text-sm text-center">
                Encouraging bold, original thinking to drive innovative digital solutions.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-red-600 transition-all duration-300">
              <img src={ExpertiseImg}
                className="h-40 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">Expertise</h3>
              <p className="text-gray-400 text-sm text-center">
                Building solutions grounded in deep technical proficiency and real-world know-how.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-red-600 transition-all duration-300">
              <img src={excellenceImg}
                className="h-40 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">Excellence</h3>
              <p className="text-gray-400 text-sm text-center">
                Striving for quality and precision in every aspect of our digital journey.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

    </>
  );
};
