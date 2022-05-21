let tier;
let fname;
let amount_earn_for_the_week;
let fullname = document.getElementById("player-el")


document.getElementById("fname").addEventListener("change", (e) => {
   fname = e.target.value
})


document.getElementById("tier").addEventListener("change", (e) => {
   tier = e.target.value
})
document.getElementById("amount").addEventListener("change", (e) => {
    amount = e.target.value
 })

function sub(){
   weakly_gain=(amount-(amount*0.2))*0.07
   fullname.textContent=`${fname} with tier ${tier} saved #${amount} with weekly earningsof #${(weakly_gain)}`
}

function validation(){
    if(amount<10000 && tier!=1){
        fullname.textContent='Invalid amount for tier 1'
    }
    else if(amount<20000 && tier!=2){
        fullname.textContent='Invalid amount for tier 2' 
    }
    else if(amount<30000 && tier!=3){
        fullname.textContent='Invalid amount for tier 3'
    }
}

function weeklyAmount(){
    if(tier==1){
        amount_earn_for_the_week=(amount-0.20)*0.07
    }
   else if(tier==2){
        amount_earn_for_the_week=(amount-0.20)*0.1
    }
    else if(tier==3){
        amount_earn_for_the_week=(amount-0.20)*0.20
    }

    return amount_earn_for_the_week
}
