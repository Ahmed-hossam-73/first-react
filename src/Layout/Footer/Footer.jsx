import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div className="bg-dark text-white">
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <h3 className="h5">LOCATION</h3>
            <p className="mb-1">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className="h5">AROUND THE WEB</h3>
            <div className="d-flex justify-content-center gap-3">
              <div className="d-flex align-items-center justify-content-center border border-white rounded-circle p-2" style={{ width: "30px", height: "30px" }}>
                <i className="fab fa-facebook text-white"></i>
              </div>
              <div className="d-flex align-items-center justify-content-center border border-white rounded-circle p-2" style={{ width: "30px", height: "30px" }}>
                <i className="fab fa-twitter text-white"></i>
              </div>
              <div className="d-flex align-items-center justify-content-center border border-white rounded-circle p-2" style={{ width: "30px", height: "30px" }}>
                <i className="fab fa-linkedin-in text-white"></i>
              </div>
              <div className="d-flex align-items-center justify-content-center border border-white rounded-circle p-2" style={{ width: "30px", height: "30px" }}>
                <i className="fas fa-globe text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h3 className="h5">ABOUT FREELANCER</h3>
            <p className="small">Freelance is a free-to-use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-3 text-center">
        <p className="mb-0">© Copyright 2020 Lorem Inc. All rights reserved.</p>
      </div>
    </div>
  );
}
