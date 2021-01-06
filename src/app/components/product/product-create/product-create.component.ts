import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Mensagem } from '../../shared/mensagem/mensagem.model';
import { EnumTipoMensagem } from '../../shared/mensagem/tipo-mensagem.enum';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService,
     private router : Router) { }

  ngOnInit(): void {
    
  }

    createProduct(): void{
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessageSucess(new Mensagem('Produto cadastrado !',EnumTipoMensagem.Positivo,true))
        this.router.navigate(['/products'])
      } )
    }

    cancel(): void{
      this.router.navigate(['/products'])

    }

 

}
