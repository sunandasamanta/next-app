import Link from "next/link"
import CreateAccount from "./register/page"


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-white flex items-center justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Link href="/register/"> Join Us </Link>
      </button>
    </div>
  )
}
