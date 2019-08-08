const introduction = require("./introduction.js")

test("introduce ally", function() {
     expect(introduction("ally")).toBe("hello my name is ally");
});

test('introduce nobody', function() {
     expect(introduction("")).toBe("hello my name is");
});
