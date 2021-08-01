package easy.dil.repo;


import easy.dil.entity.CarDriver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CarDriverRepo extends JpaRepository<CarDriver,String> {
    @Query(value="select CarDriver.driverId from CarDriver  order by 1 desc limit 1",nativeQuery = true)
    String getlastId();

    @Query(value="select count(CarDriver.driverId) from CarDriver",nativeQuery = true)
    int idCount();


}
