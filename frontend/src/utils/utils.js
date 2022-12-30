export const isEmpty = (array) => {
    return !Array.isArray(array) || !array.length
}

export const haltNav = () => {
    let count = 3;
    const interval = setInterval(() => {
        count--;
    },1000)
    if(count <= 0){
        clearInterval(interval);
        return true
    }
}