var Test = require("assert");
var rakeGarden = require("./../app").rakeGarden;
describe("rakeGarden", _ => {
    it("should work for sample (fixed) tests", () => {
        var garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
        Test.equal(rakeGarden(garden1), 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel');
        var garden2 = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel';
        Test.equal(rakeGarden(garden2), 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel');
        var garden3="gravel rock gravel gravel gravel rockstar gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock rock rockstar rock gravel gravel";
        Test.equal(rakeGarden(garden3),"gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock rock gravel rock gravel gravel")
    });
});