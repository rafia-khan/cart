function increament(incdec,prc,itm) {
    var count = document.getElementById(incdec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var pro_amount = document.getElementById("pro_amount");
    var charge = document.getElementById("charge");
    var total_amount = document.getElementById("total_amount")


    if (count.value >= 5) {
        count.value = 5;
        alert("only five products allow")
    }

    else {
        count.value++;

        var result = parseInt(price.innerHTML) + parseInt(item.innerHTML)
        item.innerHTML = result
        
        var total_product = parseInt(price.innerHTML) + parseInt(pro_amount.innerHTML)
        pro_amount.innerHTML = total_product

        var NewResult = total_product + parseInt(charge.innerHTML)
        total_amount.innerHTML = NewResult
    }
}

function decreament(incdec,prc,itm) {
    var count = document.getElementById(incdec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var pro_amount = document.getElementById("pro_amount");
     var charge = document.getElementById("charge");
    var total_amount = document.getElementById("total_amount")

    if (count.value <= 0) {
        count.value = 0;
        alert("minimum one product ")
    }

    else {
        count.value--;
        var result = parseInt(item.innerHTML) - parseInt(price.innerHTML)
        item.innerHTML = result
        
        var total_product = parseInt(pro_amount.innerHTML) - parseInt(price.innerHTML)
        pro_amount.innerHTML = total_product

        var NewResult = total_product + parseInt(charge.innerHTML)
        total_amount.innerHTML = NewResult

        
    }


}

var applyBTN = document.getElementById("applyBTN");
applyBTN.addEventListener('click', function () {

    var coupon_input = document.getElementById("coupon_input");
    var total_amount = document.getElementById("total_amount")

    if (coupon_input.value == 'Rafia_khan') {

        var total = parseInt(total_amount.innerHTML) - 50;
        total_amount.innerHTML = total;
        alert('congrats')
            
    }
    
    else {
        alert('coupon does not match')
    }

});