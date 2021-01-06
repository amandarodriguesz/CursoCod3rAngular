import { Mensagem } from './../shared/mensagem/mensagem.model';
import { MensagemComponent } from './../shared/mensagem/mensagem.component';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EnumTipoMensagem } from '../shared/mensagem/tipo-mensagem.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private http: HttpClient) { }

    showMessageSucess(msg : Mensagem): void{
      const dialogRef  = this.dialog.open(MensagemComponent, 
        {data: {title: msg.title,
        msg: msg.msg,
        btnOk: false,
        sucesso: true
      }});

      dialogRef.afterOpened().subscribe( a => {
        setTimeout(() => {
          dialogRef.close();
        }, 3000);
      })

      
    }

    showMessageAlerta(msg : Mensagem): void{
      const dialogRef  = this.dialog.open(MensagemComponent, 
        {data: {title: msg.title,
        msg: msg.msg,
        tipoMensagem: EnumTipoMensagem.Alerta,
        btnOk: true,
        alerta: true}
      });

      dialogRef.afterOpened().subscribe( a => {
        setTimeout(() => {
          dialogRef.close();
        }, 3000);
      })
    }

    showMessageErro(msg : Mensagem): void{
      const dialogRef  = this.dialog.open(MensagemComponent, 
        {data: {title: msg.title,
        msg: msg.msg,
        tipoMensagem: EnumTipoMensagem.Negativo,
        btnOk: true,
        erro: true}
      });

      dialogRef.afterOpened().subscribe( a => {
        setTimeout(() => {
          dialogRef.close();
        }, 3000);
      })
    }

      
    // this.snackBar.open(msg, 'X',{
    //   duration:3000,
    //   horizontalPosition: "right",
    //   verticalPosition: "top",
    //   panelClass: isError ? ['msg-error'] : ['msg-success']
    // })

  create(product : Product) : Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any) : Observable<any>{
    this.showMessageErro(new Mensagem('Ocorreu um erro !',EnumTipoMensagem.Negativo))
    return   EMPTY ;
  }

  read() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id:string): Observable <Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number) : Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
}
