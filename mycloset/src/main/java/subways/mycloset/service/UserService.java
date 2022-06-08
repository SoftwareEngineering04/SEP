package subways.mycloset.service;

import subways.mycloset.dto.LoginVo;
import subways.mycloset.dto.User;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface UserService {

    String login(LoginVo loginVO, HttpServletRequest req);
    User getSessionId(LoginVo loginVO, HttpServletRequest req);


    int addUser(User user);
    int updateUser(User user);
    int deleteUser(HttpServletRequest req);

    String findId(String name, String email);


    //xxx
    User getUserInfoByEmail(String email);
    User getUserInfoById(String id);
    List<User> getAllUser();
}
