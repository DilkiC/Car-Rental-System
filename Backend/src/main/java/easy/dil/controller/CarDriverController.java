package easy.dil.controller;


import easy.dil.dto.CarDriverDTO;
import easy.dil.exception.NotFoundException;
import easy.dil.service.CarDriverService;
import easy.dil.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
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

    @PostMapping(path = "/uploadDlImage")

    public ResponseEntity uploadIdImage(@RequestPart("file") MultipartFile multipartFile, @RequestParam String did) {
        if (carDriverService.nicAlreadyExists(did)) {
            throw new RuntimeException("Duplicate NIC Entry!");
        }
        System.out.println(multipartFile.getOriginalFilename());
        try {
            // Let's get the project location
            //String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            // Let's create a folder there for uploading purposes, if not exists
            File uploadsDir = new File("D:/IJSE/Java/JavaEE-Advanced API/Assignments/SpringCourseWork/CarRentalNew/Frontend/AdminFrontend/assets/uploading/dl");
            uploadsDir.mkdir();
            // It is time to transfer the file into the newly created dir
            multipartFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + multipartFile.getOriginalFilename()));
        } /*catch (URISyntaxException e) {
            e.printStackTrace();
        }*/ catch (IOException e) {
            e.printStackTrace();
        }
        String filePath = multipartFile.getOriginalFilename();


        StandardResponse standardResponse = new StandardResponse("200", "Success!", filePath);
        return new ResponseEntity(standardResponse, HttpStatus.OK);
    }


    @GetMapping(path = "/getId",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getLastId(){
        String id=carDriverService.getlastId();
        if(id!=null){
            id=id.split("[A-z]")[1];
            id="D"+(Integer.parseInt(id)+1);

        }else {
            id="D1";
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
