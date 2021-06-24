package lk.ijse.easycar.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class CustomerDTO {
    private String custId;
    private String custName;
    private String custAddress;
    private String custContact;
    private String custNIC;
    private String custEmail;
    private String regDate;
    private String password;
    private String nicImage;
    //private List<Booking> bookings;
}
