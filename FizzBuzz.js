//function to count from 1 to 100
//number divisible by 4 - fizz
// number divisable by 7 buzz

countMe(1);

function countMe(spaces){
	for(ourNum = 1; ourNum < 100; ourNum = ourNum+spaces){
		if(ourNum % 4 === 0 && ourNum % 7 === 0){
			alert("fizz, buzz");
		}
		else if(ourNum % 4 === 0){
			alert("fizz");
		}
		else if(ourNum % 7 === 0){
			alert("buzz");
		}
		else{
			alert(ourNum);
		}
	}
	return ourNum;
}