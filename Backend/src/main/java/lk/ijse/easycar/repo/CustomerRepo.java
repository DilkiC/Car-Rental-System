package lk.ijse.easycar.repo;

import lk.ijse.easycar.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepo extends JpaRepository<Customer,String> {

    @Query(value="select Customer.custId from Customer  order by 1 desc limit 1",nativeQuery = true)
    String getlastId();

    @Query(value="select count(Customer.custId) from Customer  ",nativeQuery = true)
    int getRowCount();

}
