const { TestWatcher } = require("@jest/core")
const Employee = require("../lib/employee")

test("create employee object", () => {
    let y = new Employee();
    expect(typeof(y)).toBe("object")
}) 

test("create Employee ID", () => {
    let id = 1
    let y = new Employee(id);
    expect(y.id).toBe(id)
}) 

test("create Employee Name", () => {
    let name = "Karim"
    let y = new Employee("1", name);
    expect(y.name).toBe(name)
}) 

test("create Employee Email", () => {
    let email = "me@me2.com"
    let y = new Employee(1, "karim", email);
    expect(y.email).toBe(email)
}) 

test("create getName function", () => {
    let name = "karim"
    let y = new Employee(1, email);
    expect(y.getName()).toBe(name)
}) 

test("create getEmail function", () => {
    let email = "me@me2.com"
    let y = new Employee(1, "karim", email);
    expect(y.getEmail()).toBe(email)
})

test("create getRole function", () => {
    let y = new Employee();
    expect(y.getRole()).toBe("Employee")
})

