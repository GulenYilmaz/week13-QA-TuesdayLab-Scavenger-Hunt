import { EmployeeManager } from "./pageObjects/EmployeeManager";

const page = new EmployeeManager("chrome");

// your data will go in this variable
const employees = [
    {
        "employee_id": 29982393,
        "employee_name": "Thrawn",
        "employee_phone": "3333333333",
        "employee_email": "gathrawn@admiralty.emp",
        "employee_title": "Best Villain"
    },
    {
        "employee_id": 29982394,
        "employee_name": "R2-D2",
        "employee_phone": "4444444444",
        "employee_email": "pottymouth@astromech.rep",
        "employee_title": "Crotchety Old Droid"
    },
    {
        "employee_id": 29982250,
        "employee_name": "Jane Smith",
        "employee_phone": "0987654321",
        "employee_email": "jane.smith@thehotpot.com",
        "employee_title": "queen of Screenshots"
    },
    {
        "employee_id": 13371337,
        "employee_name": "Still A.W.jj",
        "employee_phone": "5551231234",
        "employee_email": "email@email.com",
        "employee_title": "Not a QA jh"
    },
    {
        "employee_id": 29982404,
        "employee_name": "New Employeehjjhjhjh",
        "employee_phone": "1111111111",
        "employee_email": "abc",
        "employee_title": "New Employeehdjj"
    },
    {
        "employee_id": 29982318,
        "employee_name": "Khole Kardashian",
        "employee_phone": "2222222222",
        "employee_email": "khloeK@goodAmerican.com",
        "employee_title": "CEO and Founder"
    },
    {
        "employee_id": 29982407,
        "employee_name": "New Employee2",
        "employee_phone": "1111111111",
        "employee_email": "abc",
        "employee_title": "New Employee"
    },
    {
        "employee_id": 29982246,
        "employee_name": "Yulia Barbas",
        "employee_phone": "3093918734",
        "employee_email": "myemail@gmail.com",
        "employee_title": "Customer Support"
    },
    {
        "employee_id": 29982248,
        "employee_name": "Stu Dawg",
        "employee_phone": "9999999999",
        "employee_email": "abc@yougotmail.nyc",
        "employee_title": "One of the GOATS of mentors"
    },
    {
        "employee_id": 25,
        "employee_name": "Erica Denard",
        "employee_phone": "8643798564",
        "employee_email": "greetman@gmail.com",
        "employee_title": "Intern"
    },
    {
        "employee_id": 111,
        "employee_name": "Frodd Baggins",
        "employee_phone": "8011231223",
        "employee_email": "FB@gmail.com",
        "employee_title": "Ringbearer"
    },
    {
        "employee_id": 10,
        "employee_name": "Test ONEb",
        "employee_phone": "8019798578",
        "employee_email": "ble.com",
        "employee_title": "instructor"
    },
    {
        "employee_id": 29982317,
        "employee_name": "Kim Kardashian",
        "employee_phone": "1111111111",
        "employee_email": "kimk@skims.commjhgfhgfghfghfhh",
        "employee_title": "CEO"
    },
    {
        "employee_id": 112,
        "employee_name": "Samwise Gamgee",
        "employee_phone": "801222222",
        "employee_email": "SG@aol.com",
        "employee_title": "Assistant to the Ringbearer"
    },
    {
        "employee_id": 29982409,
        "employee_name": "New Employee",
        "employee_phone": "1111111111",
        "employee_email": "abc",
        "employee_title": "New Employee"
    },
    {
        "employee_id": 1230,
        "employee_name": "Your Mom",
        "employee_phone": "1111111111",
        "employee_email": "Yourmom@gmal.com",
        "employee_title": "Player"
    },
    {
        "employee_id": 29982402,
        "employee_name": "New Employeepgg5",
        "employee_phone": "1111111111",
        "employee_email": "abc",
        "employee_title": "New Employee"
    },
    {
        "employee_id": 300000,
        "employee_name": "Greg Bush",
        "employee_phone": "746389033",
        "employee_email": "great@gmail.com",
        "employee_title": "Specialist"
    },
    {
        "employee_id": 29982395,
        "employee_name": "Han Solo",
        "employee_phone": "1111111111",
        "employee_email": "millenium@falcon.rep",
        "employee_title": "Smuggler"
    },
    {
        "employee_id": 29982249,
        "employee_name": "John Doe",
        "employee_phone": "1234567890",
        "employee_email": "john.doe@hello.com",
        "employee_title": "Screenshot king"
    },
    {
        "employee_id": 29982396,
        "employee_name": "Luke Skywalker",
        "employee_phone": "2222222222",
        "employee_email": "red5@rogue.rep",
        "employee_title": "Jedi"
    },
    {
        "employee_id": 37,
        "employee_name": "David Hong",
        "employee_phone": "1234567890",
        "employee_email": "bleh@.com",
        "employee_title": "bruh"
    },
    {
        "employee_id": 1010,
        "employee_name": "Mark Hamill",
        "employee_phone": "8011231223",
        "employee_email": "MH@gmail.com",
        "employee_title": "Jedi Master"
    },
    {
        "employee_id": 29982403,
        "employee_name": "New Employeehhh",
        "employee_phone": "1111111111",
        "employee_email": "abc",
        "employee_title": "New Employeehh"
    },
    {
        "employee_id": 6582,
        "employee_name": "Harry Potter",
        "employee_phone": "8885623698",
        "employee_email": "expelliarmus@gmail.com",
        "employee_title": "Intern"
    },
    {
        "employee_id": 155612,
        "employee_name": "Jeff Winge",
        "employee_phone": "1251261278",
        "employee_email": "jwinger@gmail.com",
        "employee_title": "Greendale Professor of Law"
    },
    {
        "employee_id": 29982398,
        "employee_name": "R2-D2",
        "employee_phone": "4444444444",
        "employee_email": "pottymouth@astromech.rep",
        "employee_title": "Crotchety Old Droid"
    },
    {
        "employee_id": 231,
        "employee_name": "Dimitri Blaiddyd",
        "employee_phone": "2815555555",
        "employee_email": "dimblad44@yahoo.com",
        "employee_title": "King of Faerghus"
    },
    {
        "employee_id": 1000,
        "employee_name": "Kent Harris",
        "employee_phone": "1111111111",
        "employee_email": "yeet.@gmal.com",
        "employee_title": "Student"
    },
    {
        "employee_id": 456,
        "employee_name": "Callie Schultz",
        "employee_phone": "8972346752",
        "employee_email": "fakeaddress@gmail.com",
        "employee_title": "Fun Person"
    },
    {
        "employee_id": 29982405,
        "employee_name": "New Employeehjhjhj",
        "employee_phone": "1111111111",
        "employee_email": "abc",
        "employee_title": "New Employee"
    },
    {
        "employee_id": 113,
        "employee_name": "Gollum",
        "employee_phone": "8012342334",
        "employee_email": "Gollum@yahoo.com",
        "employee_title": "Preciousbearer"
    },
    {
        "employee_id": 115,
        "employee_name": "Lord Farquaad",
        "employee_phone": "8012342334",
        "employee_email": "LoFayall@yahoo.com",
        "employee_title": "Tiny King"
    },
    {
        "employee_id": 29982406,
        "employee_name": "Test Employee",
        "employee_phone": "1231234567",
        "employee_email": "gmail",
        "employee_title": "COO"
    },
    {
        "employee_id": 29982408,
        "employee_name": "New Employee3",
        "employee_phone": "1111111111",
        "employee_email": "abc",
        "employee_title": "New Employee"
    },
    {
        "employee_id": 29982401,
        "employee_name": "New Employeenm",
        "employee_phone": "1111111111",
        "employee_email": "abcd",
        "employee_title": "New Employee"
    },
    {
        "employee_id": 29982400,
        "employee_name": "Amy Bubbles Tester",
        "employee_phone": "1234567891",
        "employee_email": "amy.tester3@gmail.com",
        "employee_title": "123678"
    },
    {
        "employee_id": 15000,
        "employee_name": "Test Person",
        "employee_phone": "1234567890",
        "employee_email": "test@devmounta.in",
        "employee_title": "Tester"
    },
    {
        "employee_id": 29982397,
        "employee_name": "Thrawn",
        "employee_phone": "4455555555",
        "employee_email": "gathrawn@admiralty.emp",
        "employee_title": "Best Villain"
    },
    {
        "employee_id": 29982325,
        "employee_name": "Donald Trump",
        "employee_phone": "1111111111",
        "employee_email": "t@45prez.com",
        "employee_title": "instructor"
    },
    {
        "employee_id": 29982330,
        "employee_name": "Dre",
        "employee_phone": "1111111111",
        "employee_email": "abc",
        "employee_title": "New Employee"
    },
    {
        "employee_id": 42,
        "employee_name": "Bill B. Tiffany",
        "employee_phone": "8011231223",
        "employee_email": "Bt@@gmail.com",
        "employee_title": "Student"
    },
    {
        "employee_id": 1123131313,
        "employee_name": "hamed",
        "employee_phone": "1234567890",
        "employee_email": "test@devmounta.in",
        "employee_title": "Tester"
    }
];

describe("checking that the UI matches the DB", () => {
beforeEach(async () => await page.navigate());
afterAll(async () => await page.driver.quit());
for (let i = 0; i < employees.length; i++) {
    test(`Looking for ${employees[i].employee_name} in the UI`, async () => {
    await page.selectEmployee(employees[i].employee_name);
    let employee = await page.getCurrentEmployee();
    expect(employee.id).toEqual(employees[i].employee_id.toString());
    expect(employee.name).toEqual(employees[i].employee_name);
    expect(employee.phone.toString()).toEqual(employees[i].employee_phone);
    expect(employee.email).toEqual(employees[i].employee_email);
    expect(employee.title).toEqual(employees[i].employee_title);
    });
}
});