package lk.ijse.easycar.repo;

import lk.ijse.easycar.entity.CarItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarItemRepo extends JpaRepository<CarItem,String> {
    @Query(value="select CarItem.carId from CarItem  order by 1 desc limit 1",nativeQuery = true)
    String getlastId();

   // List<CarItem> findAll(String carBrand);
   @Query(value="select count(CarItem.carId) from CarItem",nativeQuery = true)
   int idCount();
}
