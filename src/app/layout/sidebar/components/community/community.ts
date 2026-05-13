import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'sidebar-community',
  imports: [MatIconModule, CommonModule],
  templateUrl: './community.html',
  styleUrl: './community.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Community {

  isOpen = input(true);
}
