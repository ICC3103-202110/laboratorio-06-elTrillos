
function updateRight(inVal,FromUnit,ToUnit, model){

    return {
        ...model,
        LeftVal: Number(input1),LeftUn: Number(input2),RightVal: Tip,RightUn: Total
    }
}
function updateLeft(inVal,FromUnit,ToUnit, model){

    return {
        ...model,
        LeftVal: Number(input1),LeftUn: Number(input2),RightVal: Tip,RightUn: Total
    }
}

module.exports = {
    updateRight,
    updateLeft
}