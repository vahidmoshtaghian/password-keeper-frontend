import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-identity-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './identity-layout.component.html',
  styleUrl: './identity-layout.component.scss'
})
export class IdentityLayoutComponent { }
