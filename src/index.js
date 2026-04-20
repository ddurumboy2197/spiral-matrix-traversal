function spiralTraversal(matrix) {
    let result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Yuqori qatorni o'qib chiqish
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // O'ng qatorni o'qib chiqish
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Past qatorni o'qib chiqish
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Qarama-qarshi qatorni o'qib chiqish
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

// Test qo'llanishi
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(spiralTraversal(matrix));
