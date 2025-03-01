import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";

export default function Portfolio() {
  const [modalImg, setModalImg] = useState("");

  function openModal(e) {
    setModalImg(e.currentTarget.querySelector("img").src);
    document.getElementById("modal").classList.remove("d-none");
  }

  function closeModal() {
    document.getElementById("modal").classList.add("d-none");
  }

  return (
    <div className="d-flex flex-column align-items-center min-vh-100 text-dark p-15">
      <h2 className="display-4 fw-bold mt-4">Portfolio Component</h2>
      <div className="position-relative mt-2 nextLinePortfolio">
        <i className="fa-solid fa-star" style={{ fontSize: '1.5rem' }}></i>
      </div>

      <div className="container text-center">
        <div className="row g-4">
        {[1, 2, 3, 1, 2, 3].map((num, index) => (
  <div className="col-md-4" key={index}>
    <div className="portfolio-item rounded border overflow-hidden position-relative" onClick={openModal}>
      <img 
        src={`https://routeegy.github.io/startFramework/assets/images/${(index === 0 || index === 3) ? "poert1.png" : `port${num}.png`}`}
        alt="Portfolio Item"
        className="img-fluid"
      />
      <div className="overlay">
        <i className="fa-solid fa-plus text-white display-3"></i>
      </div>
    </div>
  </div>
))}
        </div>
      </div>
      <div id="modal" className="modal-overlay d-none" onClick={closeModal}>
        <div className="modal-content">
          <img src={modalImg} alt="Enlarged View" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
