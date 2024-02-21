// formadicionar.component.ts

import { Component, OnInit } from '@angular/core';
import { BancoService } from '../banco-service.service';

@Component({
  selector: 'app-formadicionar',
  templateUrl: './formadicionar.component.html',
  styleUrls: ['./formadicionar.component.css']
})
export class FormAdicionarComponent implements OnInit {
  model: string = ''; // Initialize with default value
  brand: string = '';
  year: number = 0;
  value: number = 0;
  color: string = '';
  picture: File | null = null; // Initialize with null or provide a default value


  constructor(private bancoService: BancoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Create an object to hold item data
    const newItem = {
      model: this.model,
      brand: this.brand,
      year: this.year,
      value: this.value,
      color: this.color,
      picture: this.picture // Handle picture upload accordingly
    };

    // Call the service to save the item
    this.bancoService.addItem(newItem).subscribe(
      response => {
        console.log('Item added successfully!', response);
        // Optionally, you can redirect or show a success message
      },
      error => {
        console.error('Error adding item:', error);
        // Handle error appropriately
      }
    );
  }
}
