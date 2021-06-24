package lk.ijse.easycar.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Booking {

    @Id
    private String bookId;
    private String bookDate;
    private String carBrand;
    private String pickDate;
    private String pickTime;
    private String returnDate;
    private String returnTime;
    private String venue;
    private String carType;
    private double lossPrice;
    private String bankSlip;

    private String custId;
    private String carId;
    private String driverId;

    @OneToMany(targetEntity = Payment.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "bookId",referencedColumnName = "bookId")
    private List<Payment> payment;

}
