import { Stats } from "../stats/stats";
import { Steps } from "../steps/steps";
import { Services } from "../services/services";

const Join = () => {
  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-6">
      <div className="w-full flex h- flex-col items-center justify-center ">
        <div className="flex h-full items-center justify-center gap-4 rounded-xl p-4">
        <Steps />
        </div>
        <div className="flex flex-col items-center justify-center gap-4  rounded-xl p-4">
          <Services />
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Join;
