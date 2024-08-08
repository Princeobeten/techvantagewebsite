const Hero = () => {
  return (
    <div className="bg-gray-100 pt-5">
      {/* <marquee behavior="" direction="left">
        Join us on the 3rd of July, 2024 for TechVantage UNICAL Conference - Register by Clicking 
        <a href="https://chat.whatsapp.com/KC61IAnjgYN6TZJkNLbIFL"><b> here </b></a> 
         ------ Techvantage UNICROSS Bootcamp Registration is ongoing Register by clicking  
        <a href=""><b> here</b></a>
      </marquee> */}
      <div className="container mx-auto">
        <div
          className="flex min-h-[480px] sm:rounded-md 2xl:rounded-none md:rounded-xlxl:rounded-none flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 items-start justify-end px-4 pb-10 sm:px-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/2052.webp")',
          }}
        >
          <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em] text-center">
            Empowering the Next Generation of Tech Leaders
          </h1>
          <p className='font-medium text-white text-center lg:text-left'>
            Every student have the potential to shape the future of technology.
          </p>
        </div>
        {/* <marquee behavior="" direction="right">
          Join us on the 3rd of July, 2024 for TechVantage UNICAL Conference - Register by Clicking 
          <a href="https://chat.whatsapp.com/KC61IAnjgYN6TZJkNLbIFL"><b> here </b></a> 
           ------ Techvantage UNICROSS Bootcamp Registration is ongoing Register by clicking 
          <a href=""><b> here</b></a>
        </marquee> */}
      </div>
      <div className="container mx-auto mt-10 px-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-black text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
              What you can do at TechVantage
            </h1>
            <p className="text-[#0d141c] text-base font-normal leading-normal max-w-[720px]">
              Whether you're new to tech or a seasoned pro, we've got you covered with learning opportunities for every skill level and career stage.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: `url("w-conferences.jpg")`,
                }}
              ></div>
              <div>
                <p className="text-[#0d141c] text-base font-medium leading-normal">Conferences</p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Discover the latest in tech at our global conferences
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: `url("w-workshop.jpg")`,
                }}
              ></div>
              <div>
                <p className="text-[#0d141c] text-base font-medium leading-normal">Workshops</p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Dive deep into specific topics with hands-on workshops
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: `url("w-bootcamp.jpg")`,
                }}
              ></div>
              <div>
                <p className="text-[#0d141c] text-base font-medium leading-normal">Bootcamps</p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Get intensive, full-time training in our bootcamps
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: `url("w-meetup.jpg")`,
                }}
              ></div>
              <div>
                <p className="text-[#0d141c] text-base font-medium leading-normal">Meetups</p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Connect with other learners and industry pros at our local meetups
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
