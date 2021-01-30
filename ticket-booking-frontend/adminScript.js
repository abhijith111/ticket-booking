function updateCount(){
    $.ajax({
        url:'https://ticket-booking1.herokuapp.com/admin',
        method: 'POST',
        success: (response)=>{
            alert("Ticket Count Updated to 10");
        }
    })
}