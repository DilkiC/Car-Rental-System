package easy.dil.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CarDriverDTO {
    private String driverId;
    private String driverName;
    private String driverContact;
    private String driverPassword;
    private String dlImage;
}
