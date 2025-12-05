import { Action, createAction, props } from "@ngrx/store";

export const parkingCalculate = createAction(
    '[Parking calculator] Calculate',
    props<{payload: any}>()
)

export const parkingCalculateSuccess = createAction(
    '[Parking calculator] Calculate success',
    props<{payload: Array<any>}>()
)


export const parkingCalculateError = createAction(
    '[Parking calculator] Calculate error',
    props<{payload: any}>()
)

////// OLD SYNTAX //////

// export const PARKING_CALCULATE = '[Parking calculator] Calculate';

// export class ParkingCalculate implements Action {
//     readonly type = PARKING_CALCULATE;
//     constructor(public payload: any) {}
// }