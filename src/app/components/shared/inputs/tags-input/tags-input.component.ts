import { Component } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TagsInputComponent,
    },
  ],
})
export class TagsInputComponent implements ControlValueAccessor {
  //se implemento il validator interface, viene aggiunto a questo componente

  tags: string[] = [];
  touched = false;
  tagsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tagsForm = this.fb.group({
      name: fb.control(''),
      tags: this.fb.array([]),
    });
  }

  changeFn(tags: string[]) {} //passo ad ogni change l'array con i tag
  touchFn() {}
  disabled = false;

  writeValue(tags: any): void {
    //TODO cambia anche lo stato del form
    this.tags = tags;
  }
  registerOnChange(fn: any): void {
    this.changeFn = fn;
  }
  registerOnTouched(fn: any): void {
    this.touchFn = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  markAsTouched() {
    //quando aggiungi un tag
    if (!this.touched) {
      this.touchFn();
      this.touched = true;
    }
  }

  addTag() {
    if (this.disabled) return;

    if (!this.tagNameControl?.value) {
      return;
    }

    const tagname = this.tagNameControl.value;

    (<FormArray>this.tagsForm.get('tags')).insert(0, this.fb.control(tagname));
    this.tagNameControl.reset(); //svuoto
    this.tags = this.tagArrayControl?.value || [];

    this.markAsTouched();

    //TODO la nuova lista di tags

    this.changeFn(this.tags); //passo la nuova lista di tags
  }

  get tagNameControl() {
    return this.tagsForm.get('name');
  }

  get tagArrayControl() {
    return this.tagsForm.get('tags') as FormArray;
  }

  removeTag(index: number) {
    this.tagArrayControl.removeAt(index);
    this.tags = this.tagArrayControl.value;
    this.changeFn(this.tags);
  }
}
