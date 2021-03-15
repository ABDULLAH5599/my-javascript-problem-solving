//convert KilometerToMeter

function KilometerToMeter(num){

    var meterNum= num*1000;
    return meterNum;
}
var number = KilometerToMeter(10);
console.log(number);


// budgetCalculator

 function budgetCalculator(num1,num2,num3){
    var watch= 50;
    var phone =100;
    var laptop =500;

    var result=watch/num1;
    var result2=phone/num2;
    var result3= laptop/num3;
   
    return result+" "+result2+" "+result3;

 }
 var number= budgetCalculator(2,3,2);
 console.log(number);


 // hotelCost

function hotelCost(day){
  
    if(day<=10){
      var  totalHotelCost=day*100;
    }else if(day<=20){
       var firstTenDays=10*100;
       var remainingDays=day-10;
       var totalDaysSecondPart=remainingDays*80;
       var totalHotelCost=firstTenDays+totalDaysSecondPart;
       
    }else{
        var firstTenDays=10*100;
        var totalDaysSecondPart=10*80;
        var remainingDays=day-20;
        var totalDaysThirdPart=remainingDays*50;
        var totalHotelCost=firstTenDays+totalDaysSecondPart+totalDaysThirdPart;
    }

    return totalHotelCost;
}
var numberOfdays= hotelCost(30);
console.log(numberOfdays);

// megaFriend
const myfriend=["rohim","asu","shilpa","mohi","kohinur"];
function megaFriend (arr){
   
    let max= "";
    for( var i=0; i < arr.length; i++){
        let element = arr[i];
     if (element.length>max.length){
         max=element;
     }

    }
    return max;

}  
var longestword =megaFriend (myfriend)
console.log(longestword);
 
