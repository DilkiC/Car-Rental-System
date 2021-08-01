/*.............get all customers..*/
getAllCustomers();
function getAllCustomers() {
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/CarRentalNew_war_exploded/customer",
        success:function (resp) {
            console.log(resp);
            $('#custTbl>tbody').empty();

            for (let cust of resp.data){
                let cid=cust.cid;
                let name=cust.name;
                let email=cust.email;
                let contact=cust.contact;
                let nic=cust.nicImage;

                let image="<img style='width: 200px; height: 80px' src='assets/uploading/custNic/" + nic + "'>"


                var row = `<tr><td>${cid}</td><td>${name}</td><td>${email}</td><td>${contact}</td>
                <td>${image}</td>
                </tr>`;
                $('#custTbl>tbody').append(row);
            }
        }

    });

}