import { inject, Injectable, signal } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LayoutService {

    private router = inject(Router);
    private sidenav!: MatSidenav;
    private isOpen = false;

    public selectedNavigationItem = signal('');

    public setSidenav(sidenav: MatSidenav) {
        this.sidenav = sidenav;
    }

    public toggle(): void {
        this.sidenav.toggle(this.isOpen);
        this.isOpen = !this.isOpen;
    }

    public handleSelectNaviationItem(navigationItem: string) {
        this.setSelectedNavigationItem(navigationItem);
        this.routeToSelectedItem(navigationItem);
    }

    private setSelectedNavigationItem(item: string): void {
        this.selectedNavigationItem.set(item);
    }

    private routeToSelectedItem(item: string): void {
        switch (item) {
            case 'Dashboard':
                this.router.navigate(['/dashboard']);
                break;
            case 'Bible Reader':
                this.router.navigate(['/bible-reader']);
                break;
            case 'My Journal':
                this.router.navigate(['/my-journal']);
                break;
            case 'Sermon Study':
                this.router.navigate(['/sermon-study']);
                break;
            case 'Prayer Tracker':
                this.router.navigate(['/prayer-tracker']);
                break;
            case 'My Groups':
                this.router.navigate(['/my-groups']);
                break;
            case 'Giving Portal':
                this.router.navigate(['/giving-portal']);
                break;
            case 'Marketplace':
                this.router.navigate(['/marketplace']);
                break;
            case 'User Profile':
                this.router.navigate(['/user-profile']);
                break;
            default:
                break;
        }
    }
}
