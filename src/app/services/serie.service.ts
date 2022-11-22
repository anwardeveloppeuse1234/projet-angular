import { Injectable } from '@angular/core';
import { Genre } from '../model/genre.model';
import { Serie } from '../model/serie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { apiURL } from '../config';
import { GenreWrapper } from '../model/GenreWrapped.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
providedIn: 'root'
})
export class SerieService {
  apiURLGen: string = 'http://localhost:8008/series/gen' ;
 
  
  
  
    
  
series! : Serie[];
serie! : Serie; //un tableau de Serie
  
//serie! : Serie;
// genres : Genre[];
constructor(private http : HttpClient ,
            private authService: AuthService) {
// this.genres = [ {idGen : 1, nomGen : "PC"},
// {idGen : 2, nomGen : "Imprimante"}];
// this.series = [
// { idSerie : 1, nomSerie : "PC Asus", prixSerie : 3000.600,
// dateCreation : new Date("01/14/2011"), genre : {idGen : 1, nomGen : "PC"}},
// { idSerie : 2, nomSerie : "Imprimante Epson", prixSerie : 450,
// dateCreation : new Date("12/17/2010"), genre : {idGen : 2, nomGen : "Imprimante"}},
// { idSerie : 3, nomSerie :"Tablette Samsung", prixSerie : 900.123,
// dateCreation : new Date("02/20/2020"),genre : {idGen : 1, nomGen : "PC"}}
// ];
}
listeSerie(): Observable<Serie[]>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Serie[]>(apiURL+"/all", {headers:httpHeaders});

  }
  ajouterSerie( ser: Serie):Observable<Serie>{
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.post<Serie>(apiURL, ser, {headers:httpHeaders});

    }
    supprimerSerie(id : number) {
      const url = `${apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});

      }
      consulterSerie(id: number): Observable<Serie> {
        const url = `${apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Serie>(url,{headers:httpHeaders});

        }
        updateSerie(ser :Serie) : Observable<Serie>
        {
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.put<Serie>(apiURL, ser, {headers:httpHeaders});
          
        }
        listeGenres():Observable<GenreWrapper>{
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
     return this.http.get<GenreWrapper>(this.apiURLGen,{headers:httpHeaders});

          }
          rechercherParGenre(idGen: number):Observable< Serie[]> {
            const url = `${apiURL}/sersgen/${idGen}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
             return this.http.get<Serie[]>(url,{headers:httpHeaders});
            }
            rechercherParNom(nom: string):Observable< Serie[]> {
              const url = `${apiURL}/sersByName/${nom}`;
              return this.http.get<Serie[]>(url);
              }
              ajouterGenre( gen: Genre):Observable<Genre>{
                
                return this.http.post<Genre>(this.apiURLGen, gen, httpOptions);
                }

                supprimerGenre(id : number) {
                  const url = `${this.apiURLGen}/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.delete(url, {headers:httpHeaders});
                }
            
  

 

   
  
  //updateSerie(p:Serie)
  //{
  // console.log(p);
  //this.supprimerSerie(p);
  //this.ajouterSerie(p);
        }
  
  







  
    

  
  



