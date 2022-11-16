import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

datos:FormGroup;

constructor(private httpclient:HttpClient){
this.datos = new FormGroup({
  nombre: new FormControl('', [Validators.required]),
  correo: new FormControl('', [Validators.required, Validators.email]),
  mensaje: new FormControl('', [Validators.required])
})
}

enviarcorreo(){

  let params = {
    email: this.datos.value.correo,
    nombre: this.datos.value.nombre,
    mensaje: this.datos.value.mensaje
  }
  console.log(params);
  // this.httpclient.post('http://localhost:3000/envio', params );

}
  
  ngOnInit(): void {
  }

}
