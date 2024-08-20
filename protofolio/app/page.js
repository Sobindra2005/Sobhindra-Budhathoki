import Header from "@/components/header"
import '@fortawesome/fontawesome-svg-core/styles.css';
import Mainintro from "@/components/mainIntro";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-5 ">
      <header>
        <Header />
      </header>

      <section className="mt-[7rem]   w-[97%] m-auto ">
        <Mainintro />
      </section>
      <footer>

      </footer>
    </div>
  )
}
