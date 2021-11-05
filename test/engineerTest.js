
const Engineer = require("../lib/engineer");

test("create Github User", () => {
    const git = "me"
    const y = new Engineer(1, "Karim", "me@me2.com", git)
    expect(y.github).toBe(git)
})

test("Github function", () => {
    const git = "me"
    const y = new Engineer(1, "Karim", "me@me2.com", git)
    expect(y.github()).toBe(git)
})

test("create getRole function", () => {
    const y = new Engineer(1, "Karim", "me@me2.com", me)
    expect(y.getRole()).toBe("Engineer")
})