import { Component, OnInit } from '@angular/core';
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
  categoryUpdated: number = 0;
  categoryForm = this.formBuilder.group({
    category: ["", [Validators.required]],
    code: ["", [Validators.required]],
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getCategories();
  }


  getCategories(): void {
    let category1 = new Category(1, 'ELEC', 'Electrónicos', 1);
    let category2 = new Category(2, 'LIB', 'Libros', 1);
    let category3 = new Category(3, 'ROP', 'ROPA', 0);

    this.categories.push(category1, category2, category3);
  }


  // Manejar el envío del formulario
  onSubmit(): void {
    this.submitted = true;
    if (this.categoryForm.invalid) {
      return;
    }

    if (this.categoryUpdated == 0) {
      this.onSubmitCreate();
    } else {
      this.onSubmitUpdate();
    }
  }

    // Crear una nueva categoría
    onSubmitCreate(): void {
      let newCategory = new Category(

        this.categories.length > 0 ? this.categories[this.categories.length - 1].category_id + 1 : 1,
        this.categoryForm.controls['category'].value!, 
        this.categoryForm.controls['code'].value!, 1
      );
  
      this.categories.push(newCategory);
      alert('Categoría creada exitosamente!');
    }
  
    // Actualizar una categoría existente
    onSubmitUpdate(): void {
      for (let category of this.categories) {
        if (category.category_id == this.categoryUpdated) {
          category.category = this.categoryForm.controls['category'].value!; 
          category.code = this.categoryForm.controls['code'].value!; 
          break;
        }
      }
      alert('Categoría actualizada exitosamente!');
      this.categoryUpdated = 0; 

    }

  updateCategory(category: Category){
    this.categoryUpdated = category.category_id;
    
    this.categoryForm.reset();
    this.categoryForm.controls['category'].setValue(category.category);
    this.categoryForm.controls['code'].setValue(category.code);
    
    this.submitted = false;
    $("#modalForm").modal("show");
  }
  
  // modals 
  showModalForm(){
    this.categoryForm.reset();
    this.categoryUpdated = 0;
    this.submitted = false;
    $("#modalForm").modal("show");
  }


   // CRUD region
   disableCategory(id: number){
    for(let category of this.categories){
      if(category.category_id == id){
        category.status = 0;
        alert("categoria desactivada exitosamente!");
        break;
      }
    }
    console.log("SALIR")
  }
  enableCategory(id: number){
    for(let category of this.categories){
      if(category.category_id == id){
        category.status = 1;
        alert("categoria activada exitosamente!");
        break;
      }
    }
  }

  
}



