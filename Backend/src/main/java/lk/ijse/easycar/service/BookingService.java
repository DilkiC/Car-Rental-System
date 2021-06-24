package lk.ijse.easycar.service;

import lk.ijse.easycar.dto.BookingDTO;

import java.util.ArrayList;

public interface BookingService {
    void addBooking(BookingDTO bookingDTO);

    boolean nicAlreadyExists(String bid);

    ArrayList<BookingDTO>getAll();

    ArrayList<BookingDTO> searchBookDetailsFromCustId(String custId);

    String getlastId();

    int getTodayBookCount();
}
