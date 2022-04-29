// import React, { useContext, useRef, useState } from 'react';
// import './planetPanelStyle.scss';
// import './planetSliderStyle.scss'
// import { debounce, throttle } from 'lodash';

import { Component, Input, Inject } from '@angular/core';
import { MVCTokens } from 'src/app/mvc-backbone/tokens';
import { MVCEngineService } from 'src/app/mvc-backbone/mvcEngine.service';

@Component({
    selector: 'satellite-slider',
    templateUrl: './satelliteSlider.component.html',
    styleUrls: ['./satelliteSlider.component.scss']
})
export class SatelliteSliderComponent {
    @Input() value: number;
    @Input() minValue: number;
    @Input() maxValue: number;
    @Input() uid: string; // Needed to send to the Controller
    @Input() notation: string;
    @Input() callback: (value: number) => void;

    public sliderVal: number;
    public sliderMin: number;
    public sliderMax: number;
    public note: string;

    constructor(@Inject(MVCTokens.MVCEngineServiceToken) private mvc: MVCEngineService) {        
        this.sliderVal = this.value;
        this.sliderMin = this.minValue;
        this.sliderMax = this.maxValue;
        this.note = this.notation;
    }

    rangeSlide(e): void {
        this.sliderVal = e;
        this.callback(this.sliderVal);
        //this.mvc.Controller.acceptFrontEndParametersForId({}, this.uid)
    }


}


// export interface SliderProps {
//     value: number;
//     minValue: number;
//     maxValue: number;
//     uid: string;
//     notation: string;
//     callback: (value: number) => void;
// }

// const PlanetSlider = (props: SliderProps) => {
//     const ref = useRef(null);

//     const [state, updateState] = useState(props.value);

//     //const debouncedCallback = throttle(props.callback, 1000);

//     const rangeSlide = (value: string, targetRef: React.MutableRefObject<any>) => {
//         updateState(() => parseInt(value));
//         targetRef.current.innerHTML = state;
//         props.callback(parseInt(value));
//         //debouncedCallback(parseInt(value));
//     }

//     const debouncedRangeSlide = debounce(rangeSlide, 20);

//     return(
//         <React.Fragment>
//             <tr>
//                 <td className="slidercontainercell">
//                     <input
//                         className="range"
//                         type="range"
//                         name=""
//                         value={state}
//                         min={props.minValue}
//                         max={props.maxValue}
//                         onChange={(e) => debouncedRangeSlide(e.currentTarget.value, ref)}
//                         //</td>onMouseMove={(e) => debouncedRangeSlide(e.currentTarget.value, ref)}
//                         >
//                     </input>
//                 </td>
//                 <td rowSpan={2} className="rangevalue" ref={ref}>
//                     {state}
//                 </td>
//             </tr>
//             <tr>
//                 <td className="bodynote">
//                     {props.notation}
//                 </td>
                
//             </tr>
//         </React.Fragment>

//     );

// }

// export default PlanetSlider;
