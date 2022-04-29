import { Component, Input } from '@angular/core';

@Component({
    selector: 'sidebar-buttons',
    templateUrl: './sidebarButtons.component.html'
})
export class SidebarButtonsComponent {
    @Input() texturePath: string;

    public get TexturePath() {
        return this.texturePath;
    }
}
