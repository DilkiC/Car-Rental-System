package lk.ijse.easycar.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CarItemDTO {
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
    //private List<Booking> bookings;
}
