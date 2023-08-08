const Body = () => {
  return (
    <div className="container-fluid pb-5" style={{ backgroundColor: "lightgray", height:"100%" }}>
      <div className="row d-flex justify-content-center pb-5">

        <div className="col-lg-6 col-md-4 col-12 mt-5 pt-5 text-md-start">
          <h1 className="text-primary"> facebook </h1>
          <p className="fw-bold fs-4" style={{width:"570px"}}>Connect with the friends and the world around you on facebook.</p>
        </div>

      
        <div className="col-lg-3 col-md-6 mt-5 p-4" style={{ borderRadius: "6px", backgroundColor: "white" }}>
          <form>
            <div className="mb-3">
              <input type="email" className="form-control p-3" placeholder="Email or Phone Number" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control p-3" placeholder="Password" />
            </div>
            <button className="btn btn-primary fs-5 p-2 mb-3" style={{ width: "100%" }}> Log in </button>
            <a href="/" className="text-center"><p>Forgot password?</p></a>
            <hr />
            <button className="btn mt-2 ms-5 p-2 fs-5" style={{ backgroundColor: "rgb(66, 183, 42)", color: "white", width: "70%" }}>
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Body;