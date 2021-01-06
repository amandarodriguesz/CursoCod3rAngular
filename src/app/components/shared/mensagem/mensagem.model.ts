import { EnumTipoMensagem } from "./tipo-mensagem.enum";

export class Mensagem{

    public erro?: boolean = false;
    public alerta?: boolean = false;
    public sucesso?: boolean = false;


    constructor(public msg: string,
                public tipoMensagem: EnumTipoMensagem = EnumTipoMensagem.Positivo,
                public btnOk : boolean = false,
                public title: string = ''
                ){
                    if (tipoMensagem === EnumTipoMensagem.Positivo) {
                        this.sucesso = true;
                        if (this.title === '') { this.title = 'Sucesso' }
                    }
                    if (tipoMensagem === EnumTipoMensagem.Negativo) {
                        this.erro = true;
                        if (this.title === '') { this.title = 'Erro' }
                    }
                    if (tipoMensagem === EnumTipoMensagem.Alerta) {
                        this.alerta = true;
                        if (this.title === '') { this.title = 'Atenção' }
                    }                        
    }
}