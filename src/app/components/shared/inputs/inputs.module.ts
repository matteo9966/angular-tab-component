import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TagsInputComponent } from "./tags-input/tags-input.component";

@NgModule({
    imports:[CommonModule,ReactiveFormsModule],
    declarations:[TagsInputComponent],
    exports:[TagsInputComponent]
})
export class InputsModule{}