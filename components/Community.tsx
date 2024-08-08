'use client'

import Image from 'next/image';

const communityItems = [
  {
    desktopImage: '/c-unicross-desktop.webp',
    mobileImage: '/c-unicross-mobile.jpg',
    title: 'TechVantage UNICROSS Chapter',
    description: 'Join our UNICROSS community of tech enthusiasts who are pushing the boundaries of innovation.',
    link: 'https://chat.whatsapp.com/CxskpI8nhD1Bp68lnvYSVe',
  },
  {
    desktopImage: '/DSC_0119.jpg',
    mobileImage: '/DSC_0119.jpg',
    title: 'TechVantage UNICAL Chapter',
    description: 'Join our UNICAL community of tech enthusiasts who are pushing the boundaries of innovation.',
    link: 'https://chat.whatsapp.com/KC61IAnjgYN6TZJkNLbIFL',
  },
];

const Community = () => (
  <div id="community" className="bg-white py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-blue-600 text-5xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
            Our Community
          </h1>
          <p className="text-[#0d141c] text-base font-normal leading-normal max-w-[720px]">
            Become a part of our vibrant community. Connect with peers, participate in events, and engage with industry professionals.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {communityItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 p-5 border border-[#e7edf4] rounded-xl shadow-sm hover:border-blue-600">
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <div className="block md:hidden">
                  <Image
                    src={item.mobileImage}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
                <div className="hidden md:block">
                  <Image
                    src={item.desktopImage}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 w-full md:w-1/2">
                <h2 className="text-black text-2xl font-black leading-tight tracking-[-0.033em]">
                  {item.title}
                </h2>
                <p className="text-[#0d141c] text-base font-normal leading-normal">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700"
                >
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Community;