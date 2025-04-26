import { RevealOnScroll } from "../RevealOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
} 
from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import deejayImg from "../../assets/deejay.jpg";
import gwayneImg from "../../assets/gwayne.jpg";
import mianeImg from "../../assets/miane.jpg";
import ronImg from "../../assets/ron.jpg";

export const Team = () => {
  const services = [
    {
      title: "UI/UX Design",
      icon: "✏️",
      description:
        "Providing quality work to clients and companies.",
    },
    {
      title: "Web Development",
      icon: "💻",
      description:
        "Providing quality work to clients and companies.",
    },
    {
      title: "Research & Analysis",
      icon: "📂",
      description:
        "Providing quality work to clients and companies.",
    },
  ];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="w-full bg-gradient-to-r bg-black-500 text-white">
      {/* Title */}
      <div className="snap-center min-h-screen flex items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your-image.jpg")' }}>
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-white">
              Meet the <span className="bg-gradient-to-r from-red-400 to-white text-transparent bg-clip-text">Team</span>
            </h1>
            <p className="text-gray-200 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              A passionate group of builders and problem solvers.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/*\Profile Card - Miane */}
      <div className="min-h-screen w-full flex items-center justify-center bg-black px-4">
        <RevealOnScroll>
          <div className="bg-gradient-to-t from-pink-500 to-gray-900 rounded-xl p-15 max-w-5xl w-full flex flex-col md:flex-row items-start gap-10">
            <div className="flex-shrink-0 w-full md:w-1/3">
              <img
                src={mianeImg}
                alt="Profile"
                className="rounded-lg w-full h-89 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-1 scroll-mt-60" id="miane"> {/* linking the teams */}
              <h2 className="text-pink-300 text-sm font-bold uppercase tracking-wide mb-2">Who am I?</h2>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
                I'm <span className="text-pink-500 underline">Rojane</span>, a visual UI/UX Designer and Web Developer
              </h1>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                I am Student of Cavite State University - Imus Campus and currently studying Bachelor of Science in Information Technology.
              </p>
              <hr className="border-red-400 mb-6" />
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
                <div><span className="font-bold text-white">Name:</span> Rojane Gacu</div>
                <div><span className="font-bold text-white">Age:</span> 20 Years</div>
                <div><span className="font-bold text-white">From:</span> Imus City, Cavite</div>
                <div>
                  <span className="font-bold text-white">Email:</span>
                  <a href="mailto:rojanegacu21@gmail.com" className="text-blue-400 hover:underline"> rojanegacu21@gmail.com</a>
                </div>
              </div>
              <hr className="border-red-400 mb-6" />
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-gray-400 text-lg">
                  <a href="https://www.instagram.com/amaramiane_/" className="hover:text-white hover:scale-110 transition-transform"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="https://web.facebook.com/miane.rain" className="hover:text-white hover:scale-110 transition-transform"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="https://github.com/AmaraMiane8214" className="hover:text-white hover:scale-110 transition-transform"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-12 px-6 md:px-12">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-extrabold text-pink-400 tracking-widest">MY JOURNEY</h1>
          </div>

          <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg hover:shadow-pink-400/30 transition-shadow duration-300">
            <h3 className="text-4xl font-extrabold mb-6 border-b-2 border-pink-500 pb-2 uppercase tracking-wide">
              Skills
            </h3>

            <div className="mb-8">
              <div className="relative flex items-center justify-center mb-4">
                <div className="flex-grow border-t border-zinc-600"></div>
                <span className="px-4 text-2sm font-bold text-gray-300 tracking-wide bg-none z-10">Front-End Programming Languages</span>
                <div className="flex-grow border-t border-zinc-600"></div>
              </div>
              <h4 className="text-lg font-bold text-white">HTML</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">Standard markup language for Web pages.</p>
              <h4 className="text-lg font-bold text-white">CSS</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">Stylesheet language used for specifying the presentation and styling of a document written in a markup language such as HTML.</p>
              <h4 className="text-lg font-bold text-white">React</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">A library for web and native user interfaces.</p>
              <h4 className="text-lg font-bold text-white">JavaScript</h4>
              <p className="text-sm text-gray-300 leading-relaxed">A programming language and core technology of the World Wide Web, alongside HTML and CSS.</p>
            </div>

            <div className="mb-8">
              <div className="relative flex items-center justify-center mb-4">
                <div className="flex-grow border-t border-zinc-600"></div>
                <span className="px-4 text-2sm font-bold text-gray-300 tracking-wide bg-none z-10">Back-End programming languages</span>
                <div className="flex-grow border-t border-zinc-600"></div>
              </div>
              <h4 className="text-lg font-bold text-white">PHP</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">A general-purpose scripting language geared towards web development.</p>
              <h4 className="text-lg font-bold text-white">Java</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">A high-level, general-purpose memory-safe, object-oriented programming language.</p>
            </div>

            <div className="mb-8">
              <div className="relative flex items-center justify-center mb-4">
                <div className="flex-grow border-t border-zinc-600"></div>
                <span className="px-4 text-2sm font-bold text-gray-300 tracking-wide bg-none z-10">Databases</span>
                <div className="flex-grow border-t border-zinc-600"></div>
              </div>
              <h4 className="text-lg font-bold text-white">MySQL</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">An open-source relational database management system.</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <section className="bg-black text-white py-12 px-6">
        <RevealOnScroll>
          <h1 className="text-2xl md:text-3xl text-pink-500 font-bold text-center tracking-widest mb-4">SERVICES</h1>
          <h2 className="text-center text-3xl mb-8 text-white">What I do for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-pink-500 p-6 rounded-lg text-center transition-transform hover:scale-105 hover:shadow-lg duration-300"
              >
                <div className="text-pink-500 text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="bg-black text-white py-12 px-6">
        <RevealOnScroll>
          <h1 className="text-2xl md:text-3xl text-pink-400 font-bold text-center mb-4">MY TALENT</h1>
          <h2 className="text-center text-3xl mb-8 text-white">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="border border-pink-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">C++</h3>
                <span className="text-pink-500 text-lg">80%</span>
              </div>
              <p className="text-gray-400 text-sm">
                C++ is a powerful, general-purpose programming language created by Bjarne Stroustrup in the early 1980s. It is an extension of the C language, with added features like object-oriented programming, classes, and templates.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-pink-400 h-2 rounded transition-all" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="border border-pink-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">JavaScript</h3>
                <span className="text-pink-500 text-lg">50%</span>
              </div>
              <p className="text-gray-400 text-sm">
                JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It is a lightweight programming language commonly used by web developers.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-pink-400 h-2 rounded transition-all" style={{ width: '50%' }}></div>
              </div>
            </div>

            <div className="border border-pink-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">PHP</h3>
                <span className="text-pink-500 text-lg">65%</span>
              </div>
              <p className="text-gray-400 text-sm">
                PHP is a widely-used, open-source scripting language designed for web development and can be embedded into HTML
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-pink-400 h-2 rounded transition-all" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div className="border border-pink-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">React</h3>
                <span className="text-pink-500 text-lg">45%</span>
              </div>
              <p className="text-gray-400 text-sm">
                React is a JavaScript library for building user interfaces, especially single-page applications. It was developed by Facebook (now Meta) and is used to build fast, interactive, and scalable front-end apps.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-pink-400 h-2 rounded transition-all" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <div className="mb-15"></div>
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-12">
        <RevealOnScroll>
          <div className="text-center">
            <h2 className="text-3xl mb-4">Ready to take the next Member?</h2>
            <p className="text-xl mb-3">Let's collaborate and bring your vision to life!</p>
          </div>
        </RevealOnScroll>
      </div>

      {/*Profile Card ni Deejay */}
      <div className="min-h-screen w-full flex items-center justify-center bg-black px-4">
        <RevealOnScroll>
          <div className="bg-gradient-to-t from-blue-500 to-gray-900 rounded-xl p-15 max-w-5xl w-full flex flex-col md:flex-row items-start gap-10">
            <div className="flex-shrink-0 w-full md:w-1/3">
              <img
                src={deejayImg}
                alt="Profile"
                className="rounded-lg w-full h-89 object-cover transform hover:scale-105 transition-transform duration-300"
              />

            </div>
            <div className="flex-1 scroll-mt-60" id="deejay"> {/* Linking the page */}
              <h2 className="text-blue-300 text-sm font-bold uppercase tracking-wide mb-2">Who am I?</h2>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
                I'm <span className="text-blue-400 underline">Deejay</span>, UI/UX Designer / IT support specialist
              </h1>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                I am Student of Cavite State University - Imus Campus and currently studying Bachelor of Science in Information Technology.
              </p>
              <hr className="border-blue-400 mb-6" />
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
                <div><span className="font-bold text-white">Name:</span> Deejay Sarinas</div>
                <div><span className="font-bold text-white">Age:</span> 22 Years</div>
                <div><span className="font-bold text-white">From:</span> Imus City, Cavite</div>
                <div>
                  <span className="font-bold text-white">Email:</span>
                  <a href="mailto:deejaysarinas22@mail.com" className="text-blue-400 hover:underline"> deejaysarinas22@gmail.com</a>
                </div>
              </div>
              <hr className="border-blue-400 mb-6" />
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-gray-400 text-lg">
                  <a href="https://www.instagram.com/deejay.sarinas_/" className="hover:text-white hover:scale-110 transition-transform"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="https://web.facebook.com/jaydee.sarinas" className="hover:text-white hover:scale-110 transition-transform"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="https://github.com/ImDeeeejay" className="hover:text-white hover:scale-110 transition-transform"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>


      <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-12 px-6 md:px-12">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-extrabold text-blue-400 tracking-widest">MY JOURNEY</h1>
          </div>

          <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-400/30 transition-shadow duration-300">
            <h3 className="text-4xl font-extrabold mb-6 border-b-2 border-blue-400 pb-2 uppercase tracking-wide">
              Skills
            </h3>

            <div className="mb-8">
              <div className="relative flex items-center justify-center mb-4">
                <div className="flex-grow border-t border-zinc-600"></div>
                <span className="px-4 text-2sm font-bold text-gray-300 tracking-wide bg-none z-10">Front-End Programming Languages</span>
                <div className="flex-grow border-t border-zinc-600"></div>
              </div>
              <h4 className="text-lg font-bold text-white">HTML</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">Standard markup language for Web pages.</p>
              <h4 className="text-lg font-bold text-white">CSS</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">Stylesheet language used for specifying the presentation and styling of a document written in a markup language such as HTML.</p>
              <h4 className="text-lg font-bold text-white">React</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">A library for web and native user interfaces.</p>
              <h4 className="text-lg font-bold text-white">JavaScript</h4>
              <p className="text-sm text-gray-300 leading-relaxed">A programming language and core technology of the World Wide Web, alongside HTML and CSS.</p>
            </div>

            <div className="mb-8">
              <div className="relative flex items-center justify-center mb-4">
                <div className="flex-grow border-t border-zinc-600"></div>
                <span className="px-4 text-2sm font-bold text-gray-300 tracking-wide bg-none z-10">Back-End programming languages</span>
                <div className="flex-grow border-t border-zinc-600"></div>
              </div>
              <h4 className="text-lg font-bold text-white">PHP</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">A general-purpose scripting language geared towards web development.</p>
              <h4 className="text-lg font-bold text-white">Java</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">A high-level, general-purpose memory-safe, object-oriented programming language.</p>
            </div>

            <div className="mb-8">
              <div className="relative flex items-center justify-center mb-4">
                <div className="flex-grow border-t border-zinc-600"></div>
                <span className="px-4 text-2sm font-bold text-gray-300 tracking-wide bg-none z-10">Databases</span>
                <div className="flex-grow border-t border-zinc-600"></div>
              </div>
              <h4 className="text-lg font-bold text-white">MySQL</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">An open-source relational database management system.</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <section className="bg-black text-white py-12 px-6">
        <RevealOnScroll>
          <h1 className="text-2xl md:text-3xl text-blue-400 font-bold text-center tracking-widest mb-4">SERVICES</h1>
          <h2 className="text-center text-3xl mb-8 text-white">What I do for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-blue-400 p-6 rounded-lg text-center transition-transform hover:scale-105 hover:shadow-lg duration-300"
              >
                <div className="text-pink-500 text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="bg-black text-white py-12 px-6">
        <RevealOnScroll>
          <h1 className="text-2xl md:text-3xl text-blue-400 font-bold text-center mb-4">MY TALENT</h1>
          <h2 className="text-center text-3xl mb-8 text-white">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="border border-blue-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">PHP</h3>
                <span className="text-blue-400 text-lg">60%</span>
              </div>
              <p className="text-gray-400 text-sm">
                PHP is a widely-used, open-source scripting language designed for web development and can be embedded into HTML.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-blue-400 h-2 rounded transition-all" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div className="border border-blue-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">JavaScript</h3>
                <span className="text-blue-400 text-lg">50%</span>
              </div>
              <p className="text-gray-400 text-sm">
                JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It is a lightweight programming language commonly used by web developers.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-blue-400 h-2 rounded transition-all" style={{ width: '50%' }}></div>
              </div>
            </div>

            <div className="border border-blue-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Python</h3>
                <span className="text-blue-400 text-lg">75%</span>
              </div>
              <p className="text-gray-400 text-sm">
                Python is a versatile and powerful programming language that is widely used for various applications, including web development, data analysis, artificial intelligence, and more.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-blue-400 h-2 rounded transition-all" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="border border-blue-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">React</h3>
                <span className="text-blue-500 text-lg">70%</span>
              </div>
              <p className="text-gray-400 text-sm">
                React is a JavaScript library for building user interfaces, especially single-page applications. It was developed by Facebook (now Meta) and is used to build fast, interactive, and scalable front-end apps.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-blue-400 h-2 rounded transition-all" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="border border-blue-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Java</h3>
                <span className="text-blue-500 text-lg">20%</span>
              </div>
              <p className="text-gray-400 text-sm">
                Java is a versatile and widely-used programming language that powers a variety of applications across different domains..
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-blue-400 h-2 rounded transition-all" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <div className="mb-15"></div>
      <div className="bg-gradient-to-r from-blue-500 to-red-500 text-white py-12">
        <RevealOnScroll>
          <div className="text-center">
            <h2 className="text-3xl mb-4">Ready to take the next Member?</h2>
            <p className="text-xl mb-3">Let's collaborate and bring your vision to life!</p>
          </div>
        </RevealOnScroll>
      </div>

      {/*Profile Card - Gwayne*/}
      <div className="min-h-screen w-full flex items-center justify-center bg-black px-4">
        <RevealOnScroll>
          <div className="bg-gradient-to-t from-red-500 to-gray-900 rounded-xl p-15 max-w-5xl w-full flex flex-col md:flex-row items-start gap-10">
            <div className="flex-shrink-0 w-full md:w-1/3">
              <img
                src={gwayneImg}
                alt="Profile"
                className="rounded-lg w-full h-89 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-1 scroll-mt-60" id="gwayne"> {/* linking the teams */}
              <h2 className="text-red-300 text-sm font-bold uppercase tracking-wide mb-2">Who am I?</h2>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
                I'm <span className="text-red-500 underline">Gwayne Adrian</span>, a visual UI/UX Designer and Web Developer
              </h1>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                I am Student of Cavite State University - Imus Campus and currently studying Bachelor of Science in Information Technology.
              </p>
              <hr className="border-red-400 mb-6" />
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
                <div><span className="font-bold text-white">Name:</span> Gwayne Adrian Santos</div>
                <div><span className="font-bold text-white">Age:</span> 21 Years</div>
                <div><span className="font-bold text-white">From:</span> Imus City, Cavite</div>
                <div>
                  <span className="font-bold text-white">Email:</span>
                  <a href="wertpiss@gmail.com" className="text-blue-400 hover:underline"> wertpiss@gmail.com</a>
                </div>
              </div>
              <hr className="border-red-400 mb-6" />
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-gray-400 text-lg">
                  <a href="https://www.instagram.com/eydriyannn_s/" className="hover:text-white hover:scale-110 transition-transform"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="https://web.facebook.com/gwayne.adrian" className="hover:text-white hover:scale-110 transition-transform"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="https://github.com/yourusername" className="hover:text-white hover:scale-110 transition-transform"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-12 px-6 md:px-12">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-extrabold text-red-400 tracking-widest">MY JOURNEY</h1>
          </div>

          <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg hover:shadow-red-400/30 transition-shadow duration-300">
            <h3 className="text-4xl font-extrabold mb-6 border-b-2 border-red-500 pb-2 uppercase tracking-wide">
              Skills
            </h3>

            <div className="mb-8">
              <div className="relative flex items-center justify-center mb-4">
                <div className="flex-grow border-t border-zinc-600"></div>
                <span className="px-4 text-2sm font-bold text-gray-300 tracking-wide bg-none z-10">Front-End Programming Languages</span>
                <div className="flex-grow border-t border-zinc-600"></div>
              </div>
              <h4 className="text-lg font-bold text-white">HTML</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">Standard markup language for Web pages.</p>
              <h4 className="text-lg font-bold text-white">CSS</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">Stylesheet language used for specifying the presentation and styling of a document written in a markup language such as HTML.</p>
              <h4 className="text-lg font-bold text-white">React</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">A library for web and native user interfaces.</p>
              <h4 className="text-lg font-bold text-white">JavaScript</h4>
              <p className="text-sm text-gray-300 leading-relaxed">A programming language and core technology of the World Wide Web, alongside HTML and CSS.</p>
            </div>

            <div className="mb-8">
              <div className="relative flex items-center justify-center mb-4">
                <div className="flex-grow border-t border-zinc-600"></div>
                <span className="px-4 text-2sm font-bold text-gray-300 tracking-wide bg-none z-10">Back-End programming languages</span>
                <div className="flex-grow border-t border-zinc-600"></div>
              </div>
              <h4 className="text-lg font-bold text-white">PHP</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">A general-purpose scripting language geared towards web development.</p>
              <h4 className="text-lg font-bold text-white">Java</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">A high-level, general-purpose memory-safe, object-oriented programming language.</p>
            </div>

            <div className="mb-8">
              <div className="relative flex items-center justify-center mb-4">
                <div className="flex-grow border-t border-zinc-600"></div>
                <span className="px-4 text-2sm font-bold text-gray-300 tracking-wide bg-none z-10">Databases</span>
                <div className="flex-grow border-t border-zinc-600"></div>
              </div>
              <h4 className="text-lg font-bold text-white">MySQL</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">An open-source relational database management system.</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <section className="bg-black text-white py-12 px-6">
        <RevealOnScroll>
          <h1 className="text-2xl md:text-3xl text-red-500 font-bold text-center tracking-widest mb-4">SERVICES</h1>
          <h2 className="text-center text-3xl mb-8 text-white">What I do for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-red-500 p-6 rounded-lg text-center transition-transform hover:scale-105 hover:shadow-lg duration-300"
              >
                <div className="text-red-500 text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="bg-black text-white py-12 px-6">
        <RevealOnScroll>
          <h1 className="text-2xl md:text-3xl text-red-400 font-bold text-center mb-4">MY TALENT</h1>
          <h2 className="text-center text-3xl mb-8 text-white">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="border border-red-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Python</h3>
                <span className="text-red-500 text-lg">80%</span>
              </div>
              <p className="text-gray-400 text-sm">
              Python is a high-level, easy-to-read programming language used for web development, data analysis, automation, artificial intelligence, and more.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-red-400 h-2 rounded transition-all" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="border border-red-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">CSS</h3>
                <span className="text-red-500 text-lg">90%</span>
              </div>
              <p className="text-gray-400 text-sm">
              CSS (Cascading Style Sheets) is used to style and design the layout of web pages, controlling elements like colors, fonts, spacing, and responsiveness.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-red-400 h-2 rounded transition-all" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="border border-red-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">PHP</h3>
                <span className="text-red-500 text-lg">25%</span>
              </div>
              <p className="text-gray-400 text-sm">
                PHP is a widely-used, open-source scripting language designed for web development and can be embedded into HTML
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-red-400 h-2 rounded transition-all" style={{ width: '25%' }}></div>
              </div>
            </div>

            <div className="border border-red-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">React</h3>
                <span className="text-red-500 text-lg">35%</span>
              </div>
              <p className="text-gray-400 text-sm">
                React is a JavaScript library for building user interfaces, especially single-page applications. It was developed by Facebook (now Meta) and is used to build fast, interactive, and scalable front-end apps.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-red-400 h-2 rounded transition-all" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <div className="mb-15"></div>
      <div className="bg-gradient-to-r from-red-500 to-green-500 text-white py-12">
        <RevealOnScroll>
          <div className="text-center">
            <h2 className="text-3xl mb-4">Ready to take the next Member?</h2>
            <p className="text-xl mb-3">Let's collaborate and bring your vision to life!</p>
          </div>
        </RevealOnScroll>
      </div>

      {/*Profile Card - Ron */}
      <div className="min-h-screen w-full flex items-center justify-center bg-black px-4">
        <RevealOnScroll>
          <div className="bg-gradient-to-t from-green-500 to-gray-900 rounded-xl p-15 max-w-5xl w-full flex flex-col md:flex-row items-start gap-10">
            <div className="flex-shrink-0 w-full md:w-1/3">
              <img
                src={ronImg}
                alt="Profile"
                className="rounded-lg w-full h-89 object-cover transform hover:scale-105 transition-transform duration-300"
              />

            </div>
            <div className="flex-1 scroll-mt-60" id="ron"> {/* Linking the page */}
              <h2 className="text-green-300 text-sm font-bold uppercase tracking-wide mb-2">Who am I?</h2>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
                I'm <span className="text-green-400 underline">Ron Mar Kyle</span>, UI/UX Designer / IT support specialist
              </h1>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                I am Student of Cavite State University - Imus Campus and currently studying Bachelor of Science in Information Technology.
              </p>
              <hr className="border-green-400 mb-6" />
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
                <div><span className="font-bold text-white">Name:</span> Ron Mar Kyle Guerrero</div>
                <div><span className="font-bold text-white">Age:</span> 25 Years</div>
                <div><span className="font-bold text-white">From:</span> Imus City, Cavite</div>
                <div>
                  <span className="font-bold text-white">Email:</span>
                  <a href="mailto:ronmarkyle@mail.com" className="text-blue-400 hover:underline"> ronmarkyle@gmail.com</a>
                </div>
              </div>
              <hr className="border-green-400 mb-6" />
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-gray-400 text-lg">
                  <a href="https://www.instagram.com/ronnieee_kyle/" className="hover:text-white hover:scale-110 transition-transform"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="https://web.facebook.com/akongapalasi.kyle" className="hover:text-white hover:scale-110 transition-transform"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="https://github.com/yourusername" className="hover:text-white hover:scale-110 transition-transform"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-12 px-6 md:px-12">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-extrabold text-green-400 tracking-widest">MY JOURNEY</h1>
          </div>

          <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg hover:shadow-green-400/30 transition-shadow duration-300">
            <h3 className="text-4xl font-extrabold mb-6 border-b-2 border-green-400 pb-2 uppercase tracking-wide">
              Skills
            </h3>

            <div className="mb-8">
              <div className="relative flex items-center justify-center mb-4">
                <div className="flex-grow border-t border-zinc-600"></div>
                <span className="px-4 text-2sm font-bold text-gray-300 tracking-wide bg-none z-10">Front-End Programming Languages</span>
                <div className="flex-grow border-t border-zinc-600"></div>
              </div>
              <h4 className="text-lg font-bold text-white">HTML</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">Standard markup language for Web pages.</p>
              <h4 className="text-lg font-bold text-white">CSS</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">Stylesheet language used for specifying the presentation and styling of a document written in a markup language such as HTML.</p>
              <h4 className="text-lg font-bold text-white">React</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">A library for web and native user interfaces.</p>
              <h4 className="text-lg font-bold text-white">JavaScript</h4>
              <p className="text-sm text-gray-300 leading-relaxed">A programming language and core technology of the World Wide Web, alongside HTML and CSS.</p>
            </div>

            <div className="mb-8">
              <div className="relative flex items-center justify-center mb-4">
                <div className="flex-grow border-t border-zinc-600"></div>
                <span className="px-4 text-2sm font-bold text-gray-300 tracking-wide bg-none z-10">Back-End programming languages</span>
                <div className="flex-grow border-t border-zinc-600"></div>
              </div>
              <h4 className="text-lg font-bold text-white">PHP</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">A general-purpose scripting language geared towards web development.</p>
              <h4 className="text-lg font-bold text-white">Java</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">A high-level, general-purpose memory-safe, object-oriented programming language.</p>
            </div>

            <div className="mb-8">
              <div className="relative flex items-center justify-center mb-4">
                <div className="flex-grow border-t border-zinc-600"></div>
                <span className="px-4 text-2sm font-bold text-gray-300 tracking-wide bg-none z-10">Databases</span>
                <div className="flex-grow border-t border-zinc-600"></div>
              </div>
              <h4 className="text-lg font-bold text-white">MySQL</h4>
              <p className="text-sm mb-5 text-gray-300 leading-relaxed">An open-source relational database management system.</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <section className="bg-black text-white py-12 px-6">
        <RevealOnScroll>
          <h1 className="text-2xl md:text-3xl text-green-400 font-bold text-center tracking-widest mb-4">SERVICES</h1>
          <h2 className="text-center text-3xl mb-8 text-white">What I do for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-green-400 p-6 rounded-lg text-center transition-transform hover:scale-105 hover:shadow-lg duration-300"
              >
                <div className="text-green-500 text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="bg-black text-white py-12 px-6">
        <RevealOnScroll>
          <h1 className="text-2xl md:text-3xl text-green-400 font-bold text-center mb-4">MY TALENT</h1>
          <h2 className="text-center text-3xl mb-8 text-white">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="border border-green-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">PHP</h3>
                <span className="text-green-400 text-lg">50%</span>
              </div>
              <p className="text-gray-400 text-sm">
                PHP is a widely-used, open-source scripting language designed for web development and can be embedded into HTML.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-green-400 h-2 rounded transition-all" style={{ width: '50%' }}></div>
              </div>
            </div>

            <div className="border border-green-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">C++</h3>
                <span className="text-green-400 text-lg">50%</span>
              </div>
              <p className="text-gray-400 text-sm">
              C++ is a powerful programming language used for building fast and efficient software, including games, system software, and applications.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-green-400 h-2 rounded transition-all" style={{ width: '50%' }}></div>
              </div>
            </div>

            <div className="border border-green-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Python</h3>
                <span className="text-green-400 text-lg">85%</span>
              </div>
              <p className="text-gray-400 text-sm">
                Python is a versatile and powerful programming language that is widely used for various applications, including web development, data analysis, artificial intelligence, and more.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-green-400 h-2 rounded transition-all" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="border border-green-400 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">React</h3>
                <span className="text-green-500 text-lg">70%</span>
              </div>
              <p className="text-gray-400 text-sm">
                React is a JavaScript library for building user interfaces, especially single-page applications. It was developed by Facebook (now Meta) and is used to build fast, interactive, and scalable front-end apps.
              </p>
              <div className="relative w-full bg-gray-700 h-2 mt-4 rounded">
                <div className="absolute bg-green-400 h-2 rounded transition-all" style={{ width: '70%' }}></div>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </section>

      <div className="mb-15"></div>
      {/* Section 5: CTA */}
      <div className="bg-gradient-to-r from-green-500 to-violet-500 text-white py-12">
        <RevealOnScroll>
          <div className="text-center">
           
          </div>
        </RevealOnScroll>
      </div>



    </div>
  );
};
