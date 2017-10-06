console.log('script sourced');

$(document).ready(readyNow);

function readyNow(){
  console.log('ready');
  $('#submit').on('click',submitClick);
}

function submitClick(){
  console.log('click');
}
