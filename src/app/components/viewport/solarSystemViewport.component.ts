import { Component, Inject } from '@angular/core';
import { MVCTokens } from 'src/app/mvc-backbone/tokens';
import { MVCEngineService } from 'src/app/mvc-backbone/mvcEngine.service';
import { SolarSystemView } from 'src/app/mvc-backbone/views/solarSystemView';

@Component({
    selector: 'solar-system-viewport',
    templateUrl: './solarSystemViewport.component.html',
    styleUrls: ['./solarSystemViewport.component.scss']
})
export class SolarSystemViewportComponent {

    private ssView: SolarSystemView;

    constructor(@Inject(MVCTokens.MVCEngineServiceToken) private mvc: MVCEngineService) {
        this.ssView = new SolarSystemView(mvc.SolarSystemModel, mvc.CameraModel);

        this.updateCanvas();
      
        window.addEventListener('resize', () => {
            this.updateCanvas();
        });

    }

    private updateCanvas() {
        const contWidth = window.innerWidth;
        const contHeight = window.innerHeight;

        (document.getElementById('solar-system').firstElementChild as HTMLElement).style.width=contWidth.toString()+'px';
        (document.getElementById('solar-system').firstElementChild as HTMLElement).style.height=contHeight.toString()+'px';


        this.ssView.setAspectRatio(contWidth / contHeight);
        this.ssView.Renderer.setSize(contWidth, contHeight);
        this.ssView.animate();
    }

}
  