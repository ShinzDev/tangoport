// import components
import Hellocomp from "./hellocomp.jsx";
import Techskills from "./techskills.jsx";

export default function Home() {
  return (
    <main className="  ml-5 mr-5">
      <div className="absolute flex justify-center  border border-e-red-900 p-0 m-0 gap-3">

        < Hellocomp  className="relative"/>

        {/*  middle long */}

        <div className="h-500 w-3 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 ">
          .
        </div>

        {/*  middle long */}

        <Techskills/>
      </div>
    </main>
  );
}

// spam clss absolute inset-0 bg-pink400/25
