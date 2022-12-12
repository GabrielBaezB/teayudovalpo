import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

datos:FormGroup;

constructor(private http:HttpClient){
this.datos = new FormGroup({
  nombre: new FormControl('', [Validators.required]),
  correo: new FormControl('', [Validators.required, Validators.email]),
  mensaje: new FormControl('', [Validators.required])
})
}

enviarcorreo(){

  Notiflix.Loading.pulse('Cargando...');

  let params = {
    email: this.datos.value.correo,
    nombre: this.datos.value.nombre,
    mensaje: this.datos.value.mensaje
  };
  console.log(params);
  this.http.post('https://teayudovalpo.cl:8000/api/v1/enviar', params)
  .subscribe((res) => {
    
  });
  Notiflix.Loading.remove();
  Notiflix.Notify.success('Enviado Correctamente');

  this.datos.reset();

}

  ngOnInit(): void {
  }
}
