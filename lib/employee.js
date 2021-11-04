class Employee {
        constructor (id, name, email) {
            this.id = id;
            this.name = name,
            this.email = email
        }

        getId() {
            console.log(`id: ${this.id}`);
            return this.id;
        }

        getName() {
            console.log(`name: ${this.name}`);
            return this.name;
        }

        getEmail() {
            console.log(`email: ${this.email}`);
            return this.email;
        }

        getRole() {
            return "Employee";
        }

        getIcon() {
            return "fas fa-user";
        }
}

module.exports = Employee