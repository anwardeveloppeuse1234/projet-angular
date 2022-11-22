import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie.model';
import { AuthService } from '../services/auth.service';
import { SerieService } from '../services/serie.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series! : Serie[]; //un tableau de Serie
  constructor(private serieService: SerieService, 
    public authService: AuthService) {
     //this.series=[];
  }


  
    ngOnInit(): void {
      this.chargerSeries();
      }
      chargerSeries(){
        this.serieService.listeSerie().subscribe(sers => {
        console.log(sers);
        this.series = sers;
      });
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
}
