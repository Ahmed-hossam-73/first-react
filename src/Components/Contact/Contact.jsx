export default function Portfolio() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center text-gray-800">
      <h2 className="text-3xl font-bold mt-4">conatct section</h2>
      <div className="nextLinePortfolio h-10 relative w-10 text-center">
    <i className="fa-solid fa-star text-gray-800"></i>
    </div>
    <form className="w-50">
      <input id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" />
      <input id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"></input>
      <input id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"></input>
      <input id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"></input>
      <button className="btn mt-4 text-white" style={{backgroundColor: '#1abc9c'}}> send Message </button>
    </form>
    </div>
  )
}