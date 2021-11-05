const Intern = require("../lib/Intern");

test("create school", () => {
    const school = "buruch"
    const y = new Intern(1, "Karim", "me@me2.com", school)
    expect(y.school).toBe(school)
})

test("Create School function", () => {
    const school = "buruch"
    const y = new Intern(1, "Karim", "me@me2.com", school)
    expect(y.getSchool()).toBe(school)
})

test("create getRole function", () => {
    const y = new Intern(1, "Karim", "me@me2.com", "buruch")
    expect(y.getRole()).toBe("Intern")
})