import { inject, Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as ParkingCalculatorActions from './parking-calculator.actions'
import { selectCalculation } from "./parking-calculator.selectors";

@Injectable({providedIn: 'root'})
export class ParkingCalculatorFacade {
  private readonly store = inject(Store<any>)
  calculation$ = this.store.pipe(select(selectCalculation))

    calculate(payload: any) {
        this.store.dispatch(ParkingCalculatorActions.parkingCalculate({ payload }))
    }
}