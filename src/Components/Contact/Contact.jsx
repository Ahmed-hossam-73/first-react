import "bootstrap/dist/css/bootstrap.min.css";

export default function Portfolio() {
  return (
    <div className="d-flex flex-column align-items-center min-vh-100 justify-content-center text-dark">
      <h2 className="fs-2 fw-bold mt-4">Contact Section</h2>
      <div className="my-3">
        <i className="fa-solid fa-star text-dark"></i>
      </div>
      <form className="w-50">
        <div className="mb-3">
          <input id="userName" type="text" placeholder="User Name" name="userName" className="form-control border-0 border-bottom py-3" />
        </div>
        <div className="mb-3">
          <input id="userAge" type="text" placeholder="User Age" name="userAge" className="form-control border-0 border-bottom py-3" />
        </div>
        <div className="mb-3">
          <input id="userEmail" type="email" placeholder="User Email" name="userEmail" className="form-control border-0 border-bottom py-3" />
        </div>
        <div className="mb-3">
          <input id="userPassword" type="password" placeholder="User Password" name="userPassword" className="form-control border-0 border-bottom py-3" />
        </div>
        <button className="btn text-white w-100 py-2" style={{ backgroundColor: "#1abc9c" }}>Send Message</button>
      </form>
    </div>
  );
}
