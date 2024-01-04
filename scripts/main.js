
var textoadd = document.getElementById('addtext');

var phrase = 'Hello, I am Helena!';

var longerPhrase = 'glad you visited.';

var counter = 0;

var index = 0;

function addTheText(){
	if(counter < phrase.length){
		textoadd.innerHTML += phrase.charAt(counter);
		counter += 1;
		setTimeout(addTheText, 120);
	} else {
		finishedFirstSection = true;
	}
}

addTheText();

function deletePartOfText(){
	if(counter > 11){
		textoadd.innerHTML = phrase.substring(0, counter);
		counter -= 1;
		setTimeout(deletePartOfText, 120);
	}else {
		if(index < longerPhrase.length){
			textoadd.innerHTML += longerPhrase.charAt(index);
			index+=1;
			setTimeout(deletePartOfText, 120);
		}
	}
}

setTimeout(deletePartOfText, 3000);



