import Link from "next/link"
import NursingHomeLandingPage from "./components/NursingHomeLandingPage"


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-200 flex items-center justify-center">
      <NursingHomeLandingPage />
    </div>
  )
}
