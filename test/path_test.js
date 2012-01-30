var Grid      = require('../src/core/grid').Grid;
var testCases = require('./path_test_cases').testCases;

/**
 * Path-finding tests for the path-finders.
 */
exports.pathTest = function(name, finder) {
    describe('pathfinding of ' + name, function() {
        var startX, startY, endX, endY, grid, expectedLength,
            width, height, matrix;

        var test = (function() {
            var testId = 0;

            return function(startX, startY, endX, endY, grid, expectedLength) {
                describe('test ' + ++testId, function() {
                    it('should solve it', function() {
                        finder.findPath(startX, startY, endX, endY, grid).length.should.equal(expectedLength);
                    });
                });
            };
        })();

        // Load all the test cases and test against the finder.
        for (var i = 0, tc; tc = testCases[i]; ++i) {
            var matrix = tc.matrix,
                height = matrix.length,
                width = matrix[0].length,

                grid = new Grid(width, height, matrix);

            test(tc.startX, tc.startY, tc.endX, tc.endY, grid, tc.expectedLength);
        }
    });
};
