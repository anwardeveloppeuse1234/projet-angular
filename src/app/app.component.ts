import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Mes series';
  constructor (public authService: AuthService ,private router:Router) {}
    ngOnInit () {
      this.authService.loadToken();
if (this.authService.getToken()==null || this.authService.isTokenExpired())
  this.router.navigate(['/login']);
  //this.router.navigate(["series"])

    }
  onLogout(){
    this.authService.logout();
  }
}
