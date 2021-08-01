package easy.dil.repo;


import easy.dil.entity.CarItem;
import easy.dil.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface CarItemRepo extends JpaRepository<CarItem,String> {
    @Query(value="select CarItem.carId from CarItem  order by 1 desc limit 1",nativeQuery = true)
    String getlastId();

   // List<CarItem> findAll(String carBrand);
   @Query(value="select count(CarItem.carId) from CarItem",nativeQuery = true)
   int idCount();

    /*@Query(value="select CarItem.carBrand from CarItem",nativeQuery = true)
    List<CarItem> getAllCarBrand();*/

    //Optional<CarItem> searchByName(String name);
}
