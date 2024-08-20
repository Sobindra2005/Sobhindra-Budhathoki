import Header from "@/components/header"
import '@fortawesome/fontawesome-svg-core/styles.css';
import Mainintro from "@/components/mainIntro";
import Education from "@/components/education";
import Skill from "@/components/skill";
import RecentWorks from "@/components/recentWorks";

export default function Home() {
  return (
    <>
      <header className="sticky top-0.5 mt-3">
        <Header />
      </header>
      <div id="home" className="flex min-h-screen  flex-col p-5 ">
        <section className="  mt-[7rem] w-[97%] m-auto ">
          <Mainintro />
        </section>
      </div>

      {/* education  */}
      <section id="about" className="  bg-[#021b22] pt-10 p-3 ">
        <Education />
        <Skill />
      </section>


      <section id="recentWorks" className="bg-blue h-screen ">
        <RecentWorks />
      </section>
      <footer>
      </footer>
    </>
  )
}
