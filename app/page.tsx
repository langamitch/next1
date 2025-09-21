import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Cards from "./components/cards/cards";
import Detail from "./components/detail/detail";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-0">
        <Hero />
        <Cards />
        <Detail />
      </main>
    </>
  );
}
