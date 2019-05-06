/** 42.
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length > 2) {
    var maxValue = Math.max(...height);
    var maxValue_index = height.indexOf(maxValue);
    var count = 0;

    for (var i = 1; i < maxValue_index; i++) {
      if (height[i] >= height[0]) {
        height[0] = height[i];
      } else {
        count = count + height[0] - height[i];
      }
    }

    for (var i = height.length - 1; i > maxValue_index; i--) {
      if (height[i] >= height[height.length - 1]) {
        height[height.length - 1] = height[i];
      } else {
        count = count + height[height.length - 1] - height[i];
      }
    }
    return count;
  } else {
    return 0;
  }
};
