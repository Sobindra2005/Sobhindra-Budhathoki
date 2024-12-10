import Header from '../components/header';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Mainintro from "../components/mainIntro";
import Education from "../components/education";
import Skill from "../components/skill";
import RecentWorks from "../components/recentWorks";
import Blogs from "../components/Blogs";
import Footer from "../components/footer";


export default function Home() {
  return (
    <>
      <header className="sticky top-0.5 mt-3 ">
        <Header />
      </header>
      
      <div id="home" className="flex flex-col min-h-screen w-full p-5">
        <section className="md:mt-[7rem] lg:mt-[3rem] w-[97%] mx-auto">
          <Mainintro />
        </section>
      </div>

      {/* Education Section */}
      <section id="about" className="w-full  bg-[#021b22] pt-10 p-3">
        <Education />
        <Skill />
      </section>

      {/* Recent Works Section */}
      <section id="recentWorks" className="bg-blue w-full  pb-[9rem]">
        <RecentWorks />
      </section>

      {/* Blogs Section */}
      <section id="blogs" className=" w-full bg-[#021b22] p-3">
        <Blogs />
      </section>

      {/* Footer Section */}
      <footer id="footer" className=" w-full bg-black">
        <Footer />
      </footer>
    </>
  );
}
