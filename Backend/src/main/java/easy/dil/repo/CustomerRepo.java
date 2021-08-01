package easy.dil.repo;

import easy.dil.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepo extends JpaRepository<Customer,String> {
    @Query(value="select Customer.cid from Customer  order by 1 desc limit 1",nativeQuery = true)
    String getlastId();
}
