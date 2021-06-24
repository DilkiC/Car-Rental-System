package lk.ijse.easycar.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Customer {
    @Id
    private String custId;
    private String custName;
    private String custAddress;
    private String custContact;
    private String custNIC;
    private String custEmail;
    private String regDate;
    private String password;
    //@Column(nullable = true,length = 64)
    private String nicImage;

    @OneToMany(targetEntity = Booking.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "custId",referencedColumnName = "custId")
    private List<Booking>bookings;
}
