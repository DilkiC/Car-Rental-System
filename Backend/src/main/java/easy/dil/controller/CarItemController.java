package easy.dil.controller;


import easy.dil.dto.CarItemDTO;
import easy.dil.exception.NotFoundException;
import easy.dil.service.CarItemService;
import easy.dil.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/caritem")
@CrossOrigin


public class CarItemController {
    @Autowired
    private CarItemService carItemService;

    @PostMapping(path = "/addcar",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addCar(@RequestBody CarItemDTO carItemDTO){
        if(carItemDTO.getCarId().trim().length()<=0){
            throw new NotFoundException("Car Id cannot be empty");
        }
        carItemService.addCar(carItemDTO);
        return new ResponseEntity(new StandardResponse("200","Done",carItemDTO), HttpStatus.CREATED);
    }

    @PutMapping(path = "/updatecar",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateCar(@RequestBody CarItemDTO dto) {
        if (dto.getCarId().trim().length() <= 0) {
            throw new NotFoundException("No id provided to update");
        }
        carItemService.updateCar(dto);
        return new ResponseEntity(new StandardResponse("200", "Done", dto), HttpStatus.OK);
    }

    @GetMapping(path = "searchcar/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity searchCar(@PathVariable String id) {
        CarItemDTO dto = carItemService.searchCar(id);
        return new ResponseEntity(new StandardResponse("200", "Done", dto), HttpStatus.OK);
    }

    /*@GetMapping(path = "searchcarname/{name}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity searchCarName(@PathVariable String name) {
        CarItemDTO dto = carItemService.searchCarName(name);
        return new ResponseEntity(new StandardResponse("200", "Done", dto), HttpStatus.OK);
    }*/

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteCar(@RequestParam String id) {
        carItemService.deleteCar(id);
        return new ResponseEntity(new StandardResponse("200", "Done", null), HttpStatus.OK);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllCar() {
        ArrayList<CarItemDTO> all = carItemService.getAll();
        return new ResponseEntity(new StandardResponse("200", "Done", all), HttpStatus.OK);
    }

    /*@GetMapping(path = "/allBrand" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllBrand() {
        String brand=carItemService.getBrand();
        return new ResponseEntity(new StandardResponse("200", "Done", brand), HttpStatus.OK);

    }*/



    @GetMapping( path = "/getId",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getLastId(){
        String id=carItemService.getlastId();
        if(id!=null){
            id=id.split("[A-z]")[1];
            id="V"+(Integer.parseInt(id)+1);

        }else {
            id="V1";
        }
        return new ResponseEntity(new StandardResponse("200", "Done", id), HttpStatus.OK);
    }

    @GetMapping( path = "/getidcount",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getIdCount(){
        int count=carItemService.idCount();
        return new ResponseEntity(new StandardResponse("200", "Done", count), HttpStatus.OK);
    }
}
