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
        <div className="summery-top">
          <div className="top-text">
            <h3>Your Application Checklist</h3>
            <p>Cumolete the following to submit your application</p>
            <p>You are 82% complete</p>
          </div>
          <button onClick={apply} className="continue">
            Continue Application
          </button>
        </div>
        <div className="summery-info-con">
          <div className="credit-check-con">
            <div className="item-title">
              <p className="green">complete</p>
              <strong>
                <p>1. Credit Check</p>
              </strong>
              <p>Check if you qualify</p>
            </div>
            <div className="credit-items-con">
              <div className="credit-item">
                <p>score</p>
                <p>642 Low Score</p>
              </div>
              <div className="credit-item">
                <p>status</p>
                <p>High Risk</p>
              </div>
              <div className="credit-item">
                <p>Issue 1</p>
                <p>Too many enquiries</p>
              </div>
              <div className="credit-item">
                <p>Issue 2</p>
                <p>Overdrawn account</p>
              </div>
              <div className="credit-item">
                <p>Issue </p>
                <p>2 Judgements</p>
              </div>
            </div>
          </div>
          <div className="kyc-con">
            <div className="item-title">
              <p className="green">complete</p>
              <strong>
                <p>2. KYC</p>
              </strong>
              <p>Check if you qualify</p>
            </div>
            <div className="kyc-items-con">
              <div className="checks-con">
                <div className="circle done"></div>
                <div className="vl "></div>
                <div className="circle done"></div>
                <div className="vl "></div>
                <div className="circle done"></div>
                <div className="vl"></div>
                <div className="circle done"></div>
                <div className="vl"></div>
                <div className="circle done"></div>
                <div className="vl"></div>
                <div className="circle done"></div>
              </div>
              <div className="kyc-items">
                <div className="kyc-item">
                  <p>Applicant Details</p>
                  <p className="green">Complete</p>
                </div>
                <div className="kyc-item">
                  <p>Company Details</p>
                  <p className="green">Complete</p>
                </div>
                <div className="kyc-item">
                  <p>Director Details</p>
                  <p className="green">Complete</p>
                </div>
                <div className="kyc-item">
                  <p>Banking Details</p>
                  <p className="green">Complete</p>
                </div>
                <div className="kyc-item">
                  <p>3 year production history</p>
                  <p className="green">Complete</p>
                </div>
                <div className="kyc-item">
                  <p>Applicant Details</p>
                  <p className="green">Complete</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-con">
            <div className="item-title">
              <p className="green">. . . In Progress</p>
              <strong>
                <p>3. Farm Profile</p>
              </strong>
              <p>Check if you qualify</p>
            </div>
            <div className="profile-items-con">
              <div className="checks-con">
                <div className="circle done"></div>
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
              <div className="profile-items">
                <div className="profile-item">
                  <p>Farm / Company Oveview</p>
                  <p className="green">Complete</p>
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
              <p>Up Next</p>
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
              <p>Last Step</p>
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
