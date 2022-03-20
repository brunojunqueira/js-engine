import { hypotenuse, module } from "./AuxMath"
import { defaultGravity } from "./utils";
import { AddMonoBehavior } from "../contexts/Engine";

class MonoBehavior {
    Start: () => void = () => {}
    Update: () => void = () => {}
    FixedUpdate?: () => void
    LateUpdate?: () => void
    gameObjects?: GameObject []
    
    constructor(){
        AddMonoBehavior(this);
    }
}

export class GameObject{
    transform: Transform
    id: number
    body: HTMLElement
    rigidBody?: RigidBody
    name: string
    scripts?: HTMLScriptElement[]
    children?: GameObject []
    controller?: Controller
    destroy?: () => void

    constructor(id: number){
        this.transform = new Transform();
        this.id = id;
        this.name = 'GameObject#' + id;
    }
    
    getAngleToTarget(target: GameObject){
        let myPos = this.transform.position;
        let targetPos = target.transform.position;
        let diffY = myPos.y - targetPos.y;
        let diffX = targetPos.x - myPos.x ;
        let hipotenusa = hypotenuse(diffX, diffY);
        let seno = diffY/hipotenusa; 
        let cosseno = diffX/hipotenusa;
        let degree: number = 0;

        if      ((seno > 0 && cosseno > 0) || (seno === 1 && cosseno === 0)) degree = seno * 90;
        else if ((seno > 0 && cosseno < 0) || (seno === 0 && cosseno ===-1)) degree = 90  + module(cosseno * 90);
        else if ((seno < 0 && cosseno < 0) || (seno ===-1 && cosseno === 0)) degree = 180 + module(seno * 90);
        else if ((seno < 0 && cosseno > 0) || (seno === 0 && cosseno === 1)) degree = 270 + cosseno * 90;

        return degree;
    }

    getDistanceToTarget(target: GameObject){
        let myPos = this.transform.position;
        let targetPos = target.transform.position;        
        let diffY = myPos.y - targetPos.y;
        let diffX = targetPos.x - myPos.x ;
        let hipotenusa : number = hypotenuse(diffX, diffY);
        return hipotenusa;
    }

}

export class Transform {
    position: {
        x: number,
        y: number,
        z?: number,
    }
    size: {
        x: number,
        y: number,
        z?: number,
    }
    rotation: number = 0;

    constructor() { 
        this.size = { x: 1, y: 1}        
        this.position = { x: 0, y: 0, z: 1}
    }   
}

export class RigidBody {
    gameObject: GameObject
    transform: Transform
    velocity: number
    mass: number
    gravity: number

    constructor(gameObject: GameObject){
        this.gameObject = gameObject;
        this.transform = gameObject.transform;
        this.velocity = 1;
        this.mass = 1;
        this.gravity = defaultGravity;
    }
}

export class Controller {
    gameObject: GameObject
    transform: Transform
    
    constructor(gameObject: GameObject){
        this.gameObject = gameObject;
        this.transform = gameObject.transform;
    }

    // lookAt (target: GameObject){
    //     let degree = this.gameObject.getAngleToTarget(target);
    //     this.gameObject.transform.rotate(degree);
    // }
    
    moveTo(x: number, y: number, velocity = 1){
        let disX = x - this.transform.position.x;
        let disY = y - this.transform.position.y;
        let fdis = hypotenuse(disX, disY);
        
        let estimatedTime = (this.gameObject.rigidBody) ? (fdis/this.gameObject.rigidBody.velocity) : (fdis/velocity);

        let xvel = (disX/estimatedTime);
        let yvel = (disY/estimatedTime);

        if(disX !== 0 ){
        this.transform.position.x += xvel;
        } ;
        if(disY !== 0 ) {
        this.transform.position.y += yvel;
        }
    }
    
    moveRight(velocity = 1){        
        this.transform.position.x += (this.gameObject.rigidBody) ? this.gameObject.rigidBody.velocity : velocity;
    }
    moveLeft(velocity = 1){
        this.transform.position.x -= (this.gameObject.rigidBody)? this.gameObject.rigidBody.velocity : velocity;
    }
    moveUp(velocity = 1){
        this.transform.position.y -= (this.gameObject.rigidBody)? this.gameObject.rigidBody.velocity : velocity;
    }
    moveDown(velocity = 1){
        this.transform.position.y += (this.gameObject.rigidBody)? this.gameObject.rigidBody.velocity : velocity;
    }  
}

export default MonoBehavior;