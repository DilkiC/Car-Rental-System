package lk.ijse.easycar.controller;

import lk.ijse.easycar.dto.CarDriverDTO;
import lk.ijse.easycar.dto.CarItemDTO;
import lk.ijse.easycar.exception.NotFoundException;
import lk.ijse.easycar.service.CarDriverService;
import lk.ijse.easycar.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class CarDriverController {

    @Autowired
    CarDriverService carDriverService;

    @PostMapping(path = "/register",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addDriver(@RequestBody CarDriverDTO carDriverDTO){
        if(carDriverDTO.getDriverId().trim().length()<=0){
            throw new NotFoundException("Driver id cannot be empty");

        }
        carDriverService.addDriver(carDriverDTO);
        return new ResponseEntity(new StandardResponse("200","Done",carDriverDTO), HttpStatus.CREATED);
    }

    @GetMapping(path = "/getId",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getLastId(){
        String id=carDriverService.getlastId();
        if(id!=null){
            id=id.split("[A-z]")[1];
            id="D"+(Integer.parseInt(id)+1);

        }else {
            id="D0";
        }
        return new ResponseEntity(new StandardResponse("200", "Done", id), HttpStatus.OK);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllCar() {
        ArrayList<CarDriverDTO> all = carDriverService.getAll();
        return new ResponseEntity(new StandardResponse("200", "Done", all), HttpStatus.OK);
    }

    @GetMapping(path="/getidcount",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getIdCount() {
       int count=carDriverService.idCount();
        return new ResponseEntity(new StandardResponse("200", "Done", count), HttpStatus.OK);
    }
}
