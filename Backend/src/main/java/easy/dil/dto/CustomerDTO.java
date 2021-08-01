package easy.dil.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CustomerDTO {
    private String cid;
    //private UserDTO user;
    private String name;
    private String email;
    private String contact;
    private String password;
    private String nicImage;
}
