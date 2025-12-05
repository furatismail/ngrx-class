import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Field, form, required } from '@angular/forms/signals';
import { ParkingCalculatorFacade } from '../../../core/+state/parking-calculator.facade';
import { Router } from '@angular/router';

export interface Car {
  fullname: string;
  floor: string;
  carType: string
}

@Component({
  selector: 'app-form',
  imports: [Field, JsonPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  private router = inject(Router)
  private parkingCalculatorFacade = inject(ParkingCalculatorFacade)

  carModel = signal<Car>({
    fullname: '',
    floor: '',
    carType: ''
  })

  carForm = form(this.carModel, (schemaPath) => {
    required(schemaPath.fullname, { message: "Toto pole je povinne" }),
    required(schemaPath.floor, { message: "Toto pole je povinne" }),
    required(schemaPath.carType, { message: "Toto pole je povinne" })
  })

  onSubmit($event: SubmitEvent) {
    $event.preventDefault()
    if(this.carForm().valid()) {
      console.log(this.carForm())
      this.parkingCalculatorFacade.calculate(this.carForm().value())
      this.router.navigate(['/offers'])
    }
  }
}
