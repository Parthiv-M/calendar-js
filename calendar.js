let dt = new Date();
document.getElementById("date-str").innerHTML = dt.toDateString();

function renderDate() {
    dt.setDate(1);

    const endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();

    const prev = new Date(dt.getFullYear(), dt.getMonth(), 0);
    const prevDate = prev.getDate();

    const today = new Date();

    const monthslist = ["January", "February", "March", "April", 'May', "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("month").innerHTML = monthslist[dt.getMonth()] + " " + dt.getFullYear();

    let cell = "";

    for (x = prev.getDay(); x >= 0; x--) {
        cell += "<div class = 'prev_date' >" + (prevDate - x) + "</div>";
    }

    for (i = 1; i <= endDate; i++) {
        if (today.getDate() == i && dt.getMonth() == today.getMonth() && dt.getFullYear()==today.getFullYear())
            cell += "<div class = 'today current_month'>" + (i) + "</div>";
        else
            cell += "<div class = 'current_month'>" + (i) + "</div>";
    }

    document.getElementsByClassName("date")[0].innerHTML = cell;

    let divs = document.getElementsByClassName("current_month");

    for (i = 0; i < divs.length; i++)
        divs[i].setAttribute("id", i + 1);

    for (i = 0; i < divs.length; i++)
        divs[i].addEventListener('click', display, false);

}

//function to change the date in date-str to the one clicked by the user 
function display() {
    const x = this.innerHTML;
    const p = new Date(dt.getFullYear(), dt.getMonth(), x);
    document.getElementById("date-str").innerHTML = p.toDateString();
}

//function to navigate between the months
function moveDate(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - (1));
    } else if (para == 'next') {
        dt.setMonth(dt.getMonth() + (1));
    }
    const A= new Date();
    document.getElementsByClassName("date-str").innerHTML = A.toDateString();
    renderDate();
}