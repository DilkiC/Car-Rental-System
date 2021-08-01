package easy.dil.service;

import easy.dil.dto.PaymentDTO;


public interface PaymentService {
    void addPayment(PaymentDTO dto);

    String getlastId();

}
