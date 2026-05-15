import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { LayoutService } from '../../../../core/services/layout.service';

@Component({
  selector: 'header-selected-navigation',
  imports: [],
  templateUrl: './selected-navigation.html',
  styleUrl: './selected-navigation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedNavigation {

  private layoutService = inject(LayoutService);
  public selectedNaviagation = this.layoutService.selectedNavigationItem;
}
