import Image from 'next/image';

const About = () => {
  return (
    <div id="about-us" className="bg-gray-100">
      <div className="container mx-auto pt-10 px-4 pb-5">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-blue-600 text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
              About TechVantage
            </h1>
            <p className="text-[#0d141c] text-base font-normal leading-normal max-w-[720px]">
              TechVantage is a conference designed to inspire students to start their journey in tech. Our platform brings together professionals and tech enthusiast to share their story.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <Image
                src="/2151266607.webp"
                alt="Our Mission"
                width={600}
                height={100}
                className="rounded-xl"
              />
              <h2 className="text-black text-3xl font-black leading-tight tracking-[-0.033em]">
                Our Mission
              </h2>
              <p className="text-[#0d141c] text-base font-normal leading-normal text-justify">
                Empowering students to embrace technology and innovation, bridging the gap between education and industry.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                src="/8376.webp"
                alt="Our Vision"
                width={600}
                height={100}
                className="rounded-xl"
              />
              <h2 className="text-black text-3xl font-black leading-tight tracking-[-0.033em]">
                Our Vision
              </h2>
              <p className="text-[#0d141c] text-base font-normal leading-normal text-justify">
                To create a vibrant community where professionals, enthusiasts, and students come together to share knowledge, inspire innovation, and drive technological advancements.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <h2 className="text-black text-3xl font-black leading-tight tracking-[-0.033em]">
              Our Objectives
            </h2>
            <div className="relative flex flex-col lg:flex-row lg:items-start gap-10 pl-8 lg:pl-0 mx-3">
              <div className="relative flex items-start gap-4 lg:gap-10 lg:items-center lg:pr-8">
                <div className="absolute left-[-11px] top-1 lg:top-auto lg:left-auto transform lg:translate-x-[-50%] h-6 w-6 rounded-full bg-[#0b6fda] border-4 border-white"></div>
                <div className='px-5'>
                  <h3 className="text-black text-xl font-bold leading-tight tracking-[-0.033em]">Inspire Tech Curiosity</h3>
                  <p className="text-[#0d141c] text-base font-normal leading-normal">
                    Foster interest in technology among students, encouraging them to explore its possibilities and applications.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-4 lg:gap-10 lg:items-center lg:pr-8">
                <div className="absolute left-[-11px] top-1 lg:top-auto lg:left-auto transform lg:translate-x-[-50%] h-6 w-6 rounded-full bg-[#0b6fda] border-4 border-white"></div>
                <div className='px-5'>
                  <h3 className="text-black text-xl font-bold leading-tight tracking-[-0.033em]">Bridge the Industry Gap</h3>
                  <p className="text-[#0d141c] text-base font-normal leading-normal">
                    Connect students with professionals, providing insights into industry trends, challenges, and best practices.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-4 lg:gap-10 lg:items-center lg:pr-8">
                <div className="absolute left-[-11px] top-1 lg:top-auto lg:left-auto transform lg:translate-x-[-50%] h-6 w-6 rounded-full bg-[#0b6fda] border-4 border-white"></div>
                <div className='px-5'>
                  <h3 className="text-black text-xl font-bold leading-tight tracking-[-0.033em]">Develop Skillsets</h3>
                  <p className="text-[#0d141c] text-base font-normal leading-normal">
                    Offer training, workshops, and mentorship programs to enhance students' technical skills and competencies.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-4 lg:gap-10 lg:items-center lg:pr-8">
                <div className="absolute left-[-11px] top-1 lg:top-auto lg:left-auto transform lg:translate-x-[-50%] h-6 w-6 rounded-full bg-[#0b6fda] border-4 border-white"></div>
                <div className='px-5'>
                  <h3 className="text-black text-xl font-bold leading-tight tracking-[-0.033em]">Foster Community Building</h3>
                  <p className="text-[#0d141c] text-base font-normal leading-normal">
                    Create a supportive network of like-minded individuals, promoting collaboration, innovation, and collective growth.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-4 lg:gap-10 lg:items-center lg:pr-8">
                <div className="absolute left-[-11px] top-1 lg:top-auto lg:left-auto transform lg:translate-x-[-50%] h-6 w-6 rounded-full bg-[#0b6fda] border-4 border-white"></div>
                <div className='px-5'>
                  <h3 className="text-black text-xl font-bold leading-tight tracking-[-0.033em]">Promote Innovation</h3>
                  <p className="text-[#0d141c] text-base font-normal leading-normal">
                    Encourage students to develop innovative solutions, providing resources and support to turn their ideas into reality.
                  </p>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;