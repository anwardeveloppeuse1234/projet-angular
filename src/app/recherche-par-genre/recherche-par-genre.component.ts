import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';

import { Serie } from '../model/serie.model';

import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styles: [
  ]
})
export class RechercheParGenreComponent implements OnInit {
  series! : Serie[];
  IdGenre! : number;
  genres! : Genre[];
  constructor(private serieService:SerieService ) { }

  ngOnInit(): void {
    this.serieService.listeGenres().subscribe(gens => {this.genres = gens._embedded.genres;
    console.log(gens);
    });
    }
    onChange() {
      this.serieService.rechercherParGenre(this.IdGenre).
      subscribe(sers =>{this.series=sers});
      }

      

}
