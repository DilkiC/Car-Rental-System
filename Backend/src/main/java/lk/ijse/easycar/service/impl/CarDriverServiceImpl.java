package lk.ijse.easycar.service.impl;

import lk.ijse.easycar.dto.CarDriverDTO;
import lk.ijse.easycar.entity.CarDriver;
import lk.ijse.easycar.entity.CarItem;
import lk.ijse.easycar.repo.CarDriverRepo;
import lk.ijse.easycar.service.CarDriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CarDriverServiceImpl implements CarDriverService {

    @Autowired
    private CarDriverRepo carDriverRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void addDriver(CarDriverDTO carDriverDTO) {
        carDriverRepo.save(modelMapper.map(carDriverDTO, CarDriver.class));
    }

    @Override
    public String getlastId() {
        return carDriverRepo.getlastId();
    }

    @Override
    public ArrayList<CarDriverDTO> getAll() {
        List<CarDriver> all=carDriverRepo.findAll();
        return modelMapper.map(all, new TypeToken<ArrayList<CarDriverDTO>>(){}.getType());
    }

    @Override
    public int idCount() {
        return carDriverRepo.idCount();
    }
}
