package subways.mycloset.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import subways.mycloset.dao.UserDao;
import subways.mycloset.dto.User;
import subways.mycloset.service.UserService;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserDao userDao;

    public int addUser(User user){
        userDao.addUser(user);

        return 0;
    }
    public List<User> getAllUser() {
        List<User> users = userDao.getAllUser();
        return users;
    }
}
