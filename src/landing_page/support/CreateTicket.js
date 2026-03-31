function CreateTicket() {
  return (
    <div className="container py-5">

      <h1 className="fs-3 mb-5">
        To create a ticket, select a relevant topic
      </h1>

      {/* FIRST ROW */}
      <div className="row gy-4">

        <div className="col-4 px-4">
          <h5 className="mb-4">
            <i className="fa-solid fa-circle-plus fa-sm"></i> Account Opening
          </h5>
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Offline Account Opening</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Company, Partnership and HUF Account</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Opening</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>NRI Account Opening</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Charges at Zerodha</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Zerodha IDFC First Bank 3-in-1 Account</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Getting Started</a>
        </div>

        <div className="col-4 px-4">
          <h5 className="mb-4">
            <i className="fa-solid fa-user fa-sm"></i> Your Zerodha Account
          </h5>
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Login Credentials</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Account Modification and Segmentation Addition</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>DP ID and bank details</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Your Profile</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Transfer and conversion of shares</a>
        </div>

        <div className="col-4 px-4">
          <h5 className="mb-4">
            <i className="fa-solid fa-chart-column fa-sm"></i> Your Zerodha Account
          </h5>
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Margin/leverage, Product and Order types</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Kite Web and Mobile</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Trading FAQs</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Corporate Actions</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Sentinel</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Kite API</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Pi and other platforms</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Stockreports+</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>GTT</a>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="row gy-4 mt-4">

        <div className="col-4 px-4">
          <h5 className="mb-4">
            <i className="fa-solid fa-wallet fa-sm"></i> Funds
          </h5>
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Adding Funds</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Fund Withdrawal</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>eMandates</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Adding Bank Accounts</a>
        </div>

        <div className="col-4 px-4">
          <h5 className="mb-4">
            <i className="fa-solid fa-circle-notch fa-sm"></i> Console
          </h5>
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Reports</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Ledger</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Portfolio</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>60 Day Challenge</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>IPO</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Referral Program</a>
        </div>

        <div className="col-4 px-4">
          <h5 className="mb-4">
            <i className="fa-regular fa-circle fa-sm"></i> Coin
          </h5>
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Understanding Mutual Funds</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>About Coin</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Buying and Selling through Coin</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Starting an SIP</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Managing Your Portfolio</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Coin App</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Moving to Coin</a><br />
          <a href="/support" style={{ lineHeight:"2.5", textDecoration:"none" }}>Government Securities</a>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;
