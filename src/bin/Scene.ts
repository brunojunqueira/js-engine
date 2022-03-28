import { GameObject } from './MonoBehavior'
import { AddScene } from '../contexts/Engine/index';

declare const window:any;

class Scene{
    name: string
    gameobjects?: GameObject []
    path: string
    config: {}

    constructor(dir: string){
        this.name = "Scene";
        this.path = `${dir}\\Scenes\\${this.name}.scn`;
        this.config = {name: this.name, path: this.path, GameObjects: []}
        window.eAPI.createScene(this.path, this.config);
        AddScene(this);
    }
}

export default Scene;