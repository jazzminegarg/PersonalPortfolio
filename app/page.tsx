import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import ToggleMode from "@/components/ToggleMode"
import Grid from "@/components/Grid";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center felx-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className='absolute top-0 right-0 m-4 z-20'><ToggleMode/></div>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{name:'Home',link:'/',icon:<FaHome/>}]}/>
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
