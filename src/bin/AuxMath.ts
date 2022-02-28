export function module(number : number){
    if(number >= 0) return number;
    else return number*(-1);
}
      
export function hypotenuse(catetop : number, catetadj: number){
    return Math.sqrt(Math.pow(catetop, 2)+Math.pow(catetadj,2));
}