import { ProductService } from './../../components/product/product.service';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Mensagem } from 'src/app/components/shared/mensagem/mensagem.model';
import { EnumTipoMensagem } from 'src/app/components/shared/mensagem/tipo-mensagem.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService : HeaderService, private productService: ProductService) { 
    headerService.headerData = {
      title : 'Início',
      icon: 'home',
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
  }

  alert(){
    this.productService.showMessageAlerta(new Mensagem('   O produto que você pediu está esgotado  !   ',EnumTipoMensagem.Alerta,true,'Alerta: Eu posso ser personalizado !'));
  }

  sucess(){
    this.productService.showMessageSucess(new Mensagem('   Tudo ocorreu como esperado !   ',EnumTipoMensagem.Positivo,true));
  }

  error(){
    this.productService.showMessageErro(new Mensagem('Ocorreu um erro durante o processamento, tente novamente mais tarde !',EnumTipoMensagem.Negativo,true,' Oops'))
  }

}
