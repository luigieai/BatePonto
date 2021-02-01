import login from './login';
export default class Api {
    debugMode : boolean;
    constructor(debugMode: boolean) {
        this.debugMode = debugMode;
    }

    //TODO: Pensar direitinho se vale a pena fazer um módulo diferente para Login
    async login(email: string, password: string) {
        login(email, password, this.debugMode);
    }
}