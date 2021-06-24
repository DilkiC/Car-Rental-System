package lk.ijse.easycar.controller;

import lk.ijse.easycar.dto.CustomerDTO;
import lk.ijse.easycar.dto.PaymentDTO;
import lk.ijse.easycar.exception.NotFoundException;
import lk.ijse.easycar.service.CustomerService;
import lk.ijse.easycar.service.PaymentService;
import lk.ijse.easycar.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;

@RestController
@RequestMapping("/payment")
@CrossOrigin
public class PaymentController {
    @Autowired
    private PaymentService service;


    @PostMapping(path = "/add",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addPayment(@RequestBody PaymentDTO dto){
       /* if(dto.getPId().trim().length()<=0){
            throw new NotFoundException("Payment id cannot be empty");

        }*/
        service.addPayment(dto);
        return new ResponseEntity(new StandardResponse("200","Done",dto), HttpStatus.CREATED);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getLastId(){
        String id=service.getlastId();
        if(id!=null){
            id=id.split("[A-Z]")[1];
            id="P"+(Integer.parseInt(id)+1);

        }else {
            id="P1";
        }
        return new ResponseEntity(new StandardResponse("200", "Done", id), HttpStatus.OK);
    }

}
