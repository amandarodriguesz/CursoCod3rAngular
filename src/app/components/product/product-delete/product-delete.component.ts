import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { EnumTipoMensagem } from '../../shared/mensagem/tipo-mensagem.enum';
import { Mensagem } from '../../shared/mensagem/mensagem.model';
@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product
  constructor(public router : Router, private productService : ProductService , public route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).
      subscribe(product => {
        this.product = product;
      });
        
  }

  confirmarExclusao(){
    this.productService.delete(this.product.id).subscribe(()=>{
      this.productService.showMessageSucess(new Mensagem('   Produto excluído !  '));
      this.router.navigate(['/products']);
    }
    )
  }

  cancel(){
    this.router.navigate(["/products"]);
  }
}
