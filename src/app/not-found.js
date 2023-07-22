import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl">Not Found!</h2>
      <p className="my-4 text-lg">Requested page is under developemt!</p>
      <Image 
        src="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        width={600} 
        height={300} 
        className="rounded-md"
        alt="puppy-error"
      />
      <p>
        Go back <Link href="/home">
          <button className="p-2 rounded text-white font-medium bg-blue-400 my-3">
            home
          </button>
        </Link>
      </p>
    </div>
  )
}