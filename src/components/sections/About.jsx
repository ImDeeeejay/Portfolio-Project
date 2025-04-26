import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <div className="bg-black text-center text-white">
      {/* Eto yung title */}
      <section className="h-screen flex flex-col items-center justify-center px-4">
        <RevealOnScroll>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
          About <span className="bg-gradient-to-r from-red-400 to-white text-transparent bg-clip-text">Us</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl">
          Learn more about who we are and what we do.
        </p>
        </RevealOnScroll>
      </section>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row gap-6 mb-16">
            <div className="flex-1 p-[2px] rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-red-500 hover:via-gray-500 hover:to-red-500">
              <div className="p-6 bg-black rounded-md h-full">
                <h3 className="text-3xl font-bold mb-4">Team Background & Purpose</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our team was born out of a shared passion for innovation and building things that matter.
                  We started as students in Cavite State University - Imus Campus, curious about how far we could push ideas beyond the classroom.
                </p>
                <p className="text-gray-400 mt-4">
                  Over time, our team evolved into a multidisciplinary force. We bring projects to life with purpose,
                  energy, and empathy.
                </p>
              </div>
            </div>
            <div className="flex-1 p-[2px] rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-red-500 hover:via-gray-500 hover:to-red-500">
              <div className="p-6 bg-black rounded-md h-full">
                <h3 className="text-3xl font-bold mb-4">Expertise & Focus Areas</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We thrive in the intersection of design and development. Our core strengths include:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-4 space-y-1 text-left">
                  <li>UI/UX Design with a focus on accessibility and interaction</li>
                  <li>Agile full-stack development and prototyping</li>
                  <li>Cloud-native solutions and scalable backend services</li>
                  <li>Custom-built tools for automation and data handling</li>
                  <li>Team-based workflows using Git, CI/CD, and version control</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-[2px] rounded-xl border-white/10 border shadow-xl mt-10">
            <div className="bg-black rounded-2xl p-6 text-center h-full text-gray-300 text-xl italic">
              “We’re more than classmates. We’re teammates, midnight brainstormers, and tomorrow’s creators.”
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};
