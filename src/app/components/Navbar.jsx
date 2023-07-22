import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 px-8 text-white flex justify-between">
      <div>
        <Link href="/">
          <p className="text-xl font-bold">Home</p>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <p className="text-xl font-bold">About Us</p>
        </Link>
      </div>
      <div>
        <Link href="/gallery">
          <p className="text-xl font-bold">Gallery</p>
        </Link>
      </div>
      <div>
        <Link href="/family">
          <p className="text-xl font-bold">Family</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
