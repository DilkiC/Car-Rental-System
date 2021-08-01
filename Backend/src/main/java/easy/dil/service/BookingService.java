package easy.dil.service;

import easy.dil.dto.BookingDTO;

import java.util.ArrayList;

public interface BookingService {
    String getlastId();
    void addBooking(BookingDTO bookingDTO);

    boolean nicAlreadyExists(String bid);

    ArrayList<BookingDTO> getAll();

    ArrayList<BookingDTO> searchBookDetailsFromCustId(String custId);



    int getTodayBookCount();
}
