import Banner from "./Banner";

function CallForPaper() {
  return (
    <>
      <Banner />
      <div
        id="paper-submission"
        className="paper-submission-container scroll-margin-top p-5"
      >
        <div className="submission">
          <h2 className=" text-yellow-600 text-3xl uppercase">
            Paper Submission
          </h2>
          <div className="para">
            <p className="text-gray-600 text-md text-start p-6">
              The Original unpublished Research Papers, Articles & Working
              papers having maximum length 10-12 pages on the topics related to
              the theme are invited for presentation/publication in the
              conference proceedings.
            </p>
          </div>
          <ul className="list-disc text-start pl-7 space-y-2">
            <li>
              Papers are invited for the conference in the following topics of
              interest that include, but are not limited to:
            </li>
            <li>
              All submissions will be thoroughly peer-reviewed by experts based
              on originality, significance, and clarity.
            </li>
            <li>
              Only papers presenting original content with novel research
              results or successful innovative applications will be considered
              for publication in the conference proceedings (as chapters in
              edited volumes of Springer Series).
            </li>
          </ul>
        </div>
      </div>
      <div
        id="plagiarism-policy"
        className="paper-policy-container scroll-margin-top p-5"
      >
        <div className="submission">
          <h2 className=" text-yellow-600 text-3xl uppercase">
            Plagiarism Policy
          </h2>
          <ul className="list-disc pl-7 mt-10 text-start space-y-2">
            <li>
              The paper prior to submission should be checked for plagiarism
              from licensed plagiarism software like Turnitin/iAuthenticate,
              etc. The similarity content should not exceed 20% (in any case,
              either self contents or others).
            </li>
            <li>
              Further, you have to strictly implement the following ethical
              guidelines for publication:
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  Any form of self-plagiarism or plagiarism from {`others' `}
                  work(s) should not be there in an article.
                </li>
                <li>
                  If any model, concept, figure, table, data, or conclusive
                  comment by any previously published work is used in your
                  article, you should properly cite a reference to the original
                  work.
                </li>
                <li>
                  Also, the language of explaining it should not be the same as
                  the language of the work from which you have adopted it.
                </li>
                <li>
                  If you are using any copyrighted material, you should acquire
                  prior permission from the copyright holder.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div id="track" className="paper-policy-container scroll-margin-top p-5">
        <div className="submission">
          <h2 className=" text-yellow-600 text-3xl uppercase">
            Conference Tracks
          </h2>
          <div className="para">
            <p className="text-gray-600 text-md text-start p-6">
              The scope of this conference is to provide a platform for
              researchers, engineers, academicians as well as industrial
              professionals from all over the world to present their research
              results and development activities in various topics of Computing
              and Communication Networks. It provides participants an
              opportunity to discuss the recent developments in the latest
              research fields of computer science and its related areas faced by
              the community in the 21st century.
            </p>
            <p className="text-gray-600 font-semibold text-md text-start pl-7">
              ICCCNet 2024 will be an amalgamation of eight different Tracks
              organized parallel to each other, as listed below:
            </p>
          </div>
          <TrackCard1 />
          <TrackCard2 />
          <TrackCard3 />
          <TrackCard4 />
        </div>
      </div>
      <div className="paper-policy-container scroll-margin-top p-5">
        <div className="submission">
          <h2 className=" text-yellow-600 text-3xl uppercase">
            Call For Special Session
          </h2>
          <ul className="list-disc pl-7 mt-10 text-start space-y-2">
            <li>
              The paper prior to submission should be checked for plagiarism
              from licensed plagiarism software like Turnitin/iAuthenticate,
              etc. The similarity content should not exceed 20% (in any case,
              either self contents or others).
            </li>
            <li>
              Further, you have to strictly implement the following ethical
              guidelines for publication:
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  Any form of self-plagiarism or plagiarism from {`others' `}
                  work(s) should not be there in an article.
                </li>
                <li>
                  If any model, concept, figure, table, data, or conclusive
                  comment by any previously published work is used in your
                  article, you should properly cite a reference to the original
                  work.
                </li>
                <li>
                  Also, the language of explaining it should not be the same as
                  the language of the work from which you have adopted it.
                </li>
                <li>
                  If you are using any copyrighted material, you should acquire
                  prior permission from the copyright holder.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
const TrackCard1 = () => {
  return (
    <>
      <div className="card mt-[2rem] w-full rounded-[1rem] mb-[2rem] shadow-md">
        <h3 className=" uppercase text-start text-yellow-600">
          Track 1: (Machine Learning with social impact)
        </h3>
        {/* <p style={{fontWeight : "600"}} className='text-[16px]  py-4 text-start'>Track Chair : Mohammed Al-Khalidi, Manchester Metropolitan University, UK</p> */}
        <table className="w-full mt-6   text-left text-gray-800">
          <tbody>
            <tr className=" ">
              <td className="px-2 py-1 ">
              Virtualization and Visualization
              </td>
              <td className="px-2 py-1 ">Green IT</td>
            </tr>
            <tr className=" ">
              <td className="px-2 py-1">Cluster Computing</td>
              <td className="px-2 py-1">E-Commerce</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Natural Language Processing</td>
              <td className="px-2 py-1 ">Sentiment Analysis</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Social Network Mining</td>
              <td className="px-2 py-1 ">Semantic Web</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Social & Smart Networks</td>
              <td className="px-2 py-1 "></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
const TrackCard2 = () => {
  return (
    <>
      <div className="card mt-[2rem] w-full rounded-[1rem] mb-[2rem] shadow-md">
        <h3 className=" uppercase text-start text-yellow-600">
          Track 2: (Bio-inspired Machine Learning)
        </h3>
        {/* <p style={{fontWeight : "600"}} className='text-[16px]  py-4 text-start'>Track Chair : Mohammed Al-Khalidi, Manchester Metropolitan University, UK</p> */}
        <table className="w-full mt-6   text-left text-gray-800">
          <tbody>
            <tr className=" ">
              <td className="px-2 py-1 ">
              Ant Colony System
              </td>
              <td className="px-2 py-1 ">Artificial Immune Systems</td>
            </tr>
            <tr className=" ">
              <td className="px-2 py-1">Artificial Intelligence</td>
              <td className="px-2 py-1">Artificial Neural Networks
              </td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Cellular Automaton</td>
              <td className="px-2 py-1 ">Cognitive Modeling</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">DNA Computing</td>
              <td className="px-2 py-1 ">Differential Evolution</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Evolutionary Computations</td>
              <td className="px-2 py-1 ">Fuzzy Logic</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Genetic Algorithms</td>
              <td className="px-2 py-1 ">Granular Computing</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Organic Computing</td>
              <td className="px-2 py-1 ">Bio-medical Informatics</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
const TrackCard3 = () => {
  return (
    <>
      <div className="card mt-[2rem] w-full rounded-[1rem] mb-[2rem] shadow-md">
        <h3 className=" uppercase text-start text-yellow-600">
          Track 3 (High Performance Computer Vision )
        </h3>
        {/* <p style={{fontWeight : "600"}} className='text-[16px]  py-4 text-start'>Track Chair : Mohammed Al-Khalidi, Manchester Metropolitan University, UK</p> */}
        <table className="w-full mt-6   text-left text-gray-800">
          <tbody>
            <tr className=" ">
              <td className="px-2 py-1 ">
              Pattern Recognition
              </td>
              <td className="px-2 py-1 "></td>
            </tr>
            <tr className=" ">
              <td className="px-2 py-1">Machine Learning</td>
              <td className="px-2 py-1">Image Processing
              </td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Cloud and Fog Computing</td>
              <td className="px-2 py-1 ">Soft Computing</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Ambient Intelligence
              </td>
              <td className="px-2 py-1 ">Smart Cities</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Agent Based Systems</td>
              <td className="px-2 py-1 ">Internet of Things</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Big Data Analytics</td>
              <td className="px-2 py-1 ">Ubiquitous Computing</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Embedded & Green Computing</td>
              <td className="px-2 py-1 ">Grid & Cluster Computing</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Human Computer Interaction</td>
              <td className="px-2 py-1 ">Speech & Signal Processing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
const TrackCard4 = () => {
  return (
    <>
      <div className="card mt-[2rem] w-full rounded-[1rem] mb-[2rem] shadow-md">
        <h3 className=" uppercase text-start text-yellow-600">
          Track 4:(Deep Learning in Intelligent Networking)
        </h3>
        {/* <p style={{fontWeight : "600"}} className='text-[16px]  py-4 text-start'>Track Chair : Mohammed Al-Khalidi, Manchester Metropolitan University, UK</p> */}
        <table className="w-full mt-6   text-left text-gray-800">
          <tbody>
            <tr className=" ">
              <td className="px-2 py-1 ">
              Search Engines and Information
              </td>
              <td className="px-2 py-1 ">Opportunistic Networks</td>
            </tr>
            <tr className=" ">
              <td className="px-2 py-1">Network Performance Analysis</td>
              <td className="px-2 py-1">Parallel & Distributed Networks
              </td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Network Security & Management</td>
              <td className="px-2 py-1 ">Wireless Sensor Networks</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Vehicular Ad-hoc Networks Fault
              </td>
              <td className="px-2 py-1 ">Mobile Ad-hoc Networks</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Tolerant Networks Satellite
Communication
</td>
              <td className="px-2 py-1 ">Cognitive Radio Networks</td>
            </tr>
            <tr className="">
              <td className="px-2 py-1">Cryptography & Data Security</td>
              <td className="px-2 py-1 ">Vehicular Communication</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default CallForPaper;
