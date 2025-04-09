// import components
import Hellocomp from "./hellocomp.jsx";
import Techskills from "./techskills.jsx";

export default function Home() {
  return (
    <main className="  ml-5 mr-5">
      <div className="topdiv flex justify-center gap-3">
        <Hellocomp />

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
