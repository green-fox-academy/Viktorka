function securityLock(mtrx) {
  let outputMatrix = []
  mtrx.forEach(function (line) {
    outputMatrix.push([])
  })
  for (let i = 0; i < mtrx.length; i++) {
    for (let j = 0; j < mtrx[i].length; j++) {
      outputMatrix[(i + j) % mtrx.length][j] = mtrx[i][j]
    }
  }
  return outputMatrix;
}