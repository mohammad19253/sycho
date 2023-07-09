export const shuffleArray = (array)=>{
    const sh=array
    sh.sort(function () {
        return Math.random() - 0.5; });
    return sh
     
}
