/**
 
 */


const recoverFromPreorder = function(traversal) {
  const arr = []
  let tmp = traversal[0]
  for(let i = 1; i  <  traversal.length; i++) {
    if(traversal[i] === '-') {
      if(traversal[i-1] === '-') {
         tmp += '-'
       } else {
         arr.push(tmp)
         tmp = '-'
       }
    } else {
      if(traversal[i-1] === '-') {
        arr.push(tmp)
        tmp = traversal[i]
      } else {
        tmp += traversal[i]
      }
    }
  }
  arr.push(tmp)
  const resArr = []
  helper(resArr, arr, 0)
  return resArr[0]
};


function helper(nodeArr, strArr, idx) {
  if(idx >= strArr.length) return
  if(idx > 0) {
    
    if(strArr[idx].startsWith('-')) {
      helper(nodeArr, strArr, idx + 1)
    } else {
      nodeArr[idx] = new TreeNode(+strArr[idx])
      let d = strArr[idx - 1].length

      let tIdx

      for(let i = idx - 1; ; i = i - 2) {
        if(i>= 1) {
          if(strArr[i].length < d) {
            tIdx = i+1
            break
          }
        } else {

          tIdx = 0
          break
        }
      }
      
      if(nodeArr[tIdx].left) {
        nodeArr[tIdx].right = nodeArr[idx]
      } else {
        nodeArr[tIdx].left = nodeArr[idx]
      }
      helper(nodeArr, strArr, idx + 1)
    }

  } else {
    nodeArr[idx] = new TreeNode(+strArr[idx])
    helper(nodeArr, strArr, idx + 1)
  }
  
}

  