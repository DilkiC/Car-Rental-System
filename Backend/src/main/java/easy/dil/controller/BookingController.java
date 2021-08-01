package easy.dil.controller;

import easy.dil.dto.BookingDTO;
import easy.dil.exception.NotFoundException;
import easy.dil.service.BookingService;
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
@RequestMapping("/booking")
@CrossOrigin
public class BookingController {
    @Autowired
    BookingService bookingService;

    @GetMapping(path = "/getLastId",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getLastId(){
        String id=bookingService.getlastId();
        if(id!=null){
            id=id.split("[A-Z]")[1];
            id="B"+(Integer.parseInt(id)+1);

        }else {
            id="B1";
        }
        return new ResponseEntity(new StandardResponse("200", "Done", id), HttpStatus.OK);
    }

    @PostMapping(path = "/addbooking",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addBooking(@RequestBody BookingDTO bookingDTO){
        if(bookingDTO.getBookId().trim().length()<=0){
            throw new NotFoundException("Booking id cannot be empty");
        }
        bookingService.addBooking(bookingDTO);
        return new ResponseEntity(new StandardResponse("200","done",bookingDTO), HttpStatus.CREATED);
    }
    @PostMapping(path = "/uploadBankImage")

    public ResponseEntity uploadIdImage(@RequestPart("file") MultipartFile multipartFile, @RequestParam String bid) {
        if (bookingService.nicAlreadyExists(bid)) {
            throw new RuntimeException("Duplicate BId Entry!");
        }
        System.out.println(multipartFile.getOriginalFilename());
        try {
            File uploadsDir = new File("D:/IJSE/Java/JavaEE-Advanced API/Assignments/SpringCourseWork/CarRentalNew/Frontend/AdminFrontend/assets/uploading/bankSlip");
            uploadsDir.mkdir();
            multipartFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + multipartFile.getOriginalFilename()));
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        String filePath = multipartFile.getOriginalFilename();

        StandardResponse standardResponse = new StandardResponse("200", "Success!", filePath);
        return new ResponseEntity(standardResponse, HttpStatus.OK);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAll(){
        ArrayList<BookingDTO> all=bookingService.getAll();
        return new ResponseEntity(new StandardResponse("200","done",all),HttpStatus.OK);
    }

}
