import MonoBehavior from "./MonoBehavior";
import Scene from "./Scene"

declare const window : any;

type configuration = {
    name: string,
    path: string,
    sceneLoaded: Scene,
    scenes: Scene [],
    monobehaviors: MonoBehavior[]
}

class Project{

    name: string
    path: string
    sceneLoaded: Scene
    scenes?: Scene []
    config: {
        name: string,
        path: string,
        sceneLoaded: Scene,
        scenes: Scene [],
        monobehaviors: MonoBehavior[]
    }
    
    constructor(name: string = null, path: string = null, config: configuration = null){
        if(!config){
            this.name = name;
            this.path = `${path}\\${name}`;
            this.sceneLoaded = new Scene(this.path);
            this.scenes = [this.sceneLoaded];
            this.config = { name: this.name, path: this.path, sceneLoaded: this.sceneLoaded, scenes: this.scenes, monobehaviors: []};
            window.eAPI.saveProject(this.config, this.path);
        }
        else{
            this.name = config.name;
            this.path = config.path;
            this.sceneLoaded = config.sceneLoaded;
            this.scenes = config.scenes;
            this.config = config;
        }
    }
    
    saveProject(){
        window.eAPI.saveProject(this.config, this.path);
    }

    addMonobehavior(MonoBehavior: MonoBehavior){
        this.config.monobehaviors.push(MonoBehavior);
    }
}

export default Project;