import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
product!: Product;
id!: string;

constructor(private productService: ProductService, private router: ActivatedRoute){
  this.id = router.snapshot.params['id'];
}
ngOnInit() {
this.productService.getProductDetail(this.id).subscribe(data=>{
  this.product = data as Product;
  console.log(this.product)
})
}
}
