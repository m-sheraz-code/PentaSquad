import { ArrowRight, Rocket, Flag, Handshake, Users } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";

const services = [
  {
    icon: <Users className="w-12 h-12 text-blue-600" />  ,
    title: "Easy Asaasa",
    description:
      "Easy Asaasa is our upcoming, one-of-a-kind project, offering even more investment opportunities and exclusive benefits for our existing clients.",
    features: [
      "Manage and optimize your investments effortlessly with our app-based tools.",
      "A flexible investment model accessible to all, ensuring benefits for every financial class.",
    ],
    cta: "Explore More",
  },
  {
    icon: <Flag className="w-12 h-12 text-blue-600" />,
    title: "Ownership Mark",
    description:
      "Ownership Mark (OM) is an ongoing project that introduces innovative business strategies each year to drive growth and success.",
    features: [
      "Keeps businesses agile with fresh, updated strategies tailored to market trends.",
      "Ensures long-term growth by continuously adapting to new opportunities and challenges.",
    ],
    cta: "Explore More",
  },
  {
    icon: <Handshake className="w-12 h-12 text-blue-600" />,
    title: "Partnership/JV's",
    description:
      "Penta Squad leads the way in offering exclusive partnership/joint venture opportunities for investment in Pakistan, fostering collaborative business growth.",
    features: [
      "Expand market reach and enhance profitability by tapping into established networks and resources.",
      "Reduced risk through partnership, while ensuring greater market reach and profitability in Pakistan.",
    ],
    cta: "Contact Us",
  },
  {
    icon: <Rocket className="w-12 h-12 text-blue-600" />,
    title: "Founder Flights",
    description:
      "Every 1.5 years, Penta Squad provides new opportunities for emerging entrepreneurs to advance their careers, offering skill-building experiences aimed at achieving excellence.",
    features: [
      "Access to valuable learning experiences from industry experts.",
      "Hands-on business operations experience with a 30-day plan that includes local and international exposure (e.g., UAE, Malaysia, Canada).",
    ],
    cta: "Join Waitlist",
  },
];


const codeExample = `Enhanced Opportunities: Diverse and rewarding investment options.
Effortless Management: User-friendly app tools for easy investment tracking and optimization.
Inclusive Model: Accessible to all financial classes, ensuring benefits for everyone`;

export const Services = () => {
  return (

    <div className="bg-blue-200/20 py-24 sm:py-16 rounded-md">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          Deploy faster
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Everything you need to deploy your app
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg flex items-center gap-2 font-medium tracking-tight text-gray-950 max-lg:text-center">
                <Flag className="size-6 text-blue-600" /> Ownership Mark
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  <span>
                  Ownership Mark (OM) is an ongoing project that introduces innovative business strategies each year to drive growth and success.
                  </span>
                  <span>
                  <br /> "Keeps businesses agile with fresh, updated strategies tailored to market trends."
                  <br />"Ensures long-term growth by continuously adapting to new opportunities and challenges."
                  </span>
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-16 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg flex items-center gap-2 font-medium tracking-tight text-gray-950 max-lg:text-center">
                <Handshake className="size-6 text-blue-600" /> Partnership/JV's
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center pb-2">
                Penta Squad leads the way in offering exclusive partnership/joint venture opportunities for investment in Pakistan, fostering collaborative business growth.
                <span><br/>"Expand market reach and enhance profitability by tapping into established networks and resources.",
                <br/>"Reduced risk through partnership, while ensuring greater market reach and profitability in Pakistan.",</span>
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="flex items-center gap-2 mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                <Rocket className="size-6 text-blue-600" /> Founder Flights
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Every 1.5 years, Penta Squad provides new opportunities for emerging entrepreneurs to advance their careers, offering skill-building experiences aimed at achieving excellence.
                <span>
                "Access to valuable learning experiences from industry experts."<br />
                "Hands-on business operations experience with a 30-day plan that includes local and international exposure (e.g., UAE, Malaysia, Canada).",
                </span>
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10  ">
                <p className="flex items-center gap-2 mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                <Users className="size-6 text-blue-600" />  Easy Asaasa
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Easy Asaasa is our upcoming, one-of-a-kind project, offering even more investment opportunities and exclusive benefits for our existing clients.
                <span>
                "Manage and optimize your investments effortlessly with our app-based tools."<br />
                "A flexible investment model accessible to all, ensuring benefits for every financial class."
                </span>
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        App.jsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6 text-white">
                  <code>{codeExample}</code>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
