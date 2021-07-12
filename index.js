//writeCards(["Ada", "Brendan", "Ali"], "birthday"); 

//for (let countup = 0; countup < 10; countup++) {
   // console.log(countup);
 // }
 const names = ['Lisa', 'Kaitlin', 'Jan'];

 function writeCards(names, event) {
   let birthday =[];
   event = "surprise";
   for (let i= 0; i < names.length; i++) {
   birthday[i] = 'Thank you, '+ names[i] +', for the wonderful ' +event+' gift!';
   }
   return birthday;
 }
 
writeCards(names, birthday);