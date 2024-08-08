'use client'

import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Event {
  image: string | StaticImport;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  link: string;
  status: string;
}

interface EventProps {
  events: Event[];
}

const Event = ({ events }: EventProps) => (
  <div id="events" className="bg-white py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-blue-600 text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
            Upcoming Events
          </h1>
          <p className="text-[#0d141c] text-base font-normal leading-normal max-w-[720px]">
            Stay updated with our upcoming events and activities. Join us to learn, grow, and network with other tech enthusiasts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col gap-4 p-5 border border-[#e7edf4] rounded-xl shadow-sm hover:shadow-md">
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={300}
                className="rounded-xl"
              />
              <h2 className="text-black text-2xl font-black leading-tight tracking-[-0.033em]">
                {event.title}
              </h2>
              <p className="text-[#0d141c] text-base font-normal leading-normal text-left">
                {event.description}
              </p>
              <div className="text-[#0d141c] text-sm font-medium leading-normal">
                <span className="block">{event.date}</span>
                <span className="block">{event.time}</span>
                <span className="block">{event.location}</span>
              </div>
              <a
                href={event.status === 'completed' || event.status === 'comingSoon' ? undefined : event.link}
                className={`mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] ${event.status === 'completed' || event.status === 'comingSoon' ? 'bg-gray-400 text-gray-800' : 'bg-[#0b6fda] text-slate-50 hover:bg-blue-700'}`}
                onClick={event.status === 'completed' || event.status === 'comingSoon' ? (e) => e.preventDefault() : undefined}
              >
                {event.status === 'completed' ? 'Completed' : event.status === 'comingSoon' ? 'Coming Soon' : 'Learn More'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Event;