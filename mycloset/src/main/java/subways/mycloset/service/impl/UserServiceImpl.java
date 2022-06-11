package subways.mycloset.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import subways.mycloset.dao.UserDao;
import subways.mycloset.dto.LoginVo;
import subways.mycloset.dto.User;
import subways.mycloset.repository.UserRepository;
import subways.mycloset.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserDao userDao;

    @Override
    public String login(LoginVo loginVO, HttpServletRequest req) {
        HttpSession session = req.getSession();
        UserRepository userRepository = new UserRepository();

        User realUser = userDao.getUserInfoById(loginVO.getId());
        if(realUser == null) {
            return null;
        }

        if(realUser.getPassword().equals(loginVO.getPassword())) {
            session.setAttribute("sessionId", realUser.getId());
            session.setAttribute("password", realUser.getPassword());

            userRepository.save(loginVO);
        }
        else{
            System.out.println("비밀번호 일치하지 않음");
            return "비밀번호가 일치하지 않음";
        }

        User user = new User();

        String testId = (String) session.getAttribute("sessionId");

        System.out.println(testId);

        user.setId(testId);

        return user.getId();
    }

    @Override
    public User getSessionId(LoginVo loginVO, HttpServletRequest req) {
        HttpSession session = req.getSession();

        User user = new User();

        String testId = (String) session.getAttribute("sessionId");
        userDao.getUserInfoById(testId);

        user.setId(testId);

        return user;
    }


    public int addUser(User user){
        userDao.addUser(user);

        return 0;
    }

    public int updateUser(User user){
        userDao.updateUserInfo(user);

        return 0;
    }

    public int deleteUser(HttpServletRequest req){
        HttpSession session = req.getSession();

        String id = (String) session.getAttribute("sessionId");

        userDao.deleteUser(id);

        return 0;
    }

    public String findId(String name, String email){
        User user = userDao.getUserInfoByEmail(email);

        return user.getId();
    }

    public String findPassword(String id, String email){
        User user = userDao.getUserInfoById(id);

        return user.getPassword();
    }

    public User getUserInfoByEmail(String email){
        User user = userDao.getUserInfoByEmail(email);

        return user;
    }

    public User getUserInfoById(String id){
        User user = userDao.getUserInfoById(id);

        return user;
    }
    public List<User> getAllUser() {
        List<User> users = userDao.getAllUser();
        return users;
    }
}
