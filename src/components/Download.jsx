import { Link } from "react-router-dom";
import Banner from "./Banner";

const DownloadSection = () => {
  const downloadPdf = [
    {
      name: "Call For Special Session Template",
      link: "#call-for-special-session-template",
    },
    { name: "Call for Workshop Template", link: "#call-for-workshop-template" },
    { name: "Checklist", link: "#checklist" },
    { name: "Manuscript Guidelines", link: "#manuscript-guidelines" },
    { name: "Springer Word Template", link: "#springer-word-template" },
    { name: "Springer Latex Template", link: "#springer-latex-template" },
    {
      name: "ICCCNet 2024 Springer Contributors Agreement - Licence to Publish",
      link: "#icccnet-2024-springer-contributors-agreement",
    },
  ];

  return (
    <div id="download" className=" ">
      <Banner />
      <div className="max-w-7xl  mx-auto lg:my-9 px-4 sm:px-6 lg:px-8">
        <div
          style={{ boxShadow: "inset 0 4px 10px rgba(0, 0, 0, 0.3)" }}
          className="relative lg:mt-[9rem] md:mt-[4rem] px-[3rem] mb-[5rem] border-2  rounded-[1rem] "
        >
          <h2 className="bg-custom-gradient w-fit  px-[1.5rem] py-[0.6rem] absolute  text-white rounded-full -top-4 left-[50%] -translate-x-[50%]">
            Downloads
          </h2>
          <div className=" p-2 ">
            {downloadPdf.map((item, index) => (
              <div key={index}>
                <li className="text-black flex lg:flex-row md:flex-row flex-col gap-4 flex-wrap md:justify-between justify-center  lg:justify-between my-7 list-none">
                  <div className="name md:text-[16px]  font-bold">{item.name}</div>
                  <Link
                    to={`/${item.link}`}
                    className="link border-2 py-2 px-4 hover:bg-custom-gradient hover:text-white rounded-full border-[#20243E]  text-[#20243E]"
                  >
                    Download
                  </Link>
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
