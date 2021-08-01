package easy.dil.service.impl;


import easy.dil.dto.PaymentDTO;
import easy.dil.entity.Payment;
import easy.dil.repo.PaymentRepo;
import easy.dil.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void addPayment(PaymentDTO dto) {
        repo.save(mapper.map(dto, Payment.class));
    }

    @Override
    public String getlastId() {
        return repo.getlastId();
    }
}
