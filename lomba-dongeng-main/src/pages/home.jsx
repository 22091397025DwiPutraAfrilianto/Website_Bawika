import Navbar from "../components/navbar";
import chara from "../assets/chara.png";
import chara2 from "../assets/chara2.png";
import dongeng from "../assets/dongeng.png";
import pembelajaran from "../assets/pembelajaran.png";
import tembang_macapat from "../assets/tempbang_macapat.png";
import aksara from "../assets/aksara.png";
import tembang_macapat2 from "../assets/tembang_macapat2.png";
import tarian from "../assets/tarian.png";
import ayoSinau from "../assets/ayo_sinau.png";
import logo from "../assets/logo.png";

import HomePageCard from "../components/homePageCard";
import { Link } from "react-router-dom";
import KuisCard from "../components/kuisCard";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar />
      <section
        className="w-full h-s h-[calc(100vh-12rem)] overflow-hidden"
        id="hero"
      >
        <div className="container flex flex-row mx-auto">
          <div className="basis-1/2">
            <div className="mx-auto mt-24 w-fit">
              <div className="px-4 py-2 text-xl font-semibold rounded-lg bg-[#fee799] w-fit">
                <h3>🖐 Halo Semuanya</h3>
              </div>
              <div className="flex flex-col gap-3 text-6xl font-semibold">
                <p>Aku Bawika</p>
                <p>Belajar Bahasa Jawa,</p>
                <p>Menghidupkan</p>
                <p>Budaya</p>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <img className="w-full h-fit" src={chara} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#fee799]">
        <div className="container mx-auto my-16">
          <h3 className="text-4xl font-semibold">Lihat keseruannya dibawah!</h3>
          <div className="flex flex-col gap-16 mt-8">
            <HomePageCard
              name={"Dongeng Anak"}
              description={
                "Dongeng anak dengan berbagai kisah yang menarik, penuh pelajaran budaya Jawa yang asyik dan seru!"
              }
              src={dongeng}
              to={"#"}
            />
            <HomePageCard
              name={"Materi Pembelajaran"}
              description={
                "Belajar budaya dan bahasa Jawa, seru, penuh makna, dan melestarikan warisan leluhur."
              }
              src={pembelajaran}
              to={"#"}
            />
            <HomePageCard
              name={"Tembang Jawa"}
              description={
                "Belajar budaya dan bahasa Jawa, seru, penuh makna, dan melestarikan warisan leluhur."
              }
              src={tembang_macapat}
              to={"#"}
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="flex flex-row">
          <div className="flex flex-col gap-4 basis-1/2 mt-36">
            <h3 className="text-5xl font-semibold">Event Terbaru</h3>
            <div className="flex flex-col gap-3 text-2xl font-semibold text-neutral-500">
              <p>
                Join berbagai event seru dan lomba budaya serta bahasa Jawa!
                Jangan lewatkan kesempatan untuk mendalami kearifan lokal
                melalui rangkaian acara menarik, dari pentas seni, lomba aksara,
                hingga kompetisi cerita rakyat. Bersama-sama kita lestarikan
                budaya dan bahasa Jawa dengan semangat dan cinta. Yuk, ajak
                keluarga dan teman-teman untuk ikut serta dan bangkitkan jiwa
                Jawa dalam setiap langkah kita!
              </p>
            </div>
            <Link
              className="px-8 py-4 mt-8 text-2xl font-semibold text-neutral-600 border-4 border-gray-600 rounded-lg w-fit"
              to={"#"}
            >
              Lihat Selengkapnya
            </Link>
          </div>
          <div className="basis-1/2">
            <img className="w-full h-fit" src={chara2} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#fee799]">
        <div className="container mx-auto my-16">
          <div className="flex flex-col gap-4 text-center">
            <h3 className="text-5xl font-semibold">Berbagai Kuis Menarik</h3>
            <p className="text-2xl font-semibold text-neutral-600">
              Untuk meningkatkan pengetahuanmu terhadap budaya serta bahasa jawa
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-8">
            <KuisCard name={"Kuis Aksara Jawa"} src={aksara} to={"#"} />
            <KuisCard name={"Kuis Tarian Daerah"} src={tarian} to={"#"} />
            <KuisCard
              name={"Kuis Tembang Macapat"}
              src={tembang_macapat2}
              to={"#"}
            />
            <KuisCard name={"Kuis Bahasa Jawa"} src={ayoSinau} to={"#"} />
          </div>
        </div>
      </section>
      <footer className="my-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-8 text-neutral-600">
            <div>
              <img className="-mb-4" src={logo} />
              <p className="text-xl text-balance text-neutral-600">
                Bawika. Together we learn Javanese Language and Culture!
                Let&apos;s explore colorful stories, songs and traditions.
              </p>
              <ul className="flex flex-row gap-4 mt-4 text-neutral-600">
                <li>
                  <Link to={"#"}>
                    <FaSquareFacebook className="size-8" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaSquareTwitter className="size-8" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaSquareInstagram className="size-8" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaLinkedin className="size-8" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 mt-10">
              <h3 className="text-3xl font-semibold">Deaprtments</h3>
              <ul className="flex flex-col gap-4 text-lg">
                <li>
                  <Link to={"#"}>Family Medicine</Link>
                </li>
                <li>
                  <Link to={"#"}>Women’s Health</Link>
                </li>
                <li>
                  <Link to={"#"}>Optician</Link>
                </li>
                <li>
                  <Link to={"#"}>Pediatrics</Link>
                </li>
                <li>
                  <Link to={"#"}>Dermatology</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 mt-10">
              <h3 className="text-3xl font-semibold">Quick Links</h3>
              <ul className="flex flex-col gap-4 text-lg">
                <li>
                  <Link to={"#"}>Our Doctors</Link>
                </li>
                <li>
                  <Link to={"#"}>Appointment</Link>
                </li>
                <li>
                  <Link to={"#"}>Blog Post</Link>
                </li>
                <li>
                  <Link to={"#"}>Shop Product</Link>
                </li>
                <li>
                  <Link to={"#"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 mt-10">
              <h3 className="text-3xl font-semibold">Blog Post</h3>
              <ul className="flex flex-col gap-4 text-lg">
                <li>
                  <Link to={"#"}>
                    <p className="text-neutral-900">22.05.2019</p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident,sunt in
                      culpa.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <p className="text-neutral-900">22.05.2019</p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident,sunt in
                      culpa.
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
