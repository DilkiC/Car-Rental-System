package easy.dil.entity;

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
    private String cid;
    private String name;
    private String email;
    private String contact;
    private String password;
    private String nicImage;

    @OneToMany(targetEntity = Booking.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "cid",referencedColumnName = "cid")
    private List<Booking> bookings;
}
