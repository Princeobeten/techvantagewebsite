import { FaBriefcase, FaUsers, FaGlobe, FaHandshake, FaCode } from 'react-icons/fa'; // Import necessary icons

const WhyBootcamp = () => (
  <div id="why-bootcamp" className="bg-white py-10">
    <div className="container mx-auto px-4">
      <h1 className="text-blue-600 text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
        Why Our Bootcamp
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
        <div className="flex flex-col items-start gap-4 p-5 border border-[#e7edf4] rounded-xl shadow-sm hover:border-[1.9px] hover:border-l-blue-600 hover:border-t-blue-600">
          <FaBriefcase size={32} color="#0b6fda" />
          <h2 className="text-black text-xl font-black leading-tight tracking-[-0.033em]">
            Real-world experience
          </h2>
          <p className="text-[#0d141c] text-base font-normal leading-normal">
            Work on real projects, with real companies and gain the experience that sets you apart in the job market.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 p-5 border border-[#e7edf4] rounded-xl shadow-sm hover:border-[1.9px] hover:border-l-blue-600 hover:border-t-blue-600">
          <FaUsers size={32} color="#0b6fda" />
          <h2 className="text-black text-xl font-black leading-tight tracking-[-0.033em]">
            Community-driven learning
          </h2>
          <p className="text-[#0d141c] text-base font-normal leading-normal">
            Learn alongside a diverse group of students and instructors who are dedicated to your success.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 p-5 border border-[#e7edf4] rounded-xl shadow-sm hover:border-[1.9px] hover:border-l-blue-600 hover:border-t-blue-600">
          <FaGlobe size={32} color="#0b6fda" />
          <h2 className="text-black text-xl font-black leading-tight tracking-[-0.033em]">
            Global network
          </h2>
          <p className="text-[#0d141c] text-base font-normal leading-normal">
            Join a community of thousands of alumni, mentors, and industry professionals around the world.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 p-5 border border-[#e7edf4] rounded-xl shadow-sm hover:border-[1.9px] hover:border-l-blue-600 hover:border-t-blue-600">
          <FaHandshake size={32} color="#0b6fda" />
          <h2 className="text-black text-xl font-black leading-tight tracking-[-0.033em]">
            Career services
          </h2>
          <p className="text-[#0d141c] text-base font-normal leading-normal">
            Receive personalized career support from our team of professional development experts.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 p-5 border border-[#e7edf4] rounded-xl shadow-sm hover:border-[1.9px] hover:border-l-blue-600 hover:border-t-blue-600">
          <FaCode size={32} color="#0b6fda" />
          <h2 className="text-black text-xl font-black leading-tight tracking-[-0.033em]">
            Industry-relevant curriculum
          </h2>
          <p className="text-[#0d141c] text-base font-normal leading-normal">
            Learn the most in-demand skills from top professionals and build a portfolio that showcases your ability to solve real-world problems.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default WhyBootcamp;