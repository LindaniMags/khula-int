import React from "react";
import { useNavigate } from "react-router";

import Navbar from "../components/Navbar";

const Farmer = () => {
  const navigate = useNavigate();

  const apply = () => {
    navigate("/apply");
  };
  return (
    <div className="summery-con">
      <div className="summery-section">
        <Navbar />
        <div
          className="summery-top"
          style={{ justifyContent: "space-between" }}
        >
          <div className="top-text">
            <h3>Your Application Checklist</h3>
            <p>Complete the following to submit your application</p>
          </div>
          <button onClick={apply} className="continue">
            Start Application
          </button>
        </div>
        <div className="summery-info-con">
          <div className="credit-check-con">
            <div className="item-title">
              <strong>
                <p>1. Credit Check</p>
              </strong>
              <p>Check if you qualify</p>
            </div>
          </div>
          <div className="kyc-con">
            <div className="item-title">
              <strong>
                <p>2. KYC</p>
              </strong>
              <p>Check if you qualify</p>
            </div>
            <div className="kyc-items-con">
              <div className="checks-con">
                <div className="circle "></div>
                <div className="vl "></div>
                <div className="circle "></div>
                <div className="vl "></div>
                <div className="circle "></div>
                <div className="vl"></div>
                <div className="circle "></div>
                <div className="vl"></div>
                <div className="circle "></div>
              </div>
              <div className="kyc-items" style={{ gap: "31px" }}>
                <div className="kyc-item">
                  <p>Applicant Details</p>
                </div>
                <div className="kyc-item">
                  <p>Company Details</p>
                </div>
                <div className="kyc-item">
                  <p>Director Details</p>
                </div>
                <div className="kyc-item">
                  <p>Banking Details</p>
                </div>
                <div className="kyc-item">
                  <p>3 year production history</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-con">
            <div className="item-title">
              <strong>
                <p>3. Farm Profile</p>
              </strong>
              <p>Check if you qualify</p>
            </div>
            <div className="profile-items-con">
              <div className="checks-con">
                <div className="circle "></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
              </div>
              <div className="profile-items" style={{ gap: "31px" }}>
                <div className="profile-item">
                  <p>Farm / Company Oveview</p>
                </div>
                <div className="profile-item">
                  <p>Farm Description</p>
                </div>
                <div className="profile-item">
                  <p>Machinery and equipment</p>
                </div>
                <div className="profile-item">
                  <p>3-year Production History</p>
                </div>
                <div className="profile-item">
                  <p>Production Plan 2024</p>
                </div>
                <div className="profile-item">
                  <p>Risks</p>
                </div>
                <div className="profile-item">
                  <p>Irrigation</p>
                </div>
                <div className="profile-item">
                  <p>Customers & Suppliers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="finance-con">
            <div className="item-title">
              <strong>
                <p>4.Financial Infomation</p>
              </strong>
              <p>Check if you qualify</p>
            </div>
            <div className="finance-items-con">
              <div className="checks-con">
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
              </div>
              <div className="finance-items">
                <div className="finance-item">
                  <p>Historical Performance</p>
                </div>
                <div className="finance-item">
                  <p>Cashflow - Revenue</p>
                </div>
                <div className="finance-item">
                  <p>Cashflow - Production...</p>
                </div>
                <div className="finance-item">
                  <p>Cashflow - Operational..</p>
                </div>
                <div className="finance-item">
                  <p>Assets</p>
                </div>
                <div className="finance-item">
                  <p>Liabilities</p>
                </div>
                <div className="finance-item">
                  <p>CAPEX</p>
                </div>
                <div className="finance-item">
                  <p>Funding Ask</p>
                </div>
              </div>
            </div>
          </div>
          <div className="uploads-con">
            <div className="item-title">
              <strong>
                <p>5. Uploads</p>
              </strong>
              <p>Supporting Documents</p>
            </div>
            <div className="uploads-items-con">
              <div className="checks-con">
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
              </div>
              <div className="uploads-items">
                <div className="uploads-item">
                  <p>COR 14.3</p>
                </div>
                <div className="uploads-item">
                  <p>2022 AFS</p>
                </div>
                <div className="uploads-item">
                  <p>2023 AFS</p>
                </div>
                <div className="uploads-item">
                  <p>2024 AFS</p>
                </div>
                <div className="uploads-item">
                  <p>6 months bank statements</p>
                </div>
                <div className="uploads-item">
                  <p>Directors ID's</p>
                </div>
                <div className="uploads-item">
                  <p>Applicant ID</p>
                </div>
                <div className="uploads-item">
                  <p>Water Rights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farmer;
