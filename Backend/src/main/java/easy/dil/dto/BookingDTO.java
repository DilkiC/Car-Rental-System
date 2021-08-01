package easy.dil.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BookingDTO {
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

    private String cid;
    private String carId;
    private String driverId;
}
