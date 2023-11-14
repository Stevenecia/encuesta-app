import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-encuestahome',
  templateUrl: './encuestahome.component.html',
  styleUrls: ['./encuestahome.component.sass']
})
export class EncuestahomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirigir(event: any) {
    const opcionSeleccionada = event.target.value;

    if (opcionSeleccionada === '1') {
      this.router.navigate(['/encuesta1home']);
    } else if (opcionSeleccionada === '2') {
      this.router.navigate(['/encuesta2home']); 
    } else if (opcionSeleccionada === '3') {
      this.router.navigate(['/encuesta3home']); 
    }
  }


}
