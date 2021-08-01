/*.............get all drivers..*/
getAllDrivers();
function getAllDrivers() {
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/CarRentalNew_war_exploded/driver",
        success:function (resp) {
            console.log(resp);
            $('#driverTbl>tbody').empty();

            for (let driver of resp.data){
                let did=driver.driverId;
                let name=driver.driverName;
                let contact=driver.driverContact;
                let dl=driver.dlImage;

                let image="<img style='width: 200px; height: 80px' src='assets/uploading/dl/" + dl + "'>"


                var row = `<tr><td>${did}</td><td>${name}</td><td>${contact}</td>
                <td>${image}</td>
                </tr>`;
                $('#driverTbl>tbody').append(row);
            }
        }

    });

}