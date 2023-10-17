import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category } from 'src/app/modules/_models/category';
import { FormBuilder, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  categoryForm!: FormGroup; 
 

  constructor(private formBuilder: FormBuilder) { }  

  ngOnInit(): void {
    this.getCategories();
    this.initializeForm();
  }

  private initializeForm(): void {
    this.categoryForm = this.formBuilder.group({
      category: ['', Validators.required], 
      code: ['', Validators.required]
    });
  }

  getCategories(): void {
    this.categories = [
      new Category(1, 'AGJKL', 'Libros', 'activo'),
      new Category(2, 'JKLJ', 'Limpieza', 'activo'),
      new Category(3, 'LPJOP', 'Electronicos', 'inactivo'),

      
    ];
  }

  openModal(): void {
    $('#myModal').modal('show');
  }

  submitted = false;
  onSubmit(){
    this.submitted = true;
    if(this.categoryForm.invalid) return;
    this.submitted = false;
    // Obtener el último ID y sumarle 1 para el nuevo ID
    let lastID = this.categories.length > 0 ? this.categories[this.categories.length - 1].category_id : 0;
    let newID = lastID + 1;

    let newCategory = new Category(newID, this.categoryForm.value.code, this.categoryForm.value.category, 'activo');
    this.categories.push(newCategory);
    $("#modalForm").modal("hide");
    alert("Región guardada exitosamente!");
}

showModalForm(){
    this.categoryForm.reset();
    this.submitted = false;
    $("#modalForm").modal("show");
  }
}



