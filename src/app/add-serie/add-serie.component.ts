import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';
import { Serie } from '../model/serie.model';
import { SerieService } from '../services/serie.service';
@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {
  newSerie = new Serie();
  message!: string;
  genres! : Genre[];
   newIdGen! : number;
  newGenre! : Genre;
  constructor(private serieService: SerieService ,private router :Router)  { }

  ngOnInit() {this.serieService.listeGenres().
    subscribe(gens => {this.genres = gens._embedded.genres;
    console.log(gens);
    });
    }
    
  
  addSerie(){
    this.newSerie.genre = this.genres.find(gen => gen.idGen == this.newIdGen)!;
    this.serieService.ajouterSerie(this.newSerie).subscribe(ser => {
    console.log(ser);
    this.router.navigate(['series']);
   });
    }
    
    

}
