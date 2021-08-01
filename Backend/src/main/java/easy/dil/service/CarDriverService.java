package easy.dil.service;



import easy.dil.dto.CarDriverDTO;

import java.util.ArrayList;

public interface CarDriverService {
    void addDriver(CarDriverDTO carDriverDTO);
    String getlastId();
    ArrayList<CarDriverDTO>getAll();
    boolean nicAlreadyExists(String cid);
    int idCount();
}
