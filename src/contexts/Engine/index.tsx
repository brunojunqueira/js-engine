import { createContext, useState } from 'react';
import MonoBehavior from '../../bin/MonoBehavior';
import Project from '../../bin/Project';
import Scene from '../../bin/Scene';


//#region -------------------------------------------------- VARIABLES -----------------------------------------------------//

var MonoBehaviors = [] as MonoBehavior [];

var Scenes = [] as Scene []

declare const window: any;

let control = {
    stop: false,
    times: [],
    now: 5,
    deltaTime: 0,
    fps: 0,
    lastFrameTime: 0,
}

const Time = {
    now: () => {return control.now},
    deltaTime: () => {return control.deltaTime},
    lastFrameTime: () => {return control.lastFrameTime}
}

//#endregion

//#region ----------------------------------------- EXPORTED UTIL FUNCTIONS SECTION ----------------------------------------//

export function AddMonoBehavior(MonoBehavior : MonoBehavior){
    MonoBehaviors.push(MonoBehavior);
}

export function AddScene(Scene : Scene){
    Scenes.push(Scene);
}

//#endregion

//#region ----------------------------------------------- PROVIDER SECTION ------------------------------------------------ //

type EngineType = {
    MonoBehaviors: MonoBehavior [], 
    Scenes: Scene [], 
    Time: object, 
    Project: Project, 
    ResetProject: () => void,
    CreateProject: (name: string, path: string) => void, 
    OpenProject: () => void,
    SaveProject: () => void,
    AddMonoBehavior: (MonoBehavior : MonoBehavior) => void, 
    AddScene: (Scene: Scene) => void
}

export const EngineContext = createContext({} as EngineType);


export function EngineProvider({ children }) {

    const [_thisproject, setProject] = useState(null);

    function createProject(name: string, path){
        if(path){
            setProject(new Project(name, path));
        }
    }

    async function openProject() {
        setProject(null);
        let path = await window.eAPI.selectDirectory();
        if(path){
            let config = await window.eAPI.openProject(path);
            Scenes = config.scenes;
            if(config) setProject(new Project(null, null, config));
        }
        
    }

    function saveProject(){
        _thisproject.saveProject();
    }

    function resetProject(){
        setProject(null);
    }

    return (
        <EngineContext.Provider value={{ 

                MonoBehaviors: MonoBehaviors, 
                Scenes: Scenes, 
                Time: Time, 
                Project: _thisproject, 
                ResetProject: resetProject,
                CreateProject: createProject, 
                OpenProject: openProject,
                SaveProject: saveProject,
                AddMonoBehavior: AddMonoBehavior, 
                AddScene: AddScene

            }}>

            { children }

        </EngineContext.Provider>
    )
}

//#endregion --------------------------------------------- END PROVIDER SECTION ----------------------------------------------- //


// function Start(){    
//     window.requestAnimationFrame(() => {
//         const now = performance.now();
//         while (control.times.length > 0 && control.times[0] <= now - 1000) {
//             control.lastFrameTime = control.times.shift();
//         }
//             control.times.push(now);
//             control.fps = control.times.length;
//             if(control.stop){
//                 return;
//             }
//         Start();
//     });
// }