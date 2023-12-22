import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-organizations-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './organizations-list.component.html',
  styleUrl: './organizations-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationsListComponent { }
