import { Ownership } from "../modal/ownership";
import { MonthlyReturns } from "../modal/monthlyreturns";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Card = () => {
  return (
    <div className="w-[90%] mx-auto flex items-center justify-center bg-white md:p-5 pt-10 md:pt-20 rounded-2xl shadow-lg">
      <div className="grid md:flex flex-col md:gap-2 items-end justify-end gap-5 p-4">
        <span className="text-3xl font-bold">Start Planning Your Savings</span>
        <span className="text-lg">
          Flexible, secure, and profitable financial plans designed for
          long-term growth.
        </span>

        <div className="flex flex-col items-center justify-center mt-4 md:flex-row md:items-start md:justify-start gap-6 p-2">
          <div>
            <MonthlyReturns />
          </div>

          <div>
            <Ownership />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center w-[50%] bg-gradient-to-r from-white to-blue-300/40 rounded-md backdrop-blur-sm">
      <DotLottieReact
      src="https://lottie.host/6c23a3b0-d648-43e8-8bc0-b99a83ea7b9a/IFKs7JqYix.lottie"
      loop
      autoplay
    />
      </div>
    </div>
  );
};

export default Card;
