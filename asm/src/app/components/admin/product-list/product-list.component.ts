import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, RouterModule, NgxPaginationModule]
})
export class ProductListComponent implements OnInit {
  p: number = 1;
  products!: Product[];
  isLoading = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll().subscribe(
      data => {
        this.isLoading = false;
        this.products = data as Product[];
      },
      error => {
        console.log(error.message);
      }
    );
  }

  onDelete(id: string){
    var result = confirm("bạn có muốn xóa khong");
    if(result){

    }
    this.productService.detlete(id).subscribe(data=>{
    location.assign('/admin/product-list');
  })
  }
}
