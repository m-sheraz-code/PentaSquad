import { Stats } from "../stats/Stats";
import { Steps } from "../steps/Steps";
import { Services } from "../services/Services";

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
