import { Component } from '@angular/core';

import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-material',  
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss'
})
export class MaterialComponent {
  select = new FormControl('');

  selectList: string[] = ['Lavação', 'Limpeza', 'Estofamento'];

  toppings = this._formBuilder.group({
    pano: false,
    cera: false,
    detergente: false,
  });

  constructor(private _formBuilder: FormBuilder) {}

}
