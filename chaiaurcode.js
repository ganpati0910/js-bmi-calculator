const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

   const height=parseInt(document.querySelector('#height').value);
   const weight=parseInt(document.querySelector('#weight').value);
   const results =document.querySelector('#results');
    
   if(height===''|| height<0 ||isNaN(height)){
    results.innerHTML='pleae give a valid height';
   }

    else if(weight===''|| weight<0 ||isNaN(weight)){
    results.innerHTML='pleae give a valid weight';
   }
   else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let message ="";
     if(bmi<=18.6){
        message=message+"sorry you are under wieght";
     }
     else if(bmi>18.6 &&bmi<=24.9){
        message=message+"mst ho bhai tum to";
     }
     else{
        message =message+"bhai kam khaya kar tu  over weight haii";
     }
     results.innerHTML=`<span>${bmi}${message}</span>`;
   }

   
   
   






})