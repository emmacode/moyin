import { Header } from "@/components/Header/Header";
import { Sections } from "./sections/sections";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Sections />
      </div>
    </>
  );
}
