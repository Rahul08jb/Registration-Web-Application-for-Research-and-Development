import { Calendar } from "lucide-react";
import knitSultanpurImage from "../assets/ins1.jpg";
import knitSultanpurImage3 from "../assets/IMG_6249(2).jpg";
import knitSultanpurImage4 from "../assets/IMG_8018.jpg";
import knitSultanpurImage2 from "../assets/logo1.png";
import waveBackground from "../assets/Background.jpg";
import SpeakersData from "../data/speakersList";
import highlight from "../data/highlights";
import iccvml from "../assets/iccvmllogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCore from 'swiper';
// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

// Install Swiper module
const conferenceSchedule = [
  { event: "Paper Submission Deadline", date: "31st July 2024" },
  { event: "Acceptance Notification Due", date: "15th August 2024" },
  { event: "Camera Ready Submission", date: "30th August 2024" },
  { event: "Registration Due", date: "10th September 2024" },
  { event: "Conference Dates", date: "20th - 21st December 2024" },
];

const FrontPage = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div id="home">
      
      {/* Hero Section */}
      <div
      style={{
        height : "600px"
      }}
      className="relative">
        <div className="carousel-div relative">
          <Swiper
            pagination={true}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 3000,     // Delay between slides in ms
              disableOnInteraction: false, // Continue autoplay after user interactions
            }}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                style={{ height: "600px", objectFit: "cover" }}
                src={knitSultanpurImage}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ height: "600px", objectFit: "cover" }}
                src={knitSultanpurImage3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ height: "600px", objectFit: "cover" }}
                src={knitSultanpurImage4}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      <div className="absolute z-10 top-0 w-full h-full  bg-black opacity-65" />
        <div className="absolute text-white mt-[4rem] flex justify-center items-center flex-col w-full  z-20 top-0  ">
          <div className="iccvml-logo">
            <img
              style={{ height: "250px", width: "250px" }}
              src={iccvml}
              alt={"iccvml"}
            />
          </div>
          <div className="z-[99]">
            <h1 className="text-4xl mt-1 text-yellow-400 md:text-5xl font-bold">{`ICCVML'24`}</h1>
            <h1 className="text-2xl mt-1 md:text-6xl">CONFERENCE</h1>
            <p className="text-lg mt-1 max-w-[700px] md:text-xl">
              2024 International Conference on Computer Vision and Machine
              Learning (CVML2024)
            </p>

            <hr className="mt-3 w-[60%] opacity-75 mx-auto" />
            <div className="text-yellow-400 w-fit mx-auto mt-3">
              {" "}
              <h3 className="w-fit flex justify-center items-center gap-3">
                <Calendar /> December 21-22, 2024
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* About Conference Section */}
      <div className="bg-white mt-6 p-6 md:p-12">
        <h2 className="text-2xl text-black opacity-85 font-semibold mb-4">
          About Conference
        </h2>
        <hr className="border-1 border-black opacity-85 mb-4" />
        <p className="p-2">
          ICCVML-2024 is organised with the objective of bringing together
          innovative scientists, professors, research scholars, students and
          industrial experts in the field of Sciences, Computer Vision And
          Machine Learning to a common platform. The primary goal of the
          conference is to promote the exchange of innovative scientific
          information between researchers, developers, engineers, students, and
          practitioners. Overall the conference will provide the researchers and
          attendees with prospects for national and international collaboration
          and networking among universities and institutions from India and
          abroad for promoting research. ICCVML 2024 will be organized by KAMLA
          NEHRU INSTITUTE OF TECHNOLOGY ON 20-21 DECEMBER 2024 .
        </p>
        <p className="p-2">
          The proceedings of ICCVML 2024 will be published by IEEE Computer
          Society (IEEE Xplore) indexed by all reputed databases like Scopus,
          EI, WoS.
        </p>
        <button  className="bg-yellow-600 rounded-[2rem] hover:bg-yellow-400 py-4 px-6  mt-4">
          <Link to={"/registration"}>Paper Submission</Link>
        </button>

        {/* Highlights Section */}
        <div className="bg-custom-gradient rounded-[1rem] w-full p-6 mt-8">
          <h1 className="text-yellow-300 text-3xl  uppercase mt-2 mb-4 font-semibold">
            Highlight
          </h1>
          <ul className="text-white text-start list-disc pl-5">
            {highlight.map((currHighlight) => (
              <li className="my-3" key={currHighlight.id}>
                {currHighlight.content}
              </li>
            ))}
          </ul>
        </div>

        {/* Important Dates Section */}
        <div
          style={{ boxShadow: "inset 0 4px 10px rgba(0, 0, 0, 0.3)" }}
          className="relative mt-[9rem] p-[3rem] border-2  rounded-[1rem] "
        >
          <h2 className="text- bg-custom-gradient w-fit  px-[1.5rem] py-[0.6rem] absolute  text-white rounded-full -top-4 left-[50%] -translate-x-[50%]">
            Important Dates
          </h2>
          <div className=" p-4">
            <hr className="border-1 opacity-30 border-black mb-2" />
            {conferenceSchedule.map((item, index) => (
              <div key={index}>
                <li className="text-black flex flex-wrap md:justify-between justify-center  lg:justify-between my-3 list-none">
                  <div className="event font-bold">{item.event}</div>
                  <div className="date">{item.date}</div>
                </li>
                <hr className="border-1 opacity-30 border-black my-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <div
        style={{
          background: `url(${waveBackground})`,
          backgroundSize: "cover",
        }}
        className="bg-gray-100   py-20 px-6 mt-[8rem]"
      >
        <section className="container p-7 mt-9 mx-auto text-center">
          <h2 className="text-yellow-400 text-3xl text-start font-bold mb-2">
            Speakers
          </h2>
          <h3 className="text-white text-start text-xl mb-9">
            Previous ICCCNet Conference
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SpeakersData.map((currSpeaker) => (
              <div
                key={currSpeaker.id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
                  <img
                    className="w-24 h-24 rounded-full"
                    style={{ objectFit: "cover" }}
                    src={currSpeaker.img}
                  />
                </div>
                <p className="text-gray-800 font-semibold">
                  {currSpeaker.name}
                </p>
                <p className="text-gray-500 text-sm">{currSpeaker.post}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Venue Section */}
      <section className="container mb-12 p-6 mx-auto mt-12">
        <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
          <img
            src={knitSultanpurImage2}
            alt="KNIT Sultanpur"
            className="w-full md:w-1/3 h-auto object-cover"
          />

          <div className="p-6 flex flex-col justify-end">
            <h3 className="text-gray-700 text-start text-3xl font-semibold mb-4">
              Venue
            </h3>
            <p className=" text-start text-gray-600">
              The Kamla Nehru Institute of Technology (KNIT) Sultanpur, Uttar
              Pradesh.
            </p>
            <p className="text-start text-gray-600 mt-2">
              Kamla Nehru Institute of Technology (KNIT) Sultanpur Kadipur Road,
              Sultanpur, Uttar Pradesh 228118.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrontPage;
