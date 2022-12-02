import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSerieComponent } from './add-serie/add-serie.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { LoginComponent } from './login/login.component';
import { SerieGuard } from './serie.guard';

import { SeriesComponent } from './series/series.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

import { UpdateSerieComponent } from './update-serie/update-serie.component';

const routes: Routes = [{path: "series", component : SeriesComponent},
{path : "add-serie", component : AddSerieComponent, canActivate:[SerieGuard]},
{ path: "", redirectTo: "series", pathMatch: "full" },
{path: "rechercheParNom", component : RechercheParNomComponent},
{path: "rechercheParGenre", component : RechercheParGenreComponent},
{path: "listeGenres", component : ListeGenresComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
{path: "updateSerie/:id", component: UpdateSerieComponent,canActivate:[SerieGuard]}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
