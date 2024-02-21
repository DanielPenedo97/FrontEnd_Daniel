// componentlistar.component.ts

import { Component, OnInit } from '@angular/core';
import { BancoService } from '../banco-service.service';

@Component({
  selector: 'app-componentlistar',
  templateUrl: './componentlistar.component.html',
  styleUrls: ['./componentlistar.component.css']
})
export class ComponentListarComponent implements OnInit {
  items: any[] = []; // Define an array to hold items

  constructor(private bancoService: BancoService) { }

  ngOnInit(): void {
    // Call a method in BancoService to fetch items
    this.fetchItems();
  }

  fetchItems() {
    this.bancoService.getItems().subscribe(
      (data: any[]) => {
        this.items = data; // Assign fetched items to component property
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }
}
