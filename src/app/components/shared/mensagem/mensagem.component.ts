import { Component, OnInit,Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Mensagem } from './mensagem.model';
import { EnumTipoMensagem } from './tipo-mensagem.enum';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit {

  
  // title: string;
  // msg: string;
  // btnOk: boolean = false;
  // erro: boolean = false;
  // alerta: boolean = false;
  // sucesso: boolean = false;
  // tipoMensagem: number;
  obj : any
 

  constructor(public dialogRef: MatDialogRef<MensagemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Mensagem) 
    { 

    }

  ngOnInit(): void {
    this.obj=this.data;
    console.log(this.obj);

  //   if (this.data.tipoMensagem === EnumTipoMensagem.Positivo) {
  //     this.data.sucesso = true;
  //     if (this.data.title === '') { this.data.title = 'Sucesso' }
  // }else if (this.data.tipoMensagem === EnumTipoMensagem.Negativo) {
  //   this.data.erro = true;
  //     if (this.data.title === '') { this.data.title = 'Erro' }
  // }else if (this.data.tipoMensagem === EnumTipoMensagem.Alerta) {
  //   this.data.alerta = true;
  //     if (this.data.title === '') { this.data.title = 'Atenção' }
  // }
  }
  
  
  onClose(){
    this.dialogRef.close();
  }

}



