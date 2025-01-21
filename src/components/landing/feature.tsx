
import { Button } from "../ui/button";
import { GoDotFill } from "react-icons/go";
import { FaChartLine } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { FaUserShield } from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";

const Feature = () => {
  return (
    <div className="w-[90%] mt-[-2%] mx-auto  lg:p-5 flex flex-col lg:flex-row p-4 gap-5  md:gap-none items-center justify-center">
     
      <div className="bg-gray-800 text-white font-mono rounded-lg p-4 shadow-lg lg:w-[40%]">
        <div className="bg-gray-700 rounded-t-lg p-2 flex items-center gap-2 text-sm">
          <span>
            <HiDotsHorizontal />
          </span>
          <span className="text-gray-300">What We Do</span>
        </div>
        <div className="p-4 text-sm">
          <h1 className="text-xl font-bold text-blue-400 mb-2">
            Business Plans
          </h1>
          <p className="text-lg text-gray-300 mb-4">Built with you in mind</p>
          <p>
            <span className="font-bold text-yellow-400">Penta Squad Group</span>
            &nbsp; specializes in high-growth, Shariah-compliant investment
            solutions designed for long-term financial success. Our expertise in
            diverse sectors ensures profitable returns for all our clients.
          </p>
        </div>
        <Button className="rounded-md bg-indigo-600 px-3.5 py-2.5 ml-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500/50 hover:box-shadow hover:shadow-md">
          Explore Plans <TiLocationArrow className="size-6" />
        </Button>
      </div>

      <div className="w-full lg:w-[45%] rounded-md font-mono lg:ml-[-4%] bg-gray-500/30 p-2">
        <div className="bg-gray-600 rounded-t-lg p-2 flex items-center gap-2 text-sm">
          <span>
            <HiDotsHorizontal className="text-white" />
          </span>
          <span className="text-gray-200">Points</span>
        </div>
        <div className="flex flex-col gap-2 p-3 text-sm">
          <p className="flex items-center font-semibold gap-2">
            <GoDotFill  className="text-white"/>
            Flexible Investment Models
            <ImStatsBars className="size-5 text-blue-600" />
          </p>
          <span className="text-xs ml-6">
            Our models offer flexible profit options: monthly, quarterly, or
            annual.
          </span>
          <p className="flex items-center font-semibold gap-2">
            <GoDotFill className="text-white" />
            High Returns on Profit (ROI)
            <FaChartLine className="size-5 text-blue-600" />
          </p>
          <span className="text-xs ml-6">
            We offer top e-commerce returns with halal models for solid passive
            income.
          </span>
          <p className="flex items-center font-semibold gap-2">
            <GoDotFill  className="text-white"/>
            Dedicated Agent
            <FaUserShield className="size-5 text-blue-600" />
          </p>
          <span className="text-xs ml-6">
            Dedicated Agent: Guiding you with updates every step.
          </span>
        </div>
      </div>

    </div>
  );
};

export default Feature;
