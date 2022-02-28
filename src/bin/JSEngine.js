const MonoBehaviors = [];

export function AddMonoBehavior(MonoBehavior){
  MonoBehaviors.push(MonoBehavior);
}

export const Time = {
    now: 0,
    deltaTime: 0,
    times: [],
    fps: 0,
    lastFrameTime: 0,
}

export function Update(){    
    window.requestAnimationFrame(() => {
        const now = performance.now();
        while (Time.times.length > 0 && Time.times[0] <= now - 1000) {
            Time.lastFrameTime = Time.times.shift();
        }
            Time.times.push(now);
            Time.fps = Time.times.length;
        Update();
    });    
}

export async function CreateProject(){
    let dir = await window.eAPI.selectDirectory();
}