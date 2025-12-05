import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ParkingCalculatorFacade } from '../../../core/+state/parking-calculator.facade';

@Component({
  selector: 'app-list',
  imports: [AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
    private readonly store = inject(Store<any>)
    private readonly parkingCalculatorFacade = inject(ParkingCalculatorFacade)
    constructor() {
      
    }

    ngOnInit(): void {
        this.parkingCalculatorFacade.calculation$.subscribe((res) => console.log(res))
    }
    
}
