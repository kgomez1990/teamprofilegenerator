const Manager = require("../lib/Manager");

test("create OfficeNum", () => {
    const officeNumber = "567"
    const y = new Manager(1, "Karim", "me@me2.com", officeNumber)
    expect(y.officeNumber).toBe(officeNumber)
})

test("Create officeNumber function", () => {
    const officeNumber = "567"
    const y = new Manager(1, "Karim", "me@me2.com", officeNumber)
    expect(y.getofficeNum()).toBe(officeNumber)
})

test("create getRole function", () => {
    const y = new Manager(1, "Karim", "me@me2.com", "123")
    expect(y.getRole()).toBe("Manager")
})