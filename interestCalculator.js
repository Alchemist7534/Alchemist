
let  int1 = {
    principal: 2500,
    time: 1.8 
    }
let int2 = {
    principal: 1000,
    time: 5
    }
let int3 = {
    principal: 3000,
    time: 1
    }
let int4 = {
    principal: 2000,
    time: 3
    }
let data = [int1, int2, int3, int4];

function interestCalculator(b) {
for (let a = 0; a < b.length; a++) {
if (b[a].principal >= 2500 && 1 < b[a].time < 3){
let rate = 3;
let interest = (b[a].principal * b[a].time * rate) / 100;
var newData = {
principal: b[a].principal,
time: b[a].time,
rate: rate,
interest: interest
}
} else if (b[a].principal >= 2500 && b[a].time >= 3){
let rate = 4;
let interest = (b[a].principal * b[a].time * rate) / 100;
var newData1 = {
principal: b[a].principal,
time: b[a].time,
rate: rate,
interest: interest
}
} else if (a.principal < 2500 && a.time <= 1){
let rate = 2;
let interest = (b[a].principal * b[a].time * rate) / 100;
var newData2 = {
principal: b[a].principal,
time: b[a].time,
rate: rate,
interest: interest
}
} else {
let rate = 1;
let interest = (b[a].principal * b[a].time * rate) / 100;
var newData3 = {
principal: b[a].principal,
time: b[a].time,
rate: rate,
interest: interest
}
}
}
let interestData = [newData, newData1, newData2, newData3,];

console.log(interestData);
return interestData
};

interestCalculator(data);

