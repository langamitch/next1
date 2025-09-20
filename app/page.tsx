import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Cards from "./components/cards/cards";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-2">
        <Hero />
        <Cards />
      </main>
    </>
  );
}
