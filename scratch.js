// some matrix functions that I don't need yet

function identity(n) {
  let m = mat(n, n);

  for (let i = 0; i < n; i++) {
    m[i][i] = 1;
  }

  return m;
}

function testIdentity() {
  let m = identity(5);

  for (let i in m) {
    for (let j in m[i]) {
      if (i === j) {
        assertEqual(1, m[i][j]);
      } else {
        assertEqual(0, m[i][j]);
      }
    }
  }
}


function mult(a, b) {
  if (a.length !== 4 || a[0].length !== 4 || b.length !== 4 || b[0].length !== 4) {
    throw "can only multiply 4x4 matrices";
  }

  let m = mat(4, 4);

  for (let i in m) {
    for (let j in m[i]) {
      m[i][j] = a[i][0] * b[0][j] +
                a[i][1] * b[1][j] +
                a[i][2] * b[2][j] +
                a[i][3] * b[3][j];
    }
  }

  return m;
}

function testMult() {
  assertEqual(mat(4,4), mult(mat(4,4), mat(4,4)));

  let m = [[5, 2, 4, 5],
           [3, 4, 1, 1],
           [1, 2, 3, 4],
           [4, 3, 2, 1]];

  assertEqual(m, mult(m, identity(4)));
}
