// pages/index.js
// import Navbar from "./Navbar";
import Link from "next/link";

const NursingHomeLandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col px-3 py-2">
      {/* <Navbar /> */}
      <main className="flex flex-col font-sans items-center justify-center flex-grow text-500">
        <h1 className="text-5xl font-bold mb-4">Nursing Home Name</h1>
        <h2 className="text-3xl font-semibold mb-2">A Good Heading</h2>
        <p className="text-xl font-medium text-center max-w-md mb-8">
          A Catchy Tagline - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vestibulum gravida nisi, quis facilisis dolor mollis ac.
        </p>
        <p className="text-lg font-normal text-center max-w-md text-white">
          An Effective Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vestibulum gravida nisi, quis facilisis dolor mollis ac. Sed eu mauris felis. Donec
          consectetur urna in sapien cursus, vitae fermentum purus facilisis. Curabitur
          ullamcorper turpis ut ligula tempor, vel tempus est fringilla.
        </p>
        <Link
          href="/register"
        >
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 mt-8 rounded"
          >
            Join Now
          </button>
        </Link>
      </main>
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>&copy; JD Nursing Home 2023</p>
      </footer>
    </div>
  );
};

export default NursingHomeLandingPage;
