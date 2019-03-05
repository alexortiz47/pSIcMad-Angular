import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cabecera',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  botonRegistroLogin: boolean;
  botonPerfil: boolean;

  constructor(private router: Router) {
    this.botonRegistroLogin = true;
    this.botonPerfil = false;
  }

  ngOnInit() {
    if(localStorage.token){
      this.botonRegistroLogin = false
      this.botonPerfil = true
    }
  }

  irEvaluate() {
    this.router.navigate(['evaluate'])
  }

  irBuscar() {
    this.router.navigate(['buscar'])
  }

  irRegistro() {
    this.router.navigate(['registro'])
  }

  irLogin() {
    this.router.navigate(['login'])
  }

  irLogeado() {
    this.router.navigate(['logeado'])
  }

  logOut() {
    localStorage.removeItem('token')
    this.botonPerfil = false
    this.botonRegistroLogin = true
    this.router.navigate(['inicio'])
  }

}

