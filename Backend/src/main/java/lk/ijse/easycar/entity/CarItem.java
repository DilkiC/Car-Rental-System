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

public class CarItem {
    @Id
    private String carId;
    private String carBrand;
    private String carType;
    private String carColor;
    private String transType;
    private String fuelType;
    private int noPass;
    private double dailyRate;
    private int freeKmDay;
    private double monthRate;
    private int freeKmMonth;
    private double priceExtraKm;


    @OneToMany(targetEntity = Booking.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "carId",referencedColumnName = "carId")
    private List<Booking>bookings;
}
