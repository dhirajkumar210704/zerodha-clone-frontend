import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-primary text-white py-5">
      
      {/* Top bar */}
      <div className="d-flex justify-content-between align-items-center px-5 mb-5">
        <h5 className="mb-0">Support Portal</h5>
        <a href="/support" className="text-white text-decoration-underline">
          Track Tickets
        </a>
      </div>

      {/* Main content */}
      <div className="row px-5">
        
        {/* Left column */}
        <div className="col-md-6 mb-4 pe-4">
          <h2 className="fw-normal mb-4">
            Search for an answer or browse help topics to create a ticket
          </h2>

          <input
            type="text"
            className="form-control form-control-lg mb-4"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
          />

          <div className="d-flex flex-wrap gap-3">
            <a href="/support" className="text-white text-decoration-underline">
              Track account opening
            </a>
            <a href="/support" className="text-white text-decoration-underline">
              Track segment activation
            </a>
            <a href="/support" className="text-white text-decoration-underline">
              Intraday margins
            </a>
            <a href="/support" className="text-white text-decoration-underline">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="col-md-6">
          <h2 className="fw-normal mb-3">Featured</h2>
          <ol className="ps-3">
            <li className="mb-2">
              <a href="/support" className="text-white text-decoration-underline">
                Current Takeovers and Delisting – January 2024
              </a>
            </li>
            <li>
              <a href="/support" className="text-white text-decoration-underline">
                Latest Intraday leverages – MIS & CO
              </a>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;