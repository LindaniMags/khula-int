import React, { useEffect, useState } from "react";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch, useSelector } from "react-redux";
import { getFarm } from "../features/user/farmSlice";
import { getFarmState } from "../features/user/farmSlice";
import { useNavigate } from "react-router";
import { setOwnership } from "../features/user/ownershipSlice";
import { getOwnershipState } from "../features/user/ownershipSlice";
import { getChoiceState } from "../features/user/choiceSlice";
import { setChoice } from "../features/user/choiceSlice";
import { setLocation } from "../features/user/locationSlice";
import { getLocationState } from "../features/user/locationSlice";
import { setLeasedLand } from "../features/user/leaseHecSlice";
import { getLeasedLandState } from "../features/user/leaseHecSlice";
import { setLeaseLength } from "../features/user/leaseLenSlice";
import { getLeaseLengthState } from "../features/user/leaseLenSlice";
import { setOwnedHec } from "../features/user/ownedHecSlice";
import { getOwnedHecState } from "../features/user/ownedHecSlice";
import { setIrrigated } from "../features/user/irrigatedSlice";
import { getIrrigatedState } from "../features/user/irrigatedSlice";
import { setDryland } from "../features/user/drylandSlice";
import { getDrylandState } from "../features/user/drylandSlice";

const Application = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const ownership = useSelector(getOwnershipState);
  const [colorLeased, setColorLeased] = useState(
    ownership === "Leased" ? "green" : ""
  );
  const [colorOwned, setColorOwned] = useState(
    ownership === "Owned" ? "green" : ""
  );
  const [colorBoth, setColorBoth] = useState(
    ownership === "Both" ? "green" : ""
  );

  const choice = useSelector(getChoiceState);
  const [colorYes, setColorYes] = useState(choice === "Yes" ? "green" : "");
  const [colorNo, setColorNo] = useState(choice === "No" ? "green" : "");

  const leaseLength = useSelector(getLeaseLengthState);
  const dryland = useSelector(getDrylandState);
  const irrigated = useSelector(getIrrigatedState);
  const ownedHec = useSelector(getOwnedHecState);
  const leasedLand = useSelector(getLeasedLandState);
  const location = useSelector(getLocationState);
  const farm = useSelector(getFarmState);

  const { register, control, handleSubmit, setValue } = form;

  const handleLeased = () => {
    if (colorLeased === "") {
      setColorLeased("green");
    }
    setColorOwned("");
    setColorBoth("");
    dispatch(setOwnership("Leased"));
  };
  const handleOwned = () => {
    if (colorOwned === "") {
      setColorOwned("green");
    }
    setColorLeased("");
    setColorBoth("");
    dispatch(setOwnership("Owned"));
  };
  const handleBoth = () => {
    if (colorBoth === "") {
      setColorBoth("green");
    }
    setColorLeased("");
    setColorOwned("");
    dispatch(setOwnership("Both"));
  };

  const handleYes = () => {
    if (colorYes === "") {
      setColorYes("green");
    }
    setColorNo("");
    dispatch(setChoice("Yes"));
  };
  const handleNo = () => {
    if (colorNo === "") {
      setColorNo("green");
    }
    setColorYes("");
    dispatch(setChoice("No"));
  };

  /**
   * Handles form submission by dispatching actions to update the Redux store
   * with the form data and navigates to the summary page.
   *
   */
  const onSubmit = (data) => {
    console.log(data.name);
    console.log(data.describe);
    dispatch(getFarm(data.describe));
    dispatch(setLocation(data.location));
    dispatch(setLeasedLand(data.leasedLand));
    dispatch(setLeaseLength(data.leaseLength));
    dispatch(setOwnedHec(data.ownedHec));
    dispatch(setIrrigated(data.irrigated));
    dispatch(setDryland(data.dryland));
    navigate("/summery");
  };
  useEffect(() => {
    const query = `
      query {
        user {
          name
          surname
          farmer {
            farm {
              name
            }
          }
        }
      }
    `;

    const url = `https://graph.khuladev.co.za/graphql?query=${encodeURIComponent(
      query
    )}`;
    const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0NiwidXNlclJvbGVzIjpbeyJpZCI6MSwibmFtZSI6ImZhcm1lciJ9XSwiX19fX2todWxhX19zZWNyZXRfX19fIjoiNjIyMjIzMzM2NjQtMTY5ODI0ODI4MDYzNyIsImlhdCI6MTY5ODI0ODI4MH0.KH1SO9KpCveqI5sYKTBesoyjuce69ZKCbitdXChZTR0";

    /**
     * Fetches data from a specified GraphQL endpoint using the provided URL and API key.
     * The fetched data is set to the component's state, and any errors encountered during
     * the fetch process are logged to the console. The loading state is updated once
     * the fetch operation is complete.
     */
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: apiKey,
          },
        });

        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  });

  useEffect(() => {
    if (data) {
      setValue("name", data.user.name);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="apply-con">
      <div className="apply-section">
        <div className="apply-tabs">
          <div className="save-exit apply-tab" onClick={handleSubmit(onSubmit)}>
            <p>
              <strong>X</strong>
            </p>
            <p style={{ fontSize: "12px" }}>Save</p>
            <p style={{ fontSize: "12px" }}>and close</p>
          </div>
          <div className="apply-tab">
            <p className="green">Complete</p>
            <strong>
              <p>1. Credit Check</p>
            </strong>
            <p className="sml-txt">Check if you qualify</p>
          </div>
          <div className="apply-tab">
            <p className="green">Complete</p>
            <strong>
              <p>2. KYC</p>
            </strong>
            <p className="sml-txt">Check if you qualify</p>
          </div>
          <div className="apply-tab">
            <p className="green">
              <GoDotFill style={{ color: "#C2D7C4" }} />
              <GoDotFill style={{ color: "#C2D7C4" }} />
              <GoDotFill />
              <GoDot />
              <GoDot />
              <strong>In Progress</strong>
            </p>
            <strong>
              <p>3. Farm Profile</p>
            </strong>
            <p className="sml-txt">Check if you qualify</p>
          </div>
          <div className="apply-tab">
            <p className="sml-txt">Up Next</p>
            <strong>
              <p>4. Financial Information</p>
            </strong>
            <p className="sml-txt">Check if you qualify</p>
          </div>
          <div className="apply-tab">
            <p className="sml-txt">Last Step</p>
            <strong>
              <p>5. Uploads</p>
            </strong>
            <p className="sml-txt">Supporting Documents</p>
          </div>
        </div>
        <div className="form-section">
          <div className="status-con">
            <div className="form-title">
              <h3>3. Farm Profile</h3>
              <p className="sml-txt">Give us some basic farm details</p>
            </div>
            <div className="status-details">
              <div className="farm-checks">
                <div className="circle circle-check">
                  <IoMdCheckmark />
                </div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle"></div>
                <div className="vl"></div>
                <div className="circle "></div>
              </div>
              <div className="farm-status-con">
                <div className="farm-status">
                  <strong>
                    <p>Farm / Company Overview</p>
                  </strong>
                  <p className="green">Complete</p>
                </div>
                <div className="farm-status">
                  <strong>
                    <p>3-year Production History</p>
                  </strong>
                  <p className="green">Complete</p>
                </div>
                <div className="farm-status">
                  <strong>
                    <p>Production Plan 2024</p>
                  </strong>
                  <p className="green">Complete</p>
                </div>
                <div className="farm-status">
                  <strong>
                    <p>Risks</p>
                  </strong>
                  <p className="green">Complete</p>
                </div>
                <div className="farm-status">
                  <strong>
                    <p>Customers & Suppliers</p>
                  </strong>
                  <p className="green">Complete</p>
                </div>
                <div className="farm-status">
                  <strong>
                    <p>Your Team</p>
                  </strong>
                  <p className="green">Complete</p>
                </div>
              </div>
            </div>
          </div>
          <div className="farm-form-con">
            <form className="form-con" onSubmit={handleSubmit(onSubmit)}>
              <h2>Farm / Company Overview</h2>
              <div className="name-form">
                <div className="name">
                  <label htmlFor="name">FullName</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="form-field"
                  />
                </div>

                <input
                  type="text"
                  defaultValue={location}
                  id="location"
                  {...register("location")}
                  placeholder="Location"
                  className="form-field"
                />
              </div>

              <div className="discription-form">
                <label htmlFor="describe">Describe your farm background</label>
                <input
                  type="text"
                  defaultValue={farm}
                  id="describe"
                  {...register("describe")}
                  className="form-field"
                />
              </div>

              <div className="leasing-form">
                <div className="leased-land">
                  <p>Leasing Information</p>
                  <label htmlFor="leasedLand">Hectares Leased</label>
                  <input
                    type="text"
                    defaultValue={leasedLand}
                    id="leasedLand"
                    {...register("leasedLand")}
                    className="form-field"
                  />
                </div>
                <input
                  type="text"
                  defaultValue={leaseLength}
                  id="leaseLength"
                  {...register("leaseLength")}
                  placeholder="Length of Lease"
                  className="form-field"
                />
              </div>
              <div className="ownedland-form">
                <p>Owned Land Information</p>
                <label htmlFor="ownedHec">Owned Hectares</label>
                <input
                  type="text"
                  defaultValue={ownedHec}
                  id="ownedHec"
                  {...register("ownedHec")}
                  className="form-field"
                />
              </div>
              <div className="irrigation-form">
                <div className="irrigated">
                  <label htmlFor="irrigated">Irrigated Hectares:</label>
                  <input
                    type="text"
                    defaultValue={irrigated}
                    id="irrigated"
                    {...register("irrigated")}
                    className="form-field"
                  />
                </div>
                <div className="dryland">
                  <label htmlFor="dryland">Dryland Hectares:</label>
                  <input
                    type="text"
                    defaultValue={dryland}
                    id="dryland"
                    {...register("dryland")}
                    className="form-field"
                  />
                </div>
              </div>
              <button type="submit" className="next-btn">
                Next
              </button>
            </form>
            <div className="fulltime-form">
              <p>Are you a full-time farmer?</p>
              <div className="choices">
                <button
                  onClick={handleYes}
                  style={{ backgroundColor: colorYes }}
                  className="choice-btn"
                >
                  Yes
                </button>
                <button
                  onClick={handleNo}
                  style={{ backgroundColor: colorNo }}
                  className="choice-btn"
                >
                  No
                </button>
              </div>
            </div>
            <div className="ownership-form">
              <p>Is your farm owned or leased?</p>
              <div className="ownership-btns">
                <button
                  onClick={handleLeased}
                  style={{ backgroundColor: colorLeased }}
                  className="choice-btn"
                >
                  Leased
                </button>
                <button
                  onClick={handleOwned}
                  style={{ backgroundColor: colorOwned }}
                  className="choice-btn"
                >
                  Owned
                </button>
                <button
                  onClick={handleBoth}
                  style={{ backgroundColor: colorBoth }}
                  className="choice-btn"
                >
                  Both
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DevTool control={control} />
    </div>
  );
};

export default Application;
