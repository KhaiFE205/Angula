import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone:true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
   imports: [RouterModule, CommonModule]
})
export class ProductsComponent implements OnInit {
 products!: Product[];
product: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
   this.route.queryParams.subscribe(params => {
    this.productService.getProductByQuery(params).subscribe(data =>{
      this.products = data as Product[];
    });
   });
  }

}
