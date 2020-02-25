
exports.min = function min (array) {
  return array == null ? 0 : array.length == 0 ? 0 : Math.min(...array)
}

exports.max = function max (array) {
  return array == null ? 0 : array.length == 0 ? 0 :  Math.max(...array)
}

exports.avg = function avg (array) {

  if(array == null){ return 0}
  else if(array.length == 0){ return 0}
  else{
    let arr = array.reduce((a,b)=>{
      return a+b
    })
  
    return arr/array.length
  }

}
