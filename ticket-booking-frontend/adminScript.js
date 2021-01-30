function updateCount(){
    $.ajax({
        url:'http://localhost:3000/admin',
        method: 'POST',
        success: (response)=>{
            alert("Ticket Count Updated to 10");
        }
    })
}