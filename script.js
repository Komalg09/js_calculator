var tbcal=" ";
const input=document.getElementById('input');
const output=document.getElementById('output');

function calcad(value){
	tbcal += value;
	input.value=tbcal;
}

function remove(){
	tbcal = tbcal.substring(0, tbcal.length-1);
	input.value=tbcal;
}

function execm() {
	if(tbcal.length == 0 || tbcal == "") {
		alert("Needs a input");
		return;
	}
	try {
		ans = eval(tbcal);
		output.value = ans;
	}
	catch(err){
		alert("Invalid Input");
	}
}

function reset(){
	input.value=" ";
	output.value=" ";
	tbcal="";
}