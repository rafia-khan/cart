function increament() {
    var count = document.getElementById("count");

    if (count.value >= 5) {
        count.value = 5;
        alert("only five products allow")
    }

    else {
        count.value++;
    }
}

function decreament() {
    var count = document.getElementById("count");

    if (count.value <= 0) {
        count.value = 0;
        alert("minimum one product ")
    }

    else {
        count.value--;
    }


}