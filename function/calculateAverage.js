const calculation = (dataArray) => {
    let totalNumber = dataArray.reduce((acc,cur)=>{
        return acc+cur;
    },0)
    return totalNumber / dataArray.length;
}


export default calculation;