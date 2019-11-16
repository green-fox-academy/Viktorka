function securityLock(mtrx) {
  let outputMatrix = []
  mtrx.forEach(function (line) {
    outputMatrix.push([])
  })
  for (let i = 0; i < mtrx.length; i++) {
    for (let j = 0; j < mtrx[i].length; j++) {
      outputMatrix[(i + j) % mtrx.length][j] = mtrx[i][j]
      // console.log((i + j) % mtrx.length , i,j, i+j/mtrx.length)
    }
  }
  return outputMatrix;
}
console.log(securityLock([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]))