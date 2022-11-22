import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { SerieService } from '../services/serie.service';
import { UpdateGenreComponent } from '../update-genre/update-genre.component';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
  styles: [
  ]
})
export class ListeGenresComponent implements OnInit {
  genres! : Genre[];
  updatedGen:Genre = {"idGen":0,"nomGen":""};
  ajout:boolean=true;


  constructor(private serieService : SerieService) { }

  ngOnInit(): void {this.serieService.listeGenres().
    subscribe(gens => {this.genres = gens._embedded.genres;
    console.log(gens);
    });
  }
  updateGen(gen:Genre){
    this.updatedGen=gen;
    this.ajout=false;
  }
  genreUpdated(gen:Genre){
    console.log("Gen updated event",gen);
    this.serieService.ajouterGenre(gen).
     subscribe( ()=> this.chargerGenres());
    }
  chargerGenres(): void {
    this.serieService.listeGenres().
      subscribe(gens => {this.genres = gens._embedded.genres;
      console.log(gens);
      });
    }

    supprimerGenre(g: Genre)
      {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
         this.serieService.supprimerGenre(g.idGen!).subscribe(() => {
         console.log("genre supprimé");
         this.chargerGenres();
      });
      } 

}

