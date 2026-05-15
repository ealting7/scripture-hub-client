import { ChangeDetectionStrategy, Component, inject, input, Output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../../../core/services/layout.service';

@Component({
  selector: 'sidebar-study',
  imports: [MatIconModule, CommonModule],
  templateUrl: './study.html',
  styleUrl: './study.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Study {

  private layoutService = inject(LayoutService);
  isOpenStudy = input(true);

  public handleSelectNaviationItem(event: Event, navigationItem: string) {
    event.preventDefault();
    this.layoutService.handleSelectNaviationItem(navigationItem);
  }
}
