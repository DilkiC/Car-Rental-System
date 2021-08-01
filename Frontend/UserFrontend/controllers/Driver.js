/*...getting did*/
$('#driverId').text(
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/CarRentalNew_war_exploded/driver/getId",
        contentType: "application/json",
        async:true,
        success:function (resp) {
            console.log(resp.data);
            $('#driverId').text(resp.data);

        }

    })
)
function noDriver(){
    if($('driverId').text()=='D0'){
        $('#driverName').val("NoDriver");
    }
}
noDriver();

function clear(){
    $('#driverId').text(null);
    $('#driverName').val(null);
    $('#driverContact').val(null);
    $('#driverPassword').val(null);
    $('#dlDriver').val(null);

}

/*.........register.........*/
$('#registerBtnDriver').click(function () {
    let id = $('#driverId').text();
    let name = $('#driverName').val();
    let contact = $('#driverContact').val();
    let password = $('#driverPassword').val();

    let formData = new FormData();
    for (let file of document.getElementById('dlDriver').files) {
        formData.append("file", file);
    }
    formData.append("did", id);

    //.......................................................
    $.ajax({
        method: "POST",
        contentType: false,
        processData: false,
        url: "http://localhost:8081/CarRentalNew_war_exploded/driver/uploadDlImage",
        async: true,
        data: formData,
        success: function (resp) {
            console.log(resp.data);
            if (resp.code == 200) {
                $.ajax({
                    method: "POST",
                    contentType: "application/json",
                    url: "http://localhost:8081/CarRentalNew_war_exploded/driver/register",
                    data: JSON.stringify({
                        driverId: id,
                        driverName: name,
                        driverContact: contact,
                        driverPassword: password,
                        dlImage: resp.data
                    }),
                    success: function (resp) {
                        if (resp.code == 200) {
                            alert("Registration Done.Please remember your ID ("+id+") and Password");
                            clear();
                        }
                    }
                });
            } else {
                alert("Please Upload a NID")
            }

        }
    })
});
