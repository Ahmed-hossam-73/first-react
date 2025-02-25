import { useState } from "react";

export default function Portfolio() {
  const [modalImg, setModalImg] = useState("");
  var modal = document.getElementById('modal')
  function openModel(e){
    var modelImg = e.currentTarget.querySelector("img").src;
    setModalImg(modelImg)
    modal.classList.remove("d-none");
  }
  function closeModal() {
    modal.classList.add("d-none");
  }
  document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
      closeModal();
    }
  });
  
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("box-info")) {
      closeModal();
    }
  });
  return (
    <div className="flex flex-col items-center min-h-screen justify-center text-gray-800">
      <h2 className="text-3xl font-bold mt-4">portfolio component</h2>
      <div className="nextLinePortfolio h-10 relative w-10 text-center">
    <i className="fa-solid fa-star text-gray-800"></i>
    </div>
    <div className="grid grid-cols-3 gap-6 w-8/12">
      <div className="w-full h-full rounded-2xl border border-white overflow-hidden layer-main relative " onClick={openModel}>
        <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
        <div className="layer bg-teal-500 absolute flex justify-center items-center">
        <i className="fa-solid fa-plus text-white text-6xl"></i>
        </div>
      </div>
      <div className="w-full h-full rounded-2xl border border-white overflow-hidden layer-main relative " onClick={openModel}>
        <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
        <div className="layer bg-teal-500 absolute flex justify-center items-center">
        <i className="fa-solid fa-plus text-white text-6xl"></i>
        </div>
      </div>
      <div className="w-full h-full rounded-2xl border border-white overflow-hidden layer-main relative " onClick={openModel}>
        <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
        <div className="layer bg-teal-500 absolute flex justify-center items-center">
        <i className="fa-solid fa-plus text-white text-6xl"></i>
        </div>
      </div>
      <div className="w-full h-full rounded-2xl border border-white overflow-hidden layer-main relative " onClick={openModel}>
        <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
        <div className="layer bg-teal-500 absolute flex justify-center items-center">
        <i className="fa-solid fa-plus text-white text-6xl"></i>
        </div>
      </div>
      <div className="w-full h-full rounded-2xl border border-white overflow-hidden layer-main relative " onClick={openModel}>
        <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
        <div className="layer bg-teal-500 absolute flex justify-center items-center">
        <i className="fa-solid fa-plus text-white text-6xl"></i>
        </div>
      </div>
      <div className="w-full h-full rounded-2xl border border-white overflow-hidden layer-main relative " onClick={openModel}>
        <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
        <div className="layer bg-teal-500 absolute flex justify-center items-center">
        <i className="fa-solid fa-plus text-white text-6xl"></i>
        </div>
      </div>
    </div>
   <div className="box-info position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center d-none" id="modal" style={{backgroundColor: '#0007'}}>
  <div className="modal-dialog">
    <div className="bg-white p-4 rounded-2 shadow-lg" style={{width: 500, zIndex: 10}}>
    <img src={modalImg} alt="" />
    </div>
  </div>
</div>

    </div>
  )
}