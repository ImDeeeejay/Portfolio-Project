import { RevealOnScroll } from "../RevealOnScroll";

export const Team = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">
            Meet the <span className="text-white-500">Team</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            A passionate group of builders and problem solvers.
          </p>
        </div>
  
      </RevealOnScroll>
    </div>
    
  );
};
