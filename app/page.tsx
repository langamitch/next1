import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <Hero />
      </main>
    </>
  );
}
