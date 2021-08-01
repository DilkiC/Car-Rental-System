package easy.dil.service.impl;

import easy.dil.dto.BookingDTO;
import easy.dil.entity.Booking;
import easy.dil.repo.BookingRepo;
import easy.dil.service.BookingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepo bookingRepo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public String getlastId() {
        return bookingRepo.getlastId();
    }

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
        List<Booking> all=bookingRepo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<BookingDTO>>(){}.getType());

    }

    @Override
    public ArrayList<BookingDTO> searchBookDetailsFromCustId(String custId) {
        List<Booking> all=bookingRepo.getAllBookingFromCId(custId);
        return mapper.map(all,new TypeToken<ArrayList<BookingDTO>>(){}.getType());

    }

    @Override
    public int getTodayBookCount() {
        return bookingRepo.getTodayBookCount();
    }
}
