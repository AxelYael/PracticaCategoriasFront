import { Component } from '@angular/core';
import { Category } from 'src/app/modules/_models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories: Category[] = [];

  constructor() { }

  // Método para agregar datos dummy
  getCategories(): void {
    this.categories = [
      new Category(1, 'AGJKL', 'Libros', 'activo'),
      new Category(2, 'JKLJ', 'Limpieza', 'activo'),
      new Category(3, 'LPJOP', 'Electronicos', 'inactivo'),

      
    ];
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
