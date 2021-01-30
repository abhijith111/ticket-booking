getCurrentStatus();

function getCurrentStatus() {
    $.ajax({
        url: "https://ticket-booking1.herokuapp.com/",
        method: "GET",
        success: (response) => {
            document.getElementById("remainingCount").innerHTML =
                response.ticketCount;
            document.getElementById("bookedCount").innerHTML =
                10 - response.ticketCount;
        },
    });
}

function allocateTicket() {
    let count = document.getElementById("countField").value;
    let remainingCount = document.getElementById("remainingCount").innerHTML;
    let bookedCount = document.getElementById("bookedCount").innerHTML;
    if (remainingCount - count < 0) {
        alert(
            "declined: " +
                count +
                ", booked: " +
                bookedCount +
                ", remaining: " +
                remainingCount
        );
    } else {
        $.ajax({
            url: "http://localhost:3000/allocate" + count,
            method: "POST",
            success: (response) => {
                getCurrentStatus();
                alert(
                    "booked: " +
                        count +
                        ", remaining: " +
                        (remainingCount - count)
                );
            },
        });
    }
}
function cancelTicket() {
    let count = document.getElementById("countField").value;
    let remainingCount = document.getElementById("remainingCount").innerHTML;
    let bookedCount = document.getElementById("bookedCount").innerHTML;
    if (bookedCount - count < 0) {
        alert(
            "declined: " +
                count +
                ", booked: " +
                bookedCount +
                ", remaining: " +
                remainingCount
        );
    } else {
        $.ajax({
            url: "http://localhost:3000/deallocate" + count,
            method: "POST",
            success: (response) => {
                getCurrentStatus();
                remainingCount = parseInt(remainingCount) + parseInt(count);
                bookedCount = bookedCount - count;
                alert(
                    "booked: " + bookedCount + ", remaining: " + remainingCount
                );
            },
        });
    }
}
