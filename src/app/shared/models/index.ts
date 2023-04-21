export class IUserCreate{
    id: string = "";
    name: string = "";
    email: string = "";
    senha: string = "";
    contato: string = "";
}

export class IUserLogin{
    email: string = "";
    senha: string = "";
}
