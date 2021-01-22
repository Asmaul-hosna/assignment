1*kilometerToMeter
function kilometerToMeter(kilometer){
        var meter = kilometer*1000;
        return meter;
}
var distanceMeter = kilometerToMeter (5);
console.log(distanceMeter);
var distanceMeter = kilometerToMeter (7);
console.log(distanceMeter);
var distanceMeter = kilometerToMeter (10);
//console.log(distanceMeter)


2*budgetCalculator
function budgetCalculator(mobile,watch,laptop){
    var total = mobile + watch + laptop;
    return total
} var result = (50+100+500);
//console.log(result);

3*hotelCost
function hotelCost(rate){
    var hotelCost = 0;
    if (rate <= 10){
        hotelCost = rate * 100;

    }else if (rate <= 20){
        var first10days = 10 * 100;
        var remaining = rate - 10;
        var second10days = remaining * 80;
        hotelCost = first10days + second10days;

    } else {
        var first10days = 10 * 100;
        var second10days = 10 * 80;
        var remaining = rate - 20;
        var extradays = remaining * 50;
        hotelCost = first10days + second10days + extradays;

    }
    return hotelCost;

}
var count = hotelCost(20)
//console.log(count);

 megaFriend   
function megaFriend (friends){
    arr = ["harry","harmony","howgarts"];

    var length = 0;
    var longest= "howgarts";
}
for (var i = 0; i <n; i++){
        if (arr[i].length > lgth)
        
        var length = arr[i].length;
          
         longest = arr [i];


    } 
    return megaFriend;  
     
var result =megaFriend.longest    
console.log(result);   
    