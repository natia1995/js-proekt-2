
//ჯავასკრიფტის პროექტის დავალება 2

var number = parseInt(Math.random() * 30) 
console.log(number) //რანდომულად რიცხვის არჩევა 0-დან 30-მდე
var num = prompt("Guess the number from 1 to 30") //პრომთში ჩავწეროთ რაიმე რიცხვი 0-დან 30-მდე

while(num!=number){
    if(num>=0 && num < number){ //თუ ჩაწერილი რიცხვი არ არის ტოლი რანდომულ რიცხვზე, ჩაწერილი რიცხვი მეტია ან ტოლია ნულზე და ჩაწერილი რიცხვი ნაკლებია რანდომულ რიცხვზე
    console.log("Enter a higher number") // მაშინ გამოჩნდება, რომ "შეიყვანეთ უფრო მაღალი რიცხვი"
    num = prompt()}
    else if(num<=30 && num > number){ //თუ ჩაწერილი რიცხვი ნაკლებია ან ტოლია ოცდაათზე და ჩაწერილი რიცხვი მეტია რანდომულ რიცხვზე
    console.log("Enter the lower number") // მაშინ გამოჩნდება, რომ "შეიყვანეთ უფრო დაბალი რიცხვი"
    num = prompt()}
    else{
    console.log("There is an error (the entered number does not fit in the range from 0 to 30)") //და თუ ჩავწერთ 0-ზე ნაკლება ან 30-ზე მეტ ციფრს გამოჩნდება, რომ "შეყვანილი რიცხვი არ ჯდება 0-დან 30-მდე დიაპაზონში"
    num = prompt()}
    }

   