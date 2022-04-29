import { Component, Inject } from '@angular/core';
import { MVCTokens } from 'src/app/mvc-backbone/tokens';
import { MVCEngineService } from 'src/app/mvc-backbone/mvcEngine.service';
import { SatellitePanelViewParameters, ConversionUtility, BackendSatelliteData } from 'src/app/utilities/mvcConversions';
import { ValuesForNamePanel } from './panels/satelliteNamePanel.component';

// Based on https://colorlib.com/wp/template/bootstrap-sidebar-03/

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent { 
}
