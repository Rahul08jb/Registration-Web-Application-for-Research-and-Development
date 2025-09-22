import { Link } from "react-router-dom";
import Banner from "./Banner";
const Ragistration = () => {
  return (
    <div id="registration" className="">
      <Banner />

      {/* Early Bird Registration Alert */}
      <div className="text-red-700 text-center p-6 mt-8">
        <h2 className="text-xl ">Early Bird Registration Open Now!</h2>
      </div>

      {/* Registration Buttons */}
      <div className="flex flex-col items-center p-4">
        <Link className="bg-custom-gradient hover:opacity-70 text-white py-2 px-6 rounded-lg mb-4">
          Login
        </Link>
        <Link className="bg-custom-gradient hover:opacity-70 text-white py-2 px-6 rounded-lg">
          Regstration
        </Link>
      </div>

      {/* Registration Tables */}
      <div className="flex flex-col items-center mt-8">
        <div className="bg-white p-8 rounded-lg  w-full max-w-4xl mb-8">
          <h1 className="text-center text-2xl text-yellow-600 uppercase">
            Fee for registration and paper submission
          </h1>
          <table className="w-full mt-6 border border-gray-300 text-left text-gray-800">
            <thead className="bg-custom-gradient text-white">
              <tr>
                <th className="px-4 py-2 border-r border-gray-300">Category</th>
                <th className="px-4 py-2 border-r border-gray-300">
                  Indian Delegates
                </th>
                <th className="px-4 py-2">Foriegn Delegates</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 border-r border-gray-300">
                  Research Scholar
                </td>
                <td className="px-4 py-2 border-r border-gray-300">1500</td>
                <td className="px-4 py-2">USD 20</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 border-r border-gray-300">Faculty</td>
                <td className="px-4 py-2 border-r border-gray-300">2000</td>
                <td className="px-4 py-2">USD 35</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 border-r border-gray-300">Industry</td>
                <td className="px-4 py-2 border-r border-gray-300">2500</td>
                <td className="px-4 py-2">USD 60</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-4 text-start text-gray-600 text-sm">
            * Standard Paper size: 8 pages. <br />
            ** Research Student Author: Authors currently pursuing PhD or
            Masters at a research organization/university fall under this
            category.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-center text-2xl  text-yellow-600 uppercase">
            For Attending the conference
          </h1>
          <table className="w-full mt-6 border border-gray-300 text-left text-gray-800">
            <thead className="bg-custom-gradient text-white">
              <tr>
                <th className="px-4 py-2 border-r border-gray-300">Category</th>
                <th className="px-4 py-2 border-r border-gray-300">
                  Indian Delegates
                </th>
                <th className="px-4 py-2">Foriegn Delegates</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 border-r border-gray-300">
                  Research Scholar
                </td>
                <td className="px-4 py-2 border-r border-gray-300">200</td>
                <td className="px-4 py-2">USD 3</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 border-r border-gray-300">Faculty</td>
                <td className="px-4 py-2 border-r border-gray-300">500</td>
                <td className="px-4 py-2">USD 5</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 border-r border-gray-300">Industry</td>
                <td className="px-4 py-2 border-r border-gray-300">700</td>
                <td className="px-4 py-2">USD 7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ragistration;
