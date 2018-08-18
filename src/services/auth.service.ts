import { LocalUser } from './../models/local_user';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from './../models/credenciais.dto';
import { Injectable } from "@angular/core";
import { StorageService } from './storage.service';

@Injectable()
export class AuthService{

    constructor(public http: HttpClient, public storage: StorageService){

    }

    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text' //uso text pois não tenho corpo só header, assim não terei erro de parse json
            });
    }

    //precisa receber um argumento que é o Beader token
    successfulLogin(authorizationValue: string){
        let tok =  authorizationValue.substring(7); //assim tiro a palavra Beader espaço e deixo só o token
        let user : LocalUser = { //local user recebe o token
            token: tok
        };
        this.storage.setLocalUser(user); //assim guardo o usuário no LocalStorage
    }

    logout(){ //o logout vai lá no Storage e remove o usuário
        this.storage.setLocalUser(null);
    }
}