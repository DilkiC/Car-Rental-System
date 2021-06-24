package lk.ijse.easycar.service;


import lk.ijse.easycar.dto.CustomerDTO;
import lk.ijse.easycar.entity.Customer;

import java.util.ArrayList;

public interface CustomerService {
    void registerCustomer(CustomerDTO dto);
    void deleteCustomer(String id);
    void updateCustomer(CustomerDTO dto);
    CustomerDTO searchCustomer(String id);
    ArrayList<CustomerDTO>getAllCustomer();

    boolean nicAlreadyExists(String cid);

    String getlastId();
    int getRowCount();




    //boolean nicAlreadyExists(String cid);
}
