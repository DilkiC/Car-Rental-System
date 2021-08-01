package easy.dil.service.impl;


import easy.dil.dto.CarItemDTO;
import easy.dil.entity.CarItem;
import easy.dil.entity.Customer;
import easy.dil.exception.ValidationException;
import easy.dil.repo.CarItemRepo;
import easy.dil.service.CarItemService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CarItemServiceImpl implements CarItemService {

    @Autowired
    private CarItemRepo carItemRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void addCar(CarItemDTO carItemDTO) {

        carItemRepo.save(modelMapper.map(carItemDTO, CarItem.class));

    }

    @Override
    public void updateCar(CarItemDTO carItemDTO) {
        if(carItemRepo.existsById(carItemDTO.getCarId())) {
            carItemRepo.save(modelMapper.map(carItemDTO, CarItem.class));
        }
    }

    @Override
    public void deleteCar(String id) {
        if(!carItemRepo.existsById(id)){
            throw new ValidationException("No Car Item find");
        }
        carItemRepo.deleteById(id);

    }

    @Override
    public CarItemDTO searchCar(String id) {
        Optional<CarItem> car = carItemRepo.findById(id);
        if(car.isPresent()){
            return modelMapper.map(car.get(),CarItemDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<CarItemDTO> getAll() {
        List<CarItem>all=carItemRepo.findAll();
        return modelMapper.map(all, new TypeToken<ArrayList<CarItemDTO>>(){}.getType());
    }

    @Override
    public String getlastId() {
        return carItemRepo.getlastId();
    }



   /* @Override
    public String getBrand() {
        return carItemRepo.getBrand();
    }*/

    @Override
    public int idCount() {
        return carItemRepo.idCount();
    }

    /*@Override
    public CarItemDTO searchCarName(String name) {
        Optional<CarItem> car = carItemRepo.searchByName(name);
        if(car.isPresent()){
            return modelMapper.map(car.get(),CarItemDTO.class);
        }
        return null;
    }*/


}
