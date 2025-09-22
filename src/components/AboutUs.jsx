import Abouttheinstitute from "../assets/ins1.jpg";
import Banner from "./Banner";

const AboutUs = () => {
  return (
    <>
      <div id="about">
        <Banner />
        <div className=" flex flex-row lg:flex-nowrap flex-wrap gap-3 mb-10 pl-5 pr-5 pb-5 pt-1 lg:pt-20">
          <div className="img w-full lg:w-[40%]">
            <img
              className="h-[400px] w-[500px] object-cover rounded-lg"
              src={Abouttheinstitute}
              alt="knit"
            />
          </div>
          <div className="content w-full lg:w-[60%] ">
            <span style={{lineHeight :"5rem"}} className=" block text-yellow-600 text-start text-5xl">About Us</span>
            <hr className="border-yellow-600 mt-3 mb-5 border-2" />
            <p className="text-start space-y-3 ">
              Established in the year 1976, Kamla Nehru Institute of Technology,
              Sultanpur is one of the leading technical institutions of the
              region and is responsible for producing top-grade engineers with
              skill sets comparable with the best in the world. It also renders
              the testing and consultancy services to the neighbouring
              industries and various other agencies. This is presently an
              autonomous government engineering institute (under 2f and 12B of
              UGC Act) and affiliated to Dr. APJ Abdul Kalam Technical
              University, Lucknow, India.
            </p>
            <p className="text-start">
              The institute offers B.Tech. and M. Tech. courses in Civil,
              Electrical, Mechanical, Electronics, Computer Science &
              Engineering and Information Technology disciplines in addition to
              M.C.A. course as well.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
