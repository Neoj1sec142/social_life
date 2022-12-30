export const isEmpty = (array) => {
    return !Array.isArray(array) || !array.length
}

export const haltNav = () => {
    let count = 5;
    const interval = setInterval(() => {
        count--;
    },10000)
    if(count <= 0){
        clearInterval(interval);
        return true
    }
}