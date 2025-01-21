import { useEffect, useState } from "react";

const reviews = [
  {
    text: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti”",
    name: "Judith Black",
    position: "CEO of Workcation",
    image: "https://ui.shadcn.com/avatars/02.png",
  },
  {
    text: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit amet augue nec dui interdum hendrerit. Duis fermentum augue eu cursus.”",
    name: "John Doe",
    position: "Founder of DevAgency",
    image: "https://ui.shadcn.com/avatars/04.png",
  },
  {
    text: "“Aenean sit amet ligula vel velit scelerisque ullamcorper nec ac nulla. Cras ut ante eget justo egestas lobortis vel non nunc.”",
    name: "Alice Smith",
    position: "CTO of WebCorp",
    image: "https://ui.shadcn.com/avatars/03.png",
  },
];

const Review = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 2000); // Change review every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="relative isolate mx-auto overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt="Workcation Logo"
          src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
          className="mx-auto h-12"
        />
        <figure className="mt-10 transition-all duration-1000 ease-in-out">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>{reviews[currentReviewIndex].text}</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt={reviews[currentReviewIndex].name}
              src={reviews[currentReviewIndex].image}
              className="mx-auto size-16 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                {reviews[currentReviewIndex].name}
              </div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">
                {reviews[currentReviewIndex].position}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Review;
