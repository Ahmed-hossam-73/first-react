export default function Footer() {
  return (
    <div className="bg-[#2C3E50]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2 text-white text-center ">
            <h3 className="text-2xl font-medium mb-1">LOCATION</h3>
            <p className="mb-2">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="md:max-w-md lg:col-span-2 text-white text-center">
            <h3 className="text-2xl font-medium mb-1">AROUND THE WEB</h3>
            <div className="flex justify-evenly w-1/2 m-auto">
              <div className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center">
                <i className="fa-brands fa-facebook text-white text-xs"></i>
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center">
                <i className="fa-brands fa-twitter text-white text-xs"></i>
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center">
                <i className="fa-brands fa-linkedin-in text-white text-xs"></i>
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center">
                <i className="fa-solid fa-globe text-white text-xs"></i>
              </div>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2 text-white text-center">
            <h3 className="text-2xl font-medium mb-1">ABOUT FREELANCER</h3>
            <p className="text-sm">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
        <div className="flex flex-col justify-center pt-5 pb-10 sm:flex-row bg-[#1a252f]">
          <p className="text-sm text-white">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
        </div>
    </div>
  );
};