import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectParkingCalculatorState = createFeatureSelector<any>('parkingCalculator')

export const selectCalculation = createSelector(selectParkingCalculatorState, (state: any) => state.calculation)