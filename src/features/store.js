import { configureStore } from "@reduxjs/toolkit";
import farmReducer from "./user/farmSlice";
import choiceReducer from "./user/choiceSlice";
import ownershipReducer from "./user/ownershipSlice";
import locationReducer from "./user/locationSlice";
import leasedLandReducer from "./user/leaseHecSlice";
import leaseLengthReducer from "./user/leaseLenSlice";
import ownedHecReducer from "./user/ownedHecSlice";
import irrigatedReducer from "./user/irrigatedSlice";
import drylandReducer from "./user/drylandSlice";

export const store = configureStore({
  reducer: {
    farm: farmReducer,
    choice: choiceReducer,
    ownership: ownershipReducer,
    location: locationReducer,
    leasedLand: leasedLandReducer,
    leaseLength: leaseLengthReducer,
    ownedHec: ownedHecReducer,
    irrigated: irrigatedReducer,
    dryland: drylandReducer,
  },
});
