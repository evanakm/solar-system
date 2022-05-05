import { Component, Inject, OnInit } from '@angular/core';
import { MVCTokens } from 'src/app/mvc-backbone/tokens';
import { MVCEngineService } from 'src/app/mvc-backbone/mvcEngine.service';
import { SatellitePanelViewParameters, ConversionUtility, BackendSatelliteData } from 'src/app/utilities/mvcConversions';
import { ValuesForNamePanel } from './panels/satelliteNamePanel.component';
import * as jQuery from 'jquery';

// Based on https://colorlib.com/wp/template/bootstrap-sidebar-03/

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit { 
    ngOnInit() {
      (function($) {

          "use strict";
        
          var fullHeight = function() {
        
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function(){
              $('.js-fullheight').css('height', $(window).height());
            });
        
          };
          fullHeight();
        
          $('#sidebarCollapse').on('click', function () {
              $('#sidebar').toggleClass('active');
          });
        
        })(jQuery);
    }
}
