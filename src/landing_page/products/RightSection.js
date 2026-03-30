import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1 className="mt-3">{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="img" style={{height:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
