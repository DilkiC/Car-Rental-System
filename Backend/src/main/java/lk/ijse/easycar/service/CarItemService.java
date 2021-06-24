package lk.ijse.easycar.service;

import lk.ijse.easycar.dto.CarItemDTO;
import lk.ijse.easycar.entity.CarItem;

import java.util.ArrayList;
import java.util.List;

public interface CarItemService {
    void addCar(CarItemDTO carItemDTO);
    void updateCar(CarItemDTO carItemDTO);
    void deleteCar(String id);
    CarItemDTO searchCar(String id);
    ArrayList<CarItemDTO>getAll();

    String getlastId();
    int idCount();

    //List<CarItem> findAll(String carBrand);
}
