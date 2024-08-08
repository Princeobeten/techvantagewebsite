import About from "@/components/About";
import Hero from "@/components/Hero";
import Event from "@/components/Event";
import Bootcamp from "@/components/BootCamp";
import Community from "@/components/Community";
import Footer from "@/components/Footer";


const bootcamps = [
  {
    image: '/cs.jpg',
    title: 'Cyber Security',
    duration: 'Part-time, 90 days',
    description: 'Learn to protect systems and networks from cyber threats and attacks.'
  },
  {
    image: '/ui ux.jpg',
    title: 'User Experience Design',
    duration: 'Part-time, 90 days',
    description: 'Design intuitive and engaging user experiences for digital products.'
  },
  {
    image: '/fewd.jpg',
    title: 'Frontend Web Development',
    duration: 'Part-time, 90 days',
    description: 'Build responsive and interactive websites using modern frontend technologies.'
  },
  {
    image: '/bewd.webp',
    title: 'Backend Web Development',
    duration: 'Part-time, 90 days',
    description: 'Develop robust backend systems and APIs to support web applications.'
  },
  {
    image: '/md.jpg',
    title: 'Mobile Development',
    duration: 'Part-time, 90 days',
    description: 'Create mobile applications for both Android and iOS platforms.'
  },
];

const events = [
  {
    image: '/unical.jpg',
    title: 'Techvantage UNICAL',
    description: "Join TechVantage for a day of learning, networking, and innovation at our Tech Conference and Workshop for Students! Hear from industry experts, participate in hands-on workshops, and connect with like-minded students and professionals. Topics include AI, data science, cybersecurity, and more. Don't miss out on this opportunity to enhance your skills and knowledge in the tech field.",
    date: 'July 3rd, 2024',
    time: '12:00 PM',
    location: 'Cross River Community Hall',
    link: 'https://forms.gle/Q9ARgJvjV7V8Ttyr8',
    status: 'completed'
  },
  {
    image: '/unicross.jpg',
    title: 'Techvantage UNICROSS',
    description: 'Empowering the next generation of tech leaders! Join TechVantage for a dynamic conference featuring industry experts, interactive sessions, and networking opportunities. Learn about the latest advancements in AI, data science, cybersecurity, and more. Connect with like-minded students and professionals, and get ready to shape the future of technology',
    date: 'June 6th, 2024',
    time: '9:00 AM',
    location: 'New Cafe Hall University of Cross River State, Calabar',
    link: '/events/networking-event',
    status: 'completed'
  },
];

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Event events={events} />
      <Bootcamp bootcamps={bootcamps} />
      <Community/>
    </div>
  );
}