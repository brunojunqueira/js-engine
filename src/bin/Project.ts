import Scene from "./Scene"

export default class Project{
    name: string
    path: string
    sceneLoaded: Scene
    scenes?: Scene []
    config: {
        name: string,
        path: string,
        sceneLoaded: Scene,
        scenes: Scene []
    }
    

    constructor(name: string, dir: string){
        this.name = name;
        this.path = dir;
        this.sceneLoaded = new Scene(this.path);
        this.scenes = [this.sceneLoaded];
        this.config = { name: this.name, path: this.path, sceneLoaded: this.sceneLoaded, scenes: this.scenes };
    }
    
}