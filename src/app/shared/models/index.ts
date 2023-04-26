export class userCreate{
    id: string = "";
    name: string = "";
    email: string = "";
    senha: string = "";
    contato: string = "";
}
export class userLogin{
    email: string = "";
    senha: string = "";
}
export class userEdit{
    name: string = "";
    email: string = "";
    senha: string = "";
    contato: string = "";
}

export class imovelCreate{
    status: string = "";
    image: string = "";
    name: string = "";
    description: string = "";
    valor_compra: string = "";
    valor_venda: string = "";
}

export class imovelUpdate{
    status: string = "";
    name: string = "";
    description: string = "";
    valor_compra: string = "";
    valor_venda: string = "";
}
