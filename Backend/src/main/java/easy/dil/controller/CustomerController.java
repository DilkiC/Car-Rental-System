package easy.dil.controller;

import easy.dil.dto.CustomerDTO;
import easy.dil.exception.NotFoundException;
import easy.dil.service.CustomerService;
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
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    private CustomerService service;

    @PostMapping(path = "/register",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity registerCustomer(@RequestBody CustomerDTO dto){
        if(dto.getCid().trim().length()<=0){
            throw new NotFoundException("Customer id cannot be empty");

        }
        service.registerCustomer(dto);
        return new ResponseEntity(new StandardResponse("200","Done",dto), HttpStatus.CREATED);
    }

    @PostMapping(path = "/uploadIdImage")

    public ResponseEntity uploadIdImage(@RequestPart("file") MultipartFile multipartFile, @RequestParam String cid) {
        if (service.nicAlreadyExists(cid)) {
            throw new RuntimeException("Duplicate NIC Entry!");
        }
        System.out.println(multipartFile.getOriginalFilename());
        try {
            // Let's get the project location
            //String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            // Let's create a folder there for uploading purposes, if not exists
            File uploadsDir = new File("D:/IJSE/Java/JavaEE-Advanced API/Assignments/SpringCourseWork/CarRentalNew/Frontend/AdminFrontend/assets/uploading/custNic");
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

    @GetMapping(path = "/custId",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getLastId(){
        String id=service.getlastId();
        if(id!=null){
            id=id.split("[A-Z]")[1];
            id="C"+(Integer.parseInt(id)+1);

        }else {
            id="C1";
        }
        return new ResponseEntity(new StandardResponse("200", "Done", id), HttpStatus.OK);
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllCustomers() {
        ArrayList<CustomerDTO> allCustomers = service.getAllCustomer();
        return new ResponseEntity(new StandardResponse("200", "Done", allCustomers), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity searchCustomer(@PathVariable String id) {
        CustomerDTO customerDTO = service.searchCustomer(id);
        return new ResponseEntity(new StandardResponse("200", "Done", customerDTO), HttpStatus.OK);
    }


}
