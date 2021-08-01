package easy.dil.service.impl;

import easy.dil.dto.CustomerDTO;
import easy.dil.entity.Customer;
import easy.dil.repo.CustomerRepo;
import easy.dil.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void registerCustomer(CustomerDTO dto) {
        customerRepo.save(mapper.map(dto, Customer.class));
    }

    @Override
    public String getlastId() {
        return customerRepo.getlastId();
    }

    @Override
    public boolean nicAlreadyExists(String cid) {

        return customerRepo.existsById(cid);
    }

    @Override
    public ArrayList<CustomerDTO> getAllCustomer() {
        List<Customer> all=customerRepo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<CustomerDTO>>(){
        }.getType());
    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        Optional<Customer> customer=customerRepo.findById(id);
        if(customer.isPresent()){
            return mapper.map(customer.get(),CustomerDTO.class);
        }
        return  null;
    }
}
