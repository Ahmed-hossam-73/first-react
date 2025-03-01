import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#14b8a6', color: 'white', height:'75vh' }}>
      <img
        src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
        alt="Avatar"
        className="rounded-circle" style={{ width: '150px', height: '150px' }}
      />
      <h1 className="fw-bold mt-4">START FRAMEWORK</h1>
      <div className="position-relative mt-2 nextLine">
        <i className="fa-solid fa-star" style={{ color: 'white', fontSize: '1.5rem' }}></i>
      </div>
      <p className="small">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
