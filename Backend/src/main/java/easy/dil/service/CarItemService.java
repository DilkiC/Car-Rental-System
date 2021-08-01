package easy.dil.service;



import easy.dil.dto.CarItemDTO;
import easy.dil.entity.CarItem;

import java.util.ArrayList;
import java.util.List;

public interface CarItemService {
    void addCar(CarItemDTO carItemDTO);
    void updateCar(CarItemDTO carItemDTO);
    void deleteCar(String id);
    CarItemDTO searchCar(String id);
    ArrayList<CarItemDTO>getAll();

    String getlastId();
    //ArrayList<CarItemDTO>getAllCarBrand();
    int idCount();

   // CarItemDTO searchCarName(String name);

    //List<CarItem> findAllBrand(String carBrand);
}
