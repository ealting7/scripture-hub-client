import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({ providedIn: 'root' })
export class LayoutService {

    private sidenav!: MatSidenav;
    private isOpen = false;

    public setSidenav(sidenav: MatSidenav) {
        this.sidenav = sidenav;
    }

    public toggle(): void {
        this.sidenav.toggle(this.isOpen);
        this.isOpen = !this.isOpen;
    }
}
