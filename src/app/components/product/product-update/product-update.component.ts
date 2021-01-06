import { Product } from './../product.model';

import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnumTipoMensagem } from '../../shared/mensagem/tipo-mensagem.enum';
import { Mensagem } from '../../shared/mensagem/mensagem.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product : Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessageSucess(new Mensagem('Produto atualizado !'));
      this.router.navigate(["/products"]);
    })
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }

}
