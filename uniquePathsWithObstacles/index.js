/**
 * 
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。

说明：m 和 n 的值均不超过 100。

示例 1:

输入:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
输出: 2
解释:
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右 
 */


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length,n = m!=0?obstacleGrid[0].length:0
    if(obstacleGrid[0][0] == 1) return 0 
    //一行一列
    if(m == 1 && n==1) return 1
    var tArray = []
    for(var i=0;i<m;i++){ 
        tArray[i]=[]
        for(var j=0;j<n;j++){ 
//          当前是障碍物 计作0
            if(obstacleGrid[i][j] == 1){
                tArray[i][j]=0
            }else if(i == 0 || j == 0){
                // 当 第一列或者第一行时
                //第一行每一列的路径等于这一行上一列的路径
                //第一列每一行的路径等于这一列上一行的路径
                if(j>0){ 
                    tArray[i][j] = tArray[i][j-1]
                }else if(i>0){
                    tArray[i][j] = tArray[i-1][j]
                }else {
                    tArray[i][j] = 1
                }
            }else if(i>0 && j>0){
                tArray[i][j]=tArray[i-1][j] + tArray[i][j-1]
            }
         }
    }
    
    
    return tArray[m-1][n-1]
};