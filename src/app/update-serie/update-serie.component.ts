import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/genre.model';

import { Serie } from '../model/serie.model';

import { SerieService } from '../services/serie.service';


@Component({
  selector: 'app-update-serie',
  templateUrl: './update-serie.component.html',
  styles: [
  ]
})
export class UpdateSerieComponent implements OnInit {
  currentSerie = new Serie();
  genres! : Genre[];
updatedGenId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,

    private serieService: SerieService) { }

    ngOnInit(): void {
      this.serieService.listeGenres().
      subscribe(gens => {this.genres = gens._embedded.genres;
      console.log(gens);
      });
      this.serieService.consulterSerie(this.activatedRoute.snapshot.params['id']).
      subscribe( ser =>{ this.currentSerie = ser;
      this.updatedGenId =
      this.currentSerie.genre.idGen;
      } ) ;}
      updateSerie() {
        this.currentSerie.genre = this.genres.
       find(gen => gen.idGen == this.updatedGenId)!;
       this.serieService.updateSerie(this.currentSerie).subscribe(ser => {
      this.router.navigate(['series']); }
       );

        }



}
