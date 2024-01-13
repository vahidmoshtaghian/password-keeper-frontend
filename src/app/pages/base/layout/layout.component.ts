import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    SidebarModule,
    MenuModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: "Account Info",
        icon: "pi pi-user-edit"
      },
      {
        label: "Friends List",
        icon: "pi pi-users"
      },
      {
        label: '<span style="color: var(--red-600)">Log Out</span>',
        escape: false,
        icon: "pi pi-sign-out",
        iconClass: "red",
        routerLink: '/account/sign-in'
      },
    ]
  }

}
