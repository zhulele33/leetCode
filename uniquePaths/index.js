// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

// 问总共有多少条不同的路径？
var uniquePaths = function(m, n) {
    var tArray = []
    for(var i=0;i<m;i++){ 
        tArray[i]=[]
        for(var j=0;j<n;j++){ 
            if(i == 0 || j == 0){
                tArray[i][j]=1
            }else{
                tArray[i][j]=tArray[i-1][j] + tArray[i][j-1]
            }
         }
    }
    return tArray[m-1][n-1]
};

