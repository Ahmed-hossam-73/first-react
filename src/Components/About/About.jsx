import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home/Home.css';

export default function About() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-white text-center" style={{ backgroundColor: '#14b8a6' }}>
      <h2 className='fw-bold mt-4'>ABOUT COMPONENT</h2>
      <div className="position-relative mt-2 nextLine">
        <i className="fa-solid fa-star" style={{ color: 'white', fontSize: '1.5rem' }}></i>
      </div>
      <div className='container w-75 text-sm d-flex justify-content-between text-start mt-3'>
        <div className='p-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
        <div className='p-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
      </div>
    </div>
  );
}
