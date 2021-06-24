package lk.ijse.easycar.service;

import lk.ijse.easycar.dto.CarDriverDTO;

import java.util.ArrayList;

public interface CarDriverService {
    void addDriver(CarDriverDTO carDriverDTO);
    String getlastId();
    ArrayList<CarDriverDTO>getAll();
    int idCount();
}
