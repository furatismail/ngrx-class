import { createReducer, on } from "@ngrx/store"
import * as ParkingCalculatorActions from './parking-calculator.actions'

export const initialState: any = {
    calculation: undefined,
    loading: false,
    offers: []
}

export const reducer = createReducer(
    initialState,
     on(ParkingCalculatorActions.parkingCalculate, (state, action) => {
        return ({
            ...state,
            calculation: action.payload,
            loading: true
        })
    }),
);

///////// OLD SYNTAX

// export function reducer(
//   state: any = initialState,
//   action: ParkingCalculatorActions
// ): ParkingCalculatorState {
//   switch (action.type) {

//     case CalculatorActions.PARKING_CALCULATE:
//       return {
//         ...state,
//         calculation: action.payload,
//         loading: true
//       };

//     default:
//       return state;
//   }
// }