const BuildGrowSection = () => {
  return (
    <>
      <div className="pattern-square"></div>

      <section className="pt-lg-7 pt-5"
    //    data-cue="fadeIn"
      >
        <div className="container">
          <div className="row align-items-center justify-content-lg-start justify-content-center flex-lg-nowrap">
            <div
              className="col-lg-5 col-12"
            //   data-cues="slideInDown"
            //   data-group="page-title"
            //   data-delay="700"
            >
              <div className="text-center text-lg-start" 
            //   data-cue="zoomIn"
              >
                <div className="mb-5">
                  <span className="badge align-items-center p-2 pe-3 ps-3 fs-6 text-primary border border-primary-subtle rounded-pill mb-4">
                    Central dashboard to track and manage
                  </span>
                  <h1 className="mb-3 display-4">
                    Build & Grow your Business faster
                  </h1>
                  <p className="lead mb-0">
                    MicroAgent brings AI directly into your workflow to
                    accelerate your most critical tasks. Boost productivity,
                    deliver faster results, and exceed every business goal with
                    ease.
                  </p>
                </div>
                <div
                //   data-cues="slideInDown"
                //   data-group="page-title-buttons"
                //   data-delay="800"
                >
                  <a href="#demo" className="btn btn-primary">
                    Request a demo
                  </a>
                </div>
                <div
                  className="d-flex flex-wrap gap-4 my-6"
                //   data-cues="slideInDown"
                //   data-group="page-title-buttons"
                //   data-delay="900"
                ></div>
              </div>
            </div>
            <div
              className="col-xxl-7 offset-xxl-1 col-lg-7 col-12 mt-5 mt-lg-0"
            //   data-cue="fadeIn"
            //   data-delay="1000"
            >
              <div className="position-relative">
                <div
                  className="bg-light-subtle p-md-4 p-2 rounded-4 border scene"
                //   data-relative-input="true"
                >
                  <div data-depth="0.09">
                    <figure 
                    // data-cues="zoomIn" data-delay="900"
                    >
                      <img
                        src="./src/assets/images/landings/saas/hero-img.jpg"
                        alt="landing"
                        className="w-100 rounded-4 shadow border"
                      />
                    </figure>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="position-absolute top-50 mt-n10 start-0 ms-n4 d-none d-lg-block">
                  <div className="badge text-bg-info text-white-stablepx-3 py-2 fs-6 rounded-pill">
                    Developer
                  </div>
                  <div className="position-absolute top-0 end-0 mt-n3 me-n3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.3722 2.21902C22.4794 2.32632 22.5515 2.46361 22.5791 2.61278C22.6067 2.76194 22.5884 2.91597 22.5267 3.05452L14.0412 22.1465C13.9819 22.28 13.8849 22.3933 13.7621 22.4725C13.6393 22.5517 13.4961 22.5933 13.35 22.5921C13.2039 22.591 13.0613 22.5473 12.9397 22.4662C12.8182 22.3852 12.7229 22.2704 12.6657 22.136L9.60416 14.987L2.45366 11.924C2.31974 11.8664 2.20552 11.771 2.12495 11.6496C2.04439 11.5281 2.00097 11.3857 2.00002 11.24C1.99906 11.0942 2.04061 10.9513 2.11958 10.8288C2.19854 10.7062 2.31151 10.6094 2.44466 10.55L21.5367 2.06452C21.675 2.00309 21.8287 1.98497 21.9776 2.01255C22.1265 2.04012 22.265 2.1121 22.3722 2.21902Z"
                        fill="#0DCAF0"
                      />
                    </svg>
                  </div>
                </div>

                <div className="position-absolute bottom-50 mb-n10 start-0 d-none d-lg-block">
                  <div className="badge text-bg-success text-white-stablepx-3 py-2 fs-6 rounded-pill">
                    Manager
                  </div>
                  <div className="position-absolute top-0 end-0 mt-n3 me-n3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.3722 2.21902C22.4794 2.32632 22.5515 2.46361 22.5791 2.61278C22.6067 2.76194 22.5884 2.91597 22.5267 3.05452L14.0412 22.1465C13.9819 22.28 13.8849 22.3933 13.7621 22.4725C13.6393 22.5517 13.4961 22.5932 13.35 22.5921C13.2039 22.591 13.0613 22.5473 12.9397 22.4662C12.8182 22.3852 12.7229 22.2704 12.6657 22.136L9.60416 14.987L2.45366 11.924C2.31974 11.8664 2.20552 11.771 2.12495 11.6496C2.04439 11.5281 2.00097 11.3857 2.00002 11.24C1.99906 11.0942 2.04061 10.9513 2.11958 10.8288C2.19854 10.7062 2.31151 10.6094 2.44466 10.55L21.5367 2.06452C21.675 2.00309 21.8287 1.98497 21.9776 2.01255C22.1265 2.04012 22.265 2.1121 22.3722 2.21902Z"
                        fill="#198754"
                      />
                    </svg>
                  </div>
                </div>

                <div className="position-absolute bottom-0 me-n8 end-0 d-none d-lg-block">
                  <div className="badge text-bg-danger text-white-stablepx-3 py-2 fs-6 rounded-pill">
                    Designer
                  </div>
                  <div className="position-absolute top-0 start-0 mt-n3 ms-n3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.21946 2.21902C2.11223 2.32632 2.04007 2.46361 2.01248 2.61278C1.9849 2.76194 2.0032 2.91597 2.06496 3.05452L10.5505 22.1465C10.6097 22.28 10.7067 22.3933 10.8295 22.4725C10.9523 22.5517 11.0956 22.5933 11.2416 22.5921C11.3877 22.591 11.5303 22.5473 11.6519 22.4662C11.7735 22.3852 11.8687 22.2704 11.926 22.136L14.9875 14.987L22.138 11.924C22.2719 11.8664 22.3861 11.771 22.4667 11.6496C22.5472 11.5281 22.5906 11.3857 22.5916 11.24C22.5926 11.0942 22.551 10.9513 22.472 10.8288C22.3931 10.7062 22.2801 10.6094 22.147 10.55L3.05496 2.06452C2.91659 2.00309 2.76287 1.98497 2.61402 2.01255C2.46516 2.04012 2.32664 2.1121 2.21946 2.21902Z"
                        fill="#DC3545"
                      />
                    </svg>
                  </div>
                </div>

                <div className="position-absolute top-0 mt-10 end-0 d-none d-lg-block">
                  <div className="badge text-bg-primary text-white-stablepx-3 py-2 fs-6 rounded-pill">
                    User
                  </div>
                  <div className="position-absolute top-0 start-0 mt-n3 ms-n3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.21946 2.21902C2.11223 2.32632 2.04007 2.46361 2.01248 2.61278C1.9849 2.76194 2.0032 2.91597 2.06496 3.05452L10.5505 22.1465C10.6097 22.28 10.7067 22.3933 10.8295 22.4725C10.9523 22.5517 11.0956 22.5933 11.2416 22.5921C11.3877 22.591 11.5303 22.5473 11.6519 22.4662C11.7735 22.3852 11.8687 22.2704 11.926 22.136L14.9875 14.987L22.138 11.924C22.2719 11.8664 22.3861 11.771 22.4667 11.6496C22.5472 11.5281 22.5906 11.3857 22.5916 11.24C22.5926 11.0942 22.551 10.9513 22.472 10.8288C22.3931 10.7062 22.2801 10.6094 22.147 10.55L3.05496 2.06452C2.91659 2.00309 2.76287 1.98497 2.61402 2.01255C2.46516 2.04012 2.32664 2.1121 2.21946 2.21902Z"
                        fill="#8B3DFF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuildGrowSection;
