import MonoBehavior from "./MonoBehavior";
import Scene from "./Scene"

declare const window : any;

type configuration = {
    name: string,
    path: string,
    sceneLoaded: Scene,
    monobehaviors: MonoBehavior[]
}

class Project{

    name: string
    path: string
    sceneLoaded: Scene
    config: {
        name: string,
        path: string,
        sceneLoaded: Scene,
        monobehaviors: MonoBehavior[]
    }
    
    constructor(name: string = null, path: string = null, config: configuration = null){
        if(!config){
            this.name = name;
            this.path = `${path}\\${name}`;
            this.sceneLoaded = new Scene(this.path);
            this.config = { name: this.name, path: this.path, sceneLoaded: this.sceneLoaded, monobehaviors: []};
            window.eAPI.saveProject(this.config, this.path);
        }
        else{
            this.name = config.name;
            this.path = config.path;
            this.sceneLoaded = config.sceneLoaded;
            this.config = config;
        }
    }
    
    saveProject(){
        window.eAPI.saveProject(this.config, this.path);
    }

    addMonobehavior(MonoBehavior: MonoBehavior){
        this.config.monobehaviors.push(MonoBehavior);
    }
    deleteMonobehavior(MonoBehavior: MonoBehavior){
        for(let i = 0; i < this.config.monobehaviors.length; i++){
            if(MonoBehavior === this.config.monobehaviors[i]){
                this.config.monobehaviors.splice(i);
            }
        }
    }
}

export default Project;