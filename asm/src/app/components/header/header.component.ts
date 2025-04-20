import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, ɵnormalizeQueryParams } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule, FormsModule, CommonModule]
})
export class HeaderComponent implements OnInit {
  keyword: string = "Tìm kiếm đi cưng";
  categories!: Category[];
  isAdmin: any
  isLogin: any
  constructor(private authService: AuthService, private categoryService: CategoryService, private router: Router) {
this.isAdmin = authService.checkAdmin()
this.isLogin = authService.checkLogin()
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(data=>{
      console.log("Dữ liệu API trả về:", data);
      this.categories = (data as any).data ?? data;
    });

  }
  onSearch(){
    if(this.keyword.trim().length > 3){
      this.router.navigate(['products'], {queryParams:{'keyword': this.keyword}})
    }else{
      this.keyword='';
      alert('Hãy nhập ít nhất 3 ký tự');
    }
  }

  onLogout(){
    localStorage.clear()
    location.assign ('/')
  }
}
