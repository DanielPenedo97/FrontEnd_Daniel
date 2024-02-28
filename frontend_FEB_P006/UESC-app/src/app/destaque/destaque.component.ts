// destaque.component.ts
import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../services/dog-api.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {
  dogImages: any[] = [];

  constructor(private dogApiService: DogApiService) { }

  ngOnInit(): void {
    this.carregarImagensCachorros();
  }

  carregarImagensCachorros(): void {
    this.dogApiService.getDogImages().subscribe((data: any[]) => {
      this.dogImages = data;
    });
  }
}

