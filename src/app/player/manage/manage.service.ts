import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Race } from '../Interface/race.interface';
import { Data } from 'src/app/_shared/interface/data.interface';
import { HttpService } from 'src/app/_shared/http.service';
import { Player } from '../Interface/player.interface';

@Injectable({
    providedIn: 'root'
})
export class ManageCharactersService {

    public createPlayerForm = this._formBuilder.group({
        id: [''],
        name: ['', Validators.required],
    });


    constructor(private _http: HttpService, private _formBuilder: FormBuilder) { }

    GetCharacters(id: string): Observable<string> {
        return this._http.post('http://localhost:62640/api/Account/Profile', id);
    }



}
