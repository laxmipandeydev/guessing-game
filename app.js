 const max = prompt("Enter a max number");
 let random = Math.floor(Math.random() * max) + 1; 
 let guess= prompt("guess the number");
 
 while(true){
    if(guess =="quit"){
        console.log("user quit");
        break;
    }
       if( Number(guess) == random){
        console.log("congrats your guess is correct,ran dom number was ",random);
        break;
    }
    else{
        guess = prompt("your guess was wrong, try again");
    }
 }