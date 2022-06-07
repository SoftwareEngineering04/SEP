package subways.mycloset.service;

import subways.mycloset.dto.User;

import java.util.List;

public interface UserService {

    int addUser(User user);
    List<User> getAllUser();
}
