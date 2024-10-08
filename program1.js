const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) return 0;

    let numIslands = 0;

    function dfs(grid, i, j) {

        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
            return;
        }

        grid[i][j] = 'W';


        dfs(grid, i - 1, j); // up
        dfs(grid, i + 1, j); // down
        dfs(grid, i, j - 1); // left
        dfs(grid, i, j + 1); // right
    }

    // Traverse the entire grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {

            if (grid[i][j] === 'L') {
                numIslands++;
                dfs(grid, i, j);
            }
        }
    }

    return numIslands;
};

module.exports = getTotalIsles;
