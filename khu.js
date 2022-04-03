var employee = [
    {
        "id": 111,
        "firstname": "khubaib",
        "lastname": "hanif",
        "salary": 1000
    },
    {
        "id": 321,
        "firstname": "taha",
        "lastname": "khan",
        "salary": 2000
    },
    {
        "id": 555,
        "firstname": "hassan",
        "lastname": "naqvi",
        "salary": 3000
    }
]
console.log(employee)

class Employees {
    constructor(id, firstname, lastname, salary) {
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.salary = salary
    }
    getid() {
        var eid
        for (let i=0; i<employee.length; i++){
            
            if (employee[i].firstname == this.firstname) {
                console.log(employee[i].id);
            }
        }     
        
    }

    getfirstname() {
        return this.firstname
    }
    getlastname() {
        return this.lastname
    }
    getsalary() {
        return this.salary
    }
}

var Emp = new Employees("123", "khubaib", "hanif", "3000");
Emp.getid()
// console.log(Emp.getfirstname());
// console.log(Emp.getlastname());
// console.log(Emp.getsalary());


