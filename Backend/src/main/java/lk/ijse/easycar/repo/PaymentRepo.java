package lk.ijse.easycar.repo;

import lk.ijse.easycar.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PaymentRepo extends JpaRepository<Payment,String> {
    @Query(value="select Payment.pId from Payment  order by 1 desc limit 1",nativeQuery = true)
    String getlastId();
}
