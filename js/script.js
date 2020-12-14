
function checkDate()
{var inp = document.getElementsByName('date');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            alert("Выбран: " + inp[i].value);
        }
    }
}

function checkTicket()
{var inp = document.getElementsByName('tickets');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            inp[i].checked.class=
        }
    }
}

