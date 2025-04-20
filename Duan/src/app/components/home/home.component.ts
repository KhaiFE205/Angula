import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RouterModule, CommonModule]
})
export class HomeComponent implements OnInit {
  title = "Homepage";
  products!: Product[];
product: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data as Product[];
      console.log("Sản phẩm nhận được:", this.products);
    });
  }
}
