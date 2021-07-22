export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
} 

const utils = {
    getCurrentTime(){
        return new Date().getTime();
    }
}

//there can be ONLY ONE default export in a file
export default utils;