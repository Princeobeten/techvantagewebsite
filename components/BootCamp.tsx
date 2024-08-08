'use client'

import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import WhyBootcamp from './WhyBootcamp';

interface Bootcamp {
  image: string | StaticImport;
  title: string;
  duration: string;
  description: string;
}

interface BootcampProps {
  bootcamps: Bootcamp[];
}

const Bootcamp = ({ bootcamps } : BootcampProps) => (
  <div id="bootcamp" className="bg-white pb-5">
    <WhyBootcamp />
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-black text-2xl font-black leading-tight tracking-[-0.033em] sm:text-4xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
            Bootcamp Programs
          </h1>
          <p className="text-[#0d141c] text-base font-normal leading-normal max-w-[720px]">
            Our bootcamps offer a range of programs to help you advance your career in technology. Choose a bootcamp that suits your interests and schedule.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {bootcamps.map((bootcamp: { image: string | StaticImport; title: string; duration: string; description: string }, index: number) => (
            <div key={index} className="flex flex-col gap-4 p-5 border border-[#e7edf4] rounded-xl shadow-sm hover:shadow-md">
              <div className="relative w-[310px] h-[200px]">
                <Image
                  src={bootcamp.image}
                  alt={bootcamp.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <h2 className="text-black text-2xl font-black leading-tight tracking-[-0.033em]">
                {bootcamp.title}
              </h2>
              <p className="text-[#0d141c] text-base font-normal leading-normal">
                {bootcamp.duration}
              </p>
              <p className="text-[#0d141c] text-sm font-normal leading-normal">
                {bootcamp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Bootcamp;