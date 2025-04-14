import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllMedicineComponent } from "./medicine/all-medicine/all-medicine.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AllMedicineComponent, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'medical-mng-angular';
}
