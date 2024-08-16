import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule, 
    MatSnackBarModule],
    templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})

export class BannerComponent {
  constructor(private snackBar: MatSnackBar) {}

  dismiss() {
    this.snackBar.open('Banner dismissed', 'Close', {
      duration: 2000,
    });
  }
}
  