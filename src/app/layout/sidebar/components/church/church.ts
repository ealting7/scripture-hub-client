import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'sidebar-church',
  imports: [MatIconModule, CommonModule],
  templateUrl: './church.html',
  styleUrl: './church.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Church {

  isOpen = input(true);
}
