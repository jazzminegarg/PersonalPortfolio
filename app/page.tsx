import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import {navItems} from "@/data";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import ExperienceAndEducation from "@/components/ExperienceAndEducation";
import MyDSA from "@/components/MyDSA";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip felx-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        
        <Hero/>
        <MyDSA/>
        <Grid/>
        <RecentProjects/>
        <ExperienceAndEducation/>
        {/* <Clients/> */}
        <Footer/>
      </div>
    </main>
  );
}
