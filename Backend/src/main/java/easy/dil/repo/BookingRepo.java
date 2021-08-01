package easy.dil.repo;

import easy.dil.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookingRepo extends JpaRepository<Booking,String> {
    @Query(value="select Booking.bookId from Booking  order by 1 desc limit 1",nativeQuery = true)
    String getlastId();

    @Query(value="select b from Booking b where  b.cid=?1 ")
        //@Query(value = "select c from Customer c where c.id=?1 and c.address=?2")
    List<Booking> getAllBookingFromCId(String custId);

    @Query(value="select count(Booking.bookDate) from Booking where curdate() ",nativeQuery = true)
    int getTodayBookCount();
}
