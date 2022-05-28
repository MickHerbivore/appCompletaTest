import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  public form: FormGroup;

  constructor( private fb: FormBuilder, private service: UsuarioService ) {
    this.form = this.fb.group({
      name: [''],
      age: [''],
      email: ['']
    })
  }

  ngOnInit(): void {
  }

  crearUsuario() {

    let usuario: User = {
      name: this.form.get('name')?.value,
      age: this.form.get('age')?.value,
      email: this.form.get('email')?.value
    }

    this.service.crearUsuario(usuario).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error)      
    })
  }

}
