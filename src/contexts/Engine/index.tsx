import { createContext, useState } from 'react';
import { MonoBehavior } from '../../bin/MonoBehavior';
import Project from '../../bin/Project';
import Scene from '../../bin/Scene';

// ----------------------------------------------------- VARIABLES --------------------------------------------------//

const MonoBehaviors = [] as MonoBehavior [];

const Scenes = [] as Scene []

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

// -------------------------------------------------- END VARIABLES -------------------------------------------------//

// ----------------------------------------- EXPORTED UTIL FUNCTIONS SECTION --------------------------------------- //

export function AddMonoBehavior(MonoBehavior : MonoBehavior){
    MonoBehaviors.push(MonoBehavior);
}

export function AddScene(Scene : Scene){
    Scenes.push(Scene);
}

// --------------------------------------- END EXPORTED UTIL FUNCTIONS SECTION ------------------------------------- //

// ----------------------------------------------- PROVIDER SECTION ------------------------------------------------ //

type EngineType = {
    MonoBehaviors: MonoBehavior [], 
    Scenes: Scene [], 
    Time: object, 
    Project: Project, 
    CreateProject: () => void, 
    AddMonoBehavior: (MonoBehavior : MonoBehavior) => void, 
    AddScene: (Scene: Scene) => void
}

export const EngineContext = createContext({} as EngineType);


export function EngineProvider({ children }) {

    const [_thisproject, setProject] = useState(null);

    async function createProject(){
        let path = await window.eAPI.selectDirectory();
        if(path){
            setProject(new Project('Project', path));
        }
    }

    return (
        <EngineContext.Provider value={{ 

                MonoBehaviors: MonoBehaviors, 
                Scenes: Scenes, 
                Time: Time, 
                Project: _thisproject, 
                CreateProject: createProject, 
                AddMonoBehavior: AddMonoBehavior, 
                AddScene: AddScene

            }}>

            { children }

        </EngineContext.Provider>
    )
}

// --------------------------------------------- END PROVIDER SECTION ----------------------------------------------- //


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