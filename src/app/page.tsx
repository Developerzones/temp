'use client';
import Header from "@/components/fixed/header/Header";
import ResponsiveSlider from "@/components/fixed/image-slider/ImageSlider";
import Accordions from "@/components/section/accordion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="p-1 bg-grey  ">
      <Header />
      {/* <br /><br /><br /><br /><br /> */}
<br /><br /><br /><br />
        <ResponsiveSlider />
      
      <div className="pt-5 pl-5 md:pt-5">
        <h1 className="font-bold">Expore Courses </h1>
      </div>
      <div className="relative w-full">
        {/* Left Scroll Button */}
        <button
          onClick={() => {
            const slider = document.getElementById("cardSlider");
            slider?.scrollBy({ left: -300, behavior: "smooth" });
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md border rounded-full p-2 shadow hover:bg-white hidden md:block"
        >
          <ArrowLeft size={20} color="currentColor" />
        </button>

        {/* Card Slider */}
        <div
          id="cardSlider"
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-4 py-6"
        >
          {[
            {
              img: "/imgslider/1.png",
              title: "Research In Computing (RIC)",
              desc: "Get complete notes, study materials, and important question-answers",
              link: "/ric"
            },
            {
              img: "/imgslider/2.png",
              title: "Image Processing",
              desc: "Get complete notes, study materials, and important question-answers",
              link: "/ip"
            },
            {
              img: "/imgslider/3.png",
              title: "Data Science",
              desc: "Get complete notes, study materials, and important question-answers",
              link: "/ds"
            },
            {
              img: "/imgslider/4.png",
              title: "Cloud Computing",
              desc: "Get complete notes, study materials, and important question-answers",
              link: "/cc"
            },
            {
              img: "/imgslider/5.png",
              title: "Soft Computing",
              desc: "Get complete notes, study materials, and important question-answers",
              link: "/sc"
            },
            {
              img: "/Python.png",
              title: "Python",
              desc: "Comming soon Course",
              link: "/py"
            },
          ].map((card, i) => (
            <div key={i}>
            <a href={card.link}>
            <div
              key={i}
              className="min-w-[300px] max-w-[310px] bg-white rounded-2xl shadow-md border overflow-hidden flex-shrink-0"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            </div>
            </a>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => {
            const slider = document.getElementById("cardSlider");
            slider?.scrollBy({ left: 300, behavior: "smooth" });
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md border rounded-full p-2 shadow hover:bg-white hidden md:block"
        >
                    <ArrowRight size={20} color="currentColor" />

        </button>
      </div>
      <section className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Master Programming with <span className="text-yellow-300">Codolog</span>
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-lg">
              Learn C, C++, Python, Java, AI, and more with our expert-crafted
              courses. Join thousands of learners leveling up their skills every day.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#courses"
                className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-semibold shadow hover:bg-yellow-300 transition"
              >
                Explore Courses
              </a>
              <a
                href="#about"
                className="px-6 py-3 border border-white/40 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative">
            <img
              src="https://picsum.photos/600/400?random=10"
              alt="Courses"
              className="rounded-2xl shadow-lg border-4 border-white/20"
            />
            {/* Decorative Blur */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </section>





      <Accordions />




    </div>
  );
}