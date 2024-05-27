// Your code here
// Function to create an employee record from an array
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Function to create multiple employee records from an array of arrays
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
  // Function to create a timeIn event for an employee record
  function createTimeInEvent(employee, dateTimeString) {
    let [date, hour] = dateTimeString.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10)
    });
    return employee;
  }
  
  // Function to create a timeOut event for an employee record
  function createTimeOutEvent(employee, dateTimeString) {
    let [date, hour] = dateTimeString.split(" ");
    employee.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10)
    });
    return employee;
  }
  
  // Function to calculate the hours worked by an employee on a specific date
  function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find(event => event.date === date);
    let timeOut = employee.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  // Function to calculate the wages earned by an employee on a specific date
  function wagesEarnedOnDate(employee, date) {
    let hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
  }
  
  // Function to calculate all wages earned by an employee
  function allWagesFor(employee) {
    let allDates = employee.timeInEvents.map(event => event.date);
    let totalWages = allDates.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
    return totalWages;
  }
  
  // Function to calculate the payroll for an array of employees
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
  }
  