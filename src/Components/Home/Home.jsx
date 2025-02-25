import './Home.css'
import 'tailwindcss'
export default function Home() {
  return (
    <div className="flex flex-col items-center h-[75vh] justify-center  bg-teal-500 text-white">
      <img
        src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
        alt="Avatar"
        className="w-50 h-50 rounded-full"
      />
    <h1 className="text-3xl font-bold mt-4">START FRAMEWORK</h1>
    <div className="nextLine h-10 relative w-10 text-center">
    <i className="fa-solid fa-star text-white"></i>
    </div>
    <p className="text-sm">Graphic Artist - Web Designer - Illustrator</p>
  </div>
  )
}