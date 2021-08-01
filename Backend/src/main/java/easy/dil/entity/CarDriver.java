package easy.dil.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CarDriver {

    @Id
    private String driverId;
    private String driverName;
    private String driverContact;
    private String driverPassword;
    private String dlImage;

    @OneToMany(targetEntity = Booking.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "driverId",referencedColumnName = "driverId")
    private List<Booking> bookings;
}
