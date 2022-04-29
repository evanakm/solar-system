import { Controller } from '../controller/controller';
import { Subject, Observable } from 'rxjs';

export class ControlModel {

    private uidOfSelected: string;
    private onSelectedBodyChanged: Subject<string> = new Subject<string>();

    constructor(initialSelectedId: string) {
        this.uidOfSelected = initialSelectedId;
    }

    public get onSelectedBodyChanged$(): Observable<string> {
        return this.onSelectedBodyChanged.asObservable();
    }

    public get SelectedID(): string {
        return this.uidOfSelected;
    }

    public set SelectedID(value: string) {
        this.uidOfSelected = value;
        this.onSelectedBodyChanged.next(this.uidOfSelected);
    }

}