import { SatelliteBackEndParameters, SatelliteFrontEndParameters } from "../models/satelliteModel";
import { SolarSystemModel } from "../models/solarSystemModel";
import { BackendSatelliteData, SatelliteDataWrapper, ConversionUtility } from "../../utilities/mvcConversions";
import { Subject, Observable } from 'rxjs';
import { ControlModel } from '../models/controlModel';

export class Controller {

    constructor(private solarSystemModel: SolarSystemModel, private controlModel: ControlModel) {
    }

    public acceptFrontEndParametersForId(params: SatelliteFrontEndParameters, id: string) {
        const data: BackendSatelliteData = {
            name: this.solarSystemModel.getNameFromId(id),
            params: ConversionUtility.frontEndToModelParams(params),
            uid: id,
            texturePath: this.solarSystemModel.getTexturePathForId(id)
        }

        this.setParameters(data);
    }

    public setParameters(data: BackendSatelliteData): void {
        this.solarSystemModel.setSatelliteParams(data);
    }

    public setSelectedSatellite(uid: string) {
        this.controlModel.SelectedID = uid;
    }

    // TODO
    public createNewSatellite(satelliteId: string, primaryId: string, satelliteName: string, satelliteParameters: SatelliteBackEndParameters): void {
    }

    // TODO
    public renameSatellite(satelliteId: string, newName: string): void {
    }

}
