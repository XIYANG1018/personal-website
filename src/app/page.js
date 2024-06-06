import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/SideBar";
import Content from "./components/Content";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col bg-[#eef]  px-12 py-4">
      <Sidebar />
      <Content />
    </main>
  );
}
