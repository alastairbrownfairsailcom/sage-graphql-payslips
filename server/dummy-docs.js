var docs = [  // Dummy data
  {
    id: 1,
    employeeId: 'xyz',
    employeeName: 'Theresa',
    frequency: 'Fortnightly',
    period: '1st June 2018 to 2nd July 2018',
    payDate: '01/08/2018',
    grossPay: 43322.13,
    nettPay: 30913.22,
    nettYTD: 151231234.55,    
    employeeSections: [ 
      {
        id: 1, description: 'Earnings',
        total: 91231.33,
        payItems: [
          {id: 1, description: 'Salary', currentAmount: 123123.11, ytd: 999999.11} 
        ]
      }, 
      {
        id: 2, description: 'Employee Deductions',
        total: 91231.33,
        payItems: [
          {id: 1, description: '401k', currentAmount: 123123.11, ytd: 999999.11} 
        ]
      }, 
      {
        id: 3, description: 'Employee Taxes',
        total: 91231.33,
        payItems: [
          {id: 2, description: 'Federal Something', currentAmount: 123123.11, ytd: 999999.11} 
        ]
      }],
    employerSections: null
  }
];
  
exports.getDoc = function(args) {
  console.log(args);
  return docs[0];
}