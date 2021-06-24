package lk.ijse.easycar.service.impl;

import lk.ijse.easycar.dto.BookingDTO;
import lk.ijse.easycar.dto.CustomerDTO;
import lk.ijse.easycar.entity.Booking;
import lk.ijse.easycar.entity.Customer;
import lk.ijse.easycar.repo.BookingRepo;
import lk.ijse.easycar.service.BookingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepo bookingRepo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void addBooking(BookingDTO bookingDTO) {
        bookingRepo.save(mapper.map(bookingDTO, Booking.class));

    }

    @Override
    public boolean nicAlreadyExists(String bid) {
        return bookingRepo.existsById(bid);
    }

    @Override
    public ArrayList<BookingDTO> getAll() {
        List<Booking>all=bookingRepo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<BookingDTO>>(){}.getType());
    }

    @Override
    public ArrayList<BookingDTO> searchBookDetailsFromCustId(String custId) {
       List<Booking> all=bookingRepo.getAllBookingFromCId(custId);
        return mapper.map(all,new TypeToken<ArrayList<BookingDTO>>(){}.getType());


    }

    @Override
    public String getlastId() {
        return bookingRepo.getlastId();
    }

    @Override
    public int getTodayBookCount() {
        return bookingRepo.getTodayBookCount();
    }

    /*@Override
    public BookingDTO searchBooking(String custId) {
        PageRequest pageRequest=PageRequest.of(0,1, Sort.by("bookId").descending());
        Optional<Booking> booking=bookingRepo.findById();
        if(booking.isPresent()){
            return mapper.map(booking.get(), BookingDTO.class);
        }
        return  null;
    }*/


}
