package easy.dil.service;

import easy.dil.dto.CustomerDTO;

import java.util.ArrayList;

public interface CustomerService {
    void registerCustomer(CustomerDTO dto);
    String getlastId();
    boolean nicAlreadyExists(String cid);
    ArrayList<CustomerDTO> getAllCustomer();

    CustomerDTO searchCustomer(String id);
}
