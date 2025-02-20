function increament(incdec,prc,itm) {
    var count = document.getElementById(incdec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var pro_amount= document.getElementById("pro_amount")


    if (count.value >= 5) {
        count.value = 5;
        alert("only five products allow")
    }

    else {
        count.value++;

        var result = parseInt(price.innerHTML) + parseInt(item.innerHTML)
        item.innerHTML = result
        
        var total = parseInt(price.innerHTML) + parseInt(pro_amount.innerHTML)
        pro_amount.innerHTML = total
    }
}

function decreament(incdec,prc,itm) {
    var count = document.getElementById(incdec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var pro_amount= document.getElementById("pro_amount")

    if (count.value <= 0) {
        count.value = 0;
        alert("minimum one product ")
    }

    else {
        count.value--;
        var result = parseInt(item.innerHTML) - parseInt(price.innerHTML)
        item.innerHTML = result
        
        var total = parseInt(pro_amount.innerHTML) - parseInt(price.innerHTML)
        pro_amount.innerHTML = total
    }


}