import Image from "next/image";
import Container from "../Container";
import heroImg from "../../../public/hero.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-[60%]">
          <div className="mb-8">
            <h1 className="md:text-[50px] text-[32px] font-bold leading-snug tracking-tight text-gray-800 text-center md:text-start">
              <span className="text-[#f10000]">HIGH QUALITY</span>{" "}
              <br className="lg:hidden block" /> AND{" "}
              <br className="hidden lg:block" />
              <span className="text-[#f10000]">TIME SAVING</span>{" "}
              <br className="lg:hidden block" /> EMS TRAINING
            </h1>
            <ul className="py-5 md:text-[20px] text-gray-500 text-center md:text-start md:w-[80%]">
              <li className="mb-3 ml-2">
                Achieve Your Fitness Goals In Only 20 Minutes Per Week
              </li>
              <li className="my-3 ml-2">
                Our Personal Trainers Will Coach You During Every Workouts
              </li>
              <li className="mt-3 ml-2">
                Combine Fitness And Health Thanks To Our Unique Training Method
              </li>
            </ul>
            <div className="flex flex-row items-center w-full">
              <button className="border px-6 py-3 rounded-full bg-[#F10000] shadow text-white">
                Get Started  
              </button>
              <button className="border-2 border-black px-6 py-2 shadow rounded-full ml-8">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-[40%]">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
