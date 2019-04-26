/*
根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
	if(preorder.length == 0 || inorder.length == 0) return null
    var root = {val:preorder[0]}
    var rootLeftCount = inorder.indexOf(root.val)
    var rootRightCount = inorder.length-rootLeftCount-1
    var preorderLeftRoot = preorder.splice(1,rootLeftCount)
    var preorderRightRoot = preorder.splice(1,rootRightCount)
    var inorderLeftRoot = inorder.splice(0,rootLeftCount)
    var inorderRightRoot = inorder.splice(1,rootRightCount)
    root.left = buildTree(preorderLeftRoot,inorderLeftRoot)
    root.right = buildTree(preorderRightRoot,inorderRightRoot)
    return root
}