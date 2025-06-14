
import React from 'react';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import DetailItem from './components/DetailItem';
import Pill from './components/Pill';
import { BriefcaseIcon, UserCircleIcon, UsersIcon, AcademicCapIcon, SparklesIcon, ChatBubbleLeftRightIcon, CalendarDaysIcon, DevicePhoneMobileIcon, MapPinIcon, HeartIcon, RssIcon, CodeBracketIcon, PaintBrushIcon, CogIcon, FilmIcon, MusicalNoteIcon, DumbbellIcon } from './components/icons';

interface ProfileData {
  fullName: string;
  nickname: string;
  tagline: string;
  dob: string;
  height: string;
  religion: string;
  motherTongue: string;
  nativePlace: string;
  fatherName: string;
  motherName: string;
  siblings: string[];
  familyValues: string;
  education: string[]; // Changed to array
  profession: {
    title: string;
    intro: string;
    services: string[];
    proficientIn: string[];
    workStyle: string;
    philosophy: string;
  };
  skillsAndInterests: string[];
  languages: { name: string; proficiency: string }[];
  hobbiesAndLifestyle: string[]; // Added hobbies
  profileImageUrl: string;
}

const profileData: ProfileData = {
  fullName: "Dayanand Kumar",
  nickname: "Daya",
  tagline: "I believe in building things with heart, code, and clarity.",
  dob: "April 1, 1999",
  height: "5'8\"",
  religion: "Hindu",
  motherTongue: "Hindi",
  nativePlace: "Village Daulatpur, District Jamui",
  fatherName: "Gyandev Pandit",
  motherName: "Sulekha Devi",
  siblings: ["One elder sister (married)", "One younger brother"],
  familyValues: "We are a grounded and progressive family rooted in strong values and simplicity.",
  education: [
    "Matriculation",
    "Intermediate with Science",
    "Graduation with English Honours"
  ],
  profession: {
    title: "Creative & Tech-driven Agency Founder",
    intro: "I run my own agency, working with international clients to help them grow through:",
    services: ["Web Development", "UI/UX Design", "AI-based Automations"],
    proficientIn: ["All major AI tools", "Modern web development stacks"],
    workStyle: "My work is fully remote, giving me both freedom and global exposure.",
    philosophy: "I blend innovation with function.",
  },
  skillsAndInterests: [
    "AI & Automation",
    "Website Design & Development",
    "Exploring emerging tech",
    "Building clean, functional digital products",
    "Storyboarding",
    "Visual Artist",
    "Motion Designer"
  ],
  languages: [
    { name: "Hindi", proficiency: "Native" },
    { name: "English", proficiency: "Fluent" },
  ],
  hobbiesAndLifestyle: [
    "Watching Movies",
    "Listening to Songs",
    "Working out when not coding"
  ],
  profileImageUrl: "https://res.cloudinary.com/dl64mavdp/image/upload/v1749928892/WhatsApp_Image_2025-06-15_at_00.40.54_45b6143b_k2tiy3.jpg", 
};

const calculateAge = (dobString: string): number => {
  const dob = new Date(dobString);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
};

const App: React.FC = () => {
  const age = calculateAge(profileData.dob);

  return (
    <div className="min-h-screen text-gray-300 antialiased">
      <HeroSection
        name={`${profileData.fullName} (${profileData.nickname})`}
        tagline={profileData.tagline}
        imageUrl={profileData.profileImageUrl}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <Section title="About Me" icon={<UserCircleIcon className="w-8 h-8 text-cyan-400" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg">
            <DetailItem icon={<CalendarDaysIcon className="w-5 h-5 text-cyan-400" />} label="Age" value={`${age} Years (Born ${new Date(profileData.dob).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric'})})`} />
            <DetailItem icon={<DevicePhoneMobileIcon className="w-5 h-5 text-cyan-400" />} label="Height" value={profileData.height} />
            <DetailItem icon={<HeartIcon className="w-5 h-5 text-cyan-400" />} label="Religion" value={profileData.religion} />
            <DetailItem icon={<ChatBubbleLeftRightIcon className="w-5 h-5 text-cyan-400" />} label="Mother Tongue" value={profileData.motherTongue} />
            <DetailItem icon={<MapPinIcon className="w-5 h-5 text-cyan-400" />} label="Native Place" value={profileData.nativePlace} fullWidth />
          </div>
        </Section>

        <Section title="Family Background" icon={<UsersIcon className="w-8 h-8 text-cyan-400" />}>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg">
            <DetailItem label="Father's Name" value={profileData.fatherName} />
            <DetailItem label="Mother's Name" value={profileData.motherName} />
          </div>
          <div className="mt-4 text-lg">
            <strong className="font-semibold text-cyan-300">Siblings:</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              {profileData.siblings.map((sibling, index) => (
                <li key={index}>{sibling}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-lg italic">"{profileData.familyValues}"</p>
        </Section>

        <Section title="Education" icon={<AcademicCapIcon className="w-8 h-8 text-cyan-400" />}>
          <ul className="space-y-2 text-lg">
            {profileData.education.map((edu, index) => (
              <li key={index} className="flex items-center">
                <AcademicCapIcon className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                <span>{edu}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Professional Journey" icon={<BriefcaseIcon className="w-8 h-8 text-cyan-400" />}>
          <h3 className="text-2xl font-semibold text-cyan-300">{profileData.profession.title}</h3>
          <p className="mt-3 text-lg">{profileData.profession.intro}</p>
          <div className="mt-4">
            <strong className="font-semibold text-cyan-200">Key Services:</strong>
            <div className="flex flex-wrap gap-3 mt-2">
              {profileData.profession.services.map(service => <Pill key={service} text={service} icon={<RssIcon className="w-4 h-4 mr-2"/>} />)}
            </div>
          </div>
           <div className="mt-4">
            <strong className="font-semibold text-cyan-200">Proficient In:</strong>
            <div className="flex flex-wrap gap-3 mt-2">
              {profileData.profession.proficientIn.map(skill => <Pill key={skill} text={skill} icon={<CogIcon className="w-4 h-4 mr-2"/>}/>)}
            </div>
          </div>
          <p className="mt-4 text-lg italic">{profileData.profession.workStyle}</p>
          <p className="mt-2 text-lg font-medium text-cyan-400">My Philosophy: "{profileData.profession.philosophy}"</p>
        </Section>

        <Section title="Skills & Interests" icon={<SparklesIcon className="w-8 h-8 text-cyan-400" />}>
          <div className="flex flex-wrap gap-3">
            {profileData.skillsAndInterests.map((skill) => (
              <Pill key={skill} text={skill}
                icon={
                  skill.toLowerCase().includes("storyboarding") ? <FilmIcon className="w-4 h-4 mr-2"/> :
                  skill.toLowerCase().includes("ai") ? <CogIcon className="w-4 h-4 mr-2"/> :
                  skill.toLowerCase().includes("design") || skill.toLowerCase().includes("visual artist") || skill.toLowerCase().includes("motion designer") ? <PaintBrushIcon className="w-4 h-4 mr-2"/> :
                  skill.toLowerCase().includes("develop") ? <CodeBracketIcon className="w-4 h-4 mr-2"/> :
                  <SparklesIcon className="w-4 h-4 mr-2"/>
                }
              />
            ))}
          </div>
        </Section>

        <Section title="Hobbies & Lifestyle" icon={<HeartIcon className="w-8 h-8 text-cyan-400" />}>
          <div className="flex flex-wrap gap-3">
            {profileData.hobbiesAndLifestyle.map((hobby) => (
              <Pill key={hobby} text={hobby}
                icon={
                  hobby.toLowerCase().includes("movies") ? <FilmIcon className="w-4 h-4 mr-2"/> :
                  hobby.toLowerCase().includes("songs") || hobby.toLowerCase().includes("music") ? <MusicalNoteIcon className="w-4 h-4 mr-2"/> :
                  hobby.toLowerCase().includes("workout") || hobby.toLowerCase().includes("coding") ? <DumbbellIcon className="w-4 h-4 mr-2"/> :
                  <SparklesIcon className="w-4 h-4 mr-2"/>
                }
              />
            ))}
          </div>
        </Section>

        <Section title="Languages Known" icon={<ChatBubbleLeftRightIcon className="w-8 h-8 text-cyan-400" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
            {profileData.languages.map((lang) => (
              <DetailItem key={lang.name} label={lang.name} value={lang.proficiency} />
            ))}
          </div>
        </Section>
      </main>

      <footer className="text-center py-10 border-t border-slate-700">
        <p className="text-slate-400">&copy; {new Date().getFullYear()} Daya. All rights reserved.</p>
        <p className="text-sm text-slate-500 mt-1">Crafted with care for a new beginning.</p>
      </footer>
    </div>
  );
};

export default App;
