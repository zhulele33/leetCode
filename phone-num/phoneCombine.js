const digitArr = [[],[],['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']]
const letterCombinations = function(digits) {
    const indexArr = (digits+'').split('')
	const combineArr = []
	indexArr.map(i=>combineArr.push(digitArr[i]))
    return combineArr.length>0?combineArr.reduce((a,b)=>{
    	// 将两个数组合起来
		return a.map(x => b.map(y => x + y)).join(",").split(",")
	}):[]
}