import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ParkingCalculatorService } from "../services/parking-calculator.service";
import * as CalculatorActions from './parking-calculator.actions'
import { catchError, map, of, switchMap } from "rxjs";

export const calculateParkingEffect = createEffect((actions$ = inject(Actions), parkingCalculatorService = inject(ParkingCalculatorService)) =>
   actions$.pipe(
        ofType(CalculatorActions.parkingCalculate),
        switchMap(action =>
            parkingCalculatorService.calculate(action.payload).pipe(
                map((offers: any[]) => CalculatorActions.parkingCalculateSuccess({ payload: offers })),
                catchError(error => {
                    alert("Něco se pokazilo");
                    return of(CalculatorActions.parkingCalculateError({ payload: error }))
                })
            )
        )
    ),
);