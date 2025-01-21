//import { Button } from "./ui/button";
import Logo from "../assets/img/icon.png";
import { FaWhatsapp } from "react-icons/fa";
import {
  Copyright,
  Facebook,
  Linkedin,
  //Send,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-full Flex items-center justify-center bg-primary text-white">
      <div className="flex items-start justify-between w-[100%] mx-auto p-5 gap-10">
        <div className="w-[40%] flex flex-col items-start justify-start gap-2 p-4 ">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-lg pt-5">
            We Growing up over bussniess with over 10 years
          </span>
        </div>

        <div className="w-full flex items-center justify-center ">
          <div className="w-full grid grid-cols-3 p-4">
            <div className="col-span-1 flex flex-col items-start justify-start  gap-2">
              <span className="font-bold text-lg">Company</span>
              <span className="hover:text-primary hover:font-semibold">About Us</span>
              <span className="hover:text-primary hover:font-semibold">Investor Relations</span>
              <span className="hover:text-primary hover:font-semibold">Careers</span>
              <span className="hover:text-primary hover:font-semibold">Brands</span>
            </div>

            <div className="col-span-1 flex flex-col items-start justify-start gap-2">
              <span className="font-bold text-lg">Investment-Plans</span>
              <span className="hover:text-primary hover:font-semibold">OM Share Base</span>
              <span className="hover:text-primary hover:font-semibold">Monthly Return</span>
              <span className="hover:text-primary hover:font-semibold">Pl OwnerShip</span>
              <span className="hover:text-primary hover:font-semibold">Wholesale Return</span>
            </div>

            <div className="col-span-1 flex flex-col items-start justify-start gap-2">
              <span className="font-bold text-lg">Help</span>
              <span className="hover:text-primary hover:font-semibold">News & Events</span>
              <span className="hover:text-primary hover:font-semibold">Privacy Policy</span>
              <span className="hover:text-primary hover:font-semibold">Help center</span>
              <span className="hover:text-primary hover:font-semibold">Blogs</span>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center border border-white"></div>

      <div className="w-[85%] mx-auto p-3 flex items-center justify-between ">
        <div className="flex items-center justify-center">
          <Copyright className="size-5" /> &nbsp;2025 Penta Squad, All right
          reserved
        </div>
        <div className="flex items-center justify-center gap-5">
          <span>
            <Facebook className="hover:text-blue-500 " />
          </span>
          <span>
            <Linkedin className="hover:text-blue-500 " />
          </span>
          <span>
            <Twitter className="hover:text-blue-500 " />
          </span>
          <span>
            <Youtube className="hover:text-red-500 " />
          </span>
          <span>
            <FaWhatsapp className="size-6 hover:text-green-600 " />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
