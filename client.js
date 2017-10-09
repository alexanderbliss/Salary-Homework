console.log('script sourced');
$(document).ready(readyNow);

function readyNow(){
  console.log('ready');
  $('#submit').on('click',submitClick);
  appendDom();
}

function submitClick(){
  console.log('click');
  appendTable();
$('.salaryCost').append('<h1>'+ $("salarys").val()+'</h1>');
  // newEmployees();
  // clearInput();
  //monthlyAvarage();
}
function appendDom(){

  $header = $('<h1>List of Employees</h1>');
  $('.bodyContainer').append($header);


$table = $('<table></table>');
$table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>ID Number</th><th>Job Title</th><th>Anual Salary<th></thead>');



  $('.inputContainer').append($table);

}
function appendTable(){
  $('.bodyContainer').append('<thead><tr><th>'+  $("#firstName").val()+
  '</th><th>' + $('#lastName').val() +'</th><th>' + $('#IDnumber').val() +
  '</th><th>' + $('#jobTitle').val() + '</th><th id="salaryval">' +
  $('#anualSalary').val() + '</th></tr></thead>');

   id=salaryval = $('#anualSalary').val();

salarys.push(parseInt(id=salaryval));
console.log(salarys);

  // $('.bodyContainer').append('<h1>'+ 'Employees Last Name : ' + $('#lastName').val() + '</h1>');
  //
  // $('.bodyContainer').append('<h1>'+ 'Employees ID number : ' + $('#IDnumber').val() + '</h1>');
  //
  // $('.bodyContainer').append('<h1>'+ 'Employees Job Title : ' + $('#jobTitle').val() + '</h1>');
  //
  // $('.bodyContainer').append('<h1>'+ 'Employees anual salary : ' + $('#anualSalary').val() + '</h1>');
  $tbody = $('<tbody id="tableBody"></tbody>');
  $table.append($tbody);
}

var salarys=[];
var totalSalarys = 0;
for(var i =0; i<salarys.length; i+=1){
  totalsalarys = sum.salarys[i];
console.log(totalSalarys);
$('.container').append('<h2>LOWER</h2>');

}


// function newEmployees(){
// var Employee = function(firstName, lastName, idNumber, jobTitle, anualSalary){
//   this.firstName = $('#firstName').val();
//   this.lastName= $('#lastName').val();
//   this.idNumber= $('#IDnumber').val();
//   this.jobTitle= $('#jobTitle').val();
//   this.anualSalary= $('#anualSalary').val();

// };
// console.log($('#firstName').val());
//   var newEmployee = new Employee();
// var employees= [];
// employees.push(newEmployee);
//
// }

// functionclear/
