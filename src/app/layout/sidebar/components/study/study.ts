import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidebar-study',
  imports: [MatIconModule, CommonModule],
  templateUrl: './study.html',
  styleUrl: './study.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Study {

  isOpen = input(true);
}
