 const max = prompt("Enter a max number");
 let random = Math.floor(Math.random() * max) + 1; 
 let guess= prompt("guess the number");
 
 while(true){
    if(guess =="quit"){
        console.log("user quit");
        break;
    }
       if( Number(guess) == random){
        console.log("congrats your guess is correct,random number was ",random);
        break;
    }
    else if(guess< random)
    {
       guess=prompt("Hint:Your guess was to small,please try again");
    }
     else 
    {
      guess=prompt("Hint:Your guess was to large,please try again");
    }
 }