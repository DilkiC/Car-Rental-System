package lk.ijse.easycar.service.impl;


import lk.ijse.easycar.dto.CustomerDTO;
import lk.ijse.easycar.entity.Customer;
import lk.ijse.easycar.exception.ValidateException;
import lk.ijse.easycar.repo.CustomerRepo;
import lk.ijse.easycar.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private ModelMapper modelMapper;



    @Override
    public void registerCustomer(CustomerDTO dto) {
        customerRepo.save(modelMapper.map(dto, Customer.class));

    }

    @Override
    public void deleteCustomer(String id) {
        if(!customerRepo.existsById(id)){
            throw new ValidateException("No customer for delete");
        }
        customerRepo.deleteById(id);
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if(customerRepo.existsById(dto.getCustId())){
            customerRepo.save(modelMapper.map(dto,Customer.class));
        }

    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        Optional<Customer>customer=customerRepo.findById(id);
        if(customer.isPresent()){
            return modelMapper.map(customer.get(),CustomerDTO.class);
        }
        return  null;
    }

    @Override
    public ArrayList<CustomerDTO> getAllCustomer() {
        List<Customer> all=customerRepo.findAll();
        return modelMapper.map(all,new TypeToken<ArrayList<CustomerDTO>>(){
        }.getType());
    }

    @Override
    public boolean nicAlreadyExists(String cid) {
        return customerRepo.existsById(cid);
    }

    @Override
    public String getlastId() {
        return customerRepo.getlastId();
    }

    @Override
    public int getRowCount() {
        return customerRepo.getRowCount();
    }



}
