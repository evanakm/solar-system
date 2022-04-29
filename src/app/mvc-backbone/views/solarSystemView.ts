import { Scene, WebGLRenderer } from 'three';
import { CameraModel } from '../models/cameraModel.js';
import { SolarSystemModel } from '../models/solarSystemModel.js';

export class SolarSystemView {
    private scene: Scene = new Scene();
    private renderer: WebGLRenderer = new WebGLRenderer({ antialias: true });
    private time: number = 0;
    private startTime = performance.now();

    constructor(private ssModel: SolarSystemModel, private cameraModel: CameraModel) {
        this.cameraModel = cameraModel;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.ssModel.Sun.addToScene(this.scene);
    }

    public get Scene(): Scene {
        return this.scene;
    }

    public get Renderer(): WebGLRenderer {
        return this.renderer;
    }

    public get Canvas(): HTMLCanvasElement {
        return this.renderer.domElement;
    }

    public setAspectRatio(aspectRatio: number): void {
        this.cameraModel.setAspectRatio(aspectRatio);
    }

    // TODO. Needed to access ssModel.
    public addSatellite(idOfPrimary: string, satelliteRadius: number, rotationalSpeed: number,
        orbitalRadius: number, orbitalPhase: number, texturePath: number) {

    }

    // Draw the scene every time the screen is refreshed
    public animate(): void {
        requestAnimationFrame(this.animate.bind(this));
    
        this.ssModel.Sun.update(this.time);
        this.cameraModel.update(this.time);
        this.time = (performance.now() - this.startTime) * 0.001;
    
        this.renderer.render(this.scene, this.cameraModel.Camera);
    };
    
}
