package easy.dil.service.impl;

import easy.dil.dto.CarDriverDTO;
import easy.dil.entity.CarDriver;
import easy.dil.repo.CarDriverRepo;
import easy.dil.service.CarDriverService;
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
    public boolean nicAlreadyExists(String cid) {
        return carDriverRepo.existsById(cid);
    }

    @Override
    public int idCount() {
        return carDriverRepo.idCount();
    }
}
