module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*(test.ts|spec.ts)|/src/.*(test.ts|spec.ts))",
    moduleFileExtensions: ["ts", "js", "node", "json"],
    testURL: "http://localhost"
}