import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service'; // nhớ chỉnh lại path nếu khác

@Component({
  selector: 'app-product-edit',
  standalone: true,
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
})
export class ProductEditComponent implements OnInit {
  id!: string;
  productForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];

    this.productService.getProductDetail(this.id).subscribe((data) => {
      const product = data as Product;
      this.productForm = new FormGroup({
        name: new FormControl(product.name, [Validators.required, Validators.minLength(6)]),
        image: new FormControl(product.image),
        price: new FormControl(product.price, [Validators.required, Validators.min(0)]),
        desc: new FormControl(product.desc),
      });

    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.productForm.invalid) {
      alert('Dữ liệu không hợp lệ');
    } else {
      this.productService.updateProduct(this.id, this.productForm.value).subscribe(() => {
        location.assign('/admin/product-list');
      });
    }
  }
}
