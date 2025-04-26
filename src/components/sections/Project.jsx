import { RevealOnScroll } from "../RevealOnScroll";
import CheckmatehomeImg from "../../assets/checkmatehome.png";
import CheckmateImg from "../../assets/checkmate.png";
import CheckmateprojImg from "../../assets/checkmateproj.png";
import CheckmatecalendarImg from "../../assets/checkmatecalendar.png";
import PortfoliohomeImg from "../../assets/Portfoliohome.jpeg";
import PortfoliomianeImg from "../../assets/Portfoliomiane.png";
import PortfoliomianedescImg from "../../assets/Portfoliomianedesc.png"
import PortfoliodeejayImg from "../../assets/Portfoliodeejay.png"

export const Project = () => {
  return (
    <div id="projects" className="w-full bg-black text-white overflow-hidden">
      {/* Title */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <RevealOnScroll>
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
              OUR <span className="bg-gradient-to-r from-red-400 to-white text-transparent bg-clip-text">
                PROJECTS
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing the passion, innovation, and expertise behind our work.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className="w-full flex items-center justify-center px-4 pt-16">
        <RevealOnScroll>
          <h3 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
            Featured <span className="text-red-300">Project</span>
          </h3>
        </RevealOnScroll>
      </section>

      <section className="w-full flex items-center justify-center px-4 pb-32">
        <RevealOnScroll>
          <div className="bg-gradient-to-t from-red-500 to-gray-900 rounded-2xl p-12 max-w-6xl w-full flex flex-col gap-12 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1 space-y-6">
                <h4 className="text-3xl font-bold text-white">CheckMate</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  CheckMate is a task and schedule management system designed to help students and professionals keep track of deadlines, organize priorities, and collaborate seamlessly in a shared space.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  Built using <span className="text-red-300">HTML</span>, <span className="text-red-300">CSS</span>, <span className="text-red-300">JavaScript</span>, and <span className="text-red-300">MySQL</span>, the system provides a reliable and intuitive interface for managing individual or group projects with built-in reminders and a centralized calendar.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium">HTML</span>
                  <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium">CSS</span>
                  <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
                  <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium">MySQL</span>
                </div>
              </div>

              <div className="w-full lg:w-[50%] flex flex-col gap-6 items-center justify-center">
                <div className="overflow-hidden rounded-2xl shadow-md mb-8">
                  <img
                    src={CheckmateImg}
                    alt="Main Screenshot"
                    className="w-full h-72 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-wrap gap-6 justify-center">
                  {[CheckmatehomeImg, CheckmateprojImg, CheckmatecalendarImg].map((img, index) => (
                    <div
                      key={index}
                      className="w-[30%] min-w-[100px] overflow-hidden rounded-xl shadow-md transform transition-transform hover:scale-105"
                    >
                      <img
                        src={img}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
       

      {/* Project Showcase Box */}
      <section className="w-full flex items-center justify-center px-4 pb-32">
        <RevealOnScroll>
          <div className="bg-gradient-to-t from-red-500 to-gray-900 rounded-2xl p-12 max-w-6xl w-full flex flex-col gap-12 shadow-lg">
            {/* Project Content */}
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* Description Section */}
              <div className="flex-1 space-y-6">
                <h4 className="text-3xl font-bold text-white">Portfolio Project (Ongoing)</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                This portfolio website was created by a student from Cavite State University – Imus Campus as part of a project for our Information Technology course. It was built using React.js to showcase my skills, educational background, and some of the projects I've worked on. I designed it to be simple, responsive, and user-friendly, with features like project previews, a contact section, and smooth navigation. This portfolio also serves as a way for me to apply what I’ve learned in front-end development and improve my skills in web design and coding.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  Built using <span className="text-red-300">ReactJS</span>, <span className="text-red-300">TailwindCSS</span>, and <span className="text-red-300">JavaScript</span>, the portfolio offers a clean and user-friendly interface that highlights individual skills and projects, featuring organized sections, interactive elements, and a smooth browsing experience.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium">ReactJS</span>
                  <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium">TailwindCSS</span>
                  <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
                </div>
              </div>

              <div className="w-full lg:w-[50%] flex flex-col gap-6 items-center justify-center">
                <div className="overflow-hidden rounded-2xl shadow-md mb-8">
                  <img
                    src={PortfoliohomeImg}
                    alt="Main Screenshot"
                    className="w-full h-72 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Gallery Images */}
                <div className="flex flex-wrap gap-6 justify-center">
                  {[PortfoliomianeImg, PortfoliomianedescImg,PortfoliodeejayImg].map((img, index) => (
                    <div
                      key={index}
                      className="w-[30%] min-w-[100px] overflow-hidden rounded-xl shadow-md transform transition-transform hover:scale-105"
                    >
                      <img
                        src={img}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};
