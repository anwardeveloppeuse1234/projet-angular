import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie.model';


import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
nomSerie!:string ;
series!:Serie[];
allSeries! : Serie[];
searchTerm!: string;
  constructor(private serieService :SerieService  ) { }

  ngOnInit(): void {this.serieService.listeSerie().subscribe(sers => {
    console.log(sers);
    this.series = sers;
    });
  }
  rechercherSers(){
    this.serieService.rechercherParNom(this.nomSerie).
subscribe(sers => {
this.series = sers;
console.log(sers)});
   
    }
  onKeyUp(filterText : string){
    this.series = this.allSeries.filter(item =>item.nomSerie!.toLowerCase().includes(filterText));
  }
      
  supprimerSerie(p: Serie)
      {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
         this.serieService.supprimerSerie(p.idSerie!).subscribe(() => {
         console.log("serie supprimé");
         this.chargerSeries();
      });
      } 
    
      chargerSeries(){
        this.serieService.listeSerie().subscribe(sers => {
        console.log(sers);
        this.series = sers;
      });
      }


}
