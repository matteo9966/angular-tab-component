import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../shared/shared-components.module';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, startWith } from 'rxjs';
@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss'],
})
export class FoodFormComponent {
  foodForm!: FormGroup;
  units$:Observable<string>

  constructor(private fb: FormBuilder) {
    this.initForm();
    this.units$  = this.unitControl.valueChanges.pipe(startWith(this.unitControl.value))
  }

  initForm() {
    this.foodForm = this.fb.group({
      details: this.fb.group({
        name: this.fb.control('',Validators.required),
        quantity: this.fb.control(1,[Validators.required,Validators.min(1)]),
        expires: this.fb.control(''),
      }),
      macros: this.fb.group({
        calories: [0],
        fats: [0],
        proteins: [0],
        carbs: [0],
        unit: ['g/100g'],
      }),
      extraInfo: this.fb.group({
        description: [''],
        tags: [],
      }),
    });
  }

  submitFood(){
    console.log(this.foodForm.value)
  }


  get unitControl(){
    return this.foodForm.get('macros.unit') as FormControl
  }

}

@NgModule({
  declarations: [FoodFormComponent],
  imports: [CommonModule, SharedComponentsModule, ReactiveFormsModule],
  exports: [FoodFormComponent],
})
export class FoodFormComponentModule {}
