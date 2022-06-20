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
    public int login(LoginVo loginVO, HttpServletRequest req) {
        HttpSession session = req.getSession();

        User realUser = userDao.getUserInfoById(loginVO.getId()); //db에서 일치하는 아이디의 유저 정보 가져옴

        if(realUser == null) {
            return 1;
        }

        if(realUser.getPassword().equals(loginVO.getPassword())) {
            session.setAttribute("sessionId", realUser.getId());
            session.setAttribute("password", realUser.getPassword());
            System.out.println((String)session.getAttribute("sessionId"));
        }
        else{
            System.out.println("비밀번호 일치하지 않음");
            return 2;
        }

        return 0;
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
        User realUser = userDao.getUserInfoById(user.getId());
        if(realUser.getId() != null)
            return -1;
        else {
            userDao.addUser(user);
            return 0;
        }
    }

    public User updateUser(HttpServletRequest req, User user){
        HttpSession session = req.getSession();

        String id = (String) session.getAttribute("sessionId");

        user.setId(id);

        userDao.updateUserInfo(user);

        return user;
    }

    public int deleteUser(HttpServletRequest req){
        HttpSession session = req.getSession();

        String id = (String) session.getAttribute("sessionId");
        //-test-
        System.out.println(id);

        userDao.deleteUser(id);

        return 0;
    }

    public String findId(String name, String email){
        User user = userDao.getUserInfoByEmail(email);

        if(user == null)
            return null;

        if( name == user.getName())
            return user.getId();
        else
            return null;

    }

    public String findPassword(String id, String email){
        User user = userDao.getUserInfoById(id);

        if(user == null)
            return null;

        if(email == user.getEmail())
            return user.getPassword();
        else
            return null;

    }

    public User getUserInfo(HttpServletRequest req){
        HttpSession session = req.getSession();
        String id = (String) session.getAttribute("sessionId");
        System.out.println(id);

        User user = userDao.getUserInfoById(id);

        return user;
    }
//------------------------------------------------------------------------------
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
