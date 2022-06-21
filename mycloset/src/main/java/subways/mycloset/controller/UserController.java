package subways.mycloset.controller;

import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import subways.mycloset.dto.LoginVo;
import subways.mycloset.dto.User;
import subways.mycloset.service.impl.UserServiceImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserServiceImpl userService;

    @RequestMapping(value="/login", method = {RequestMethod.GET, RequestMethod.POST})
    public User login(LoginVo loginVo, HttpServletRequest req){
        return userService.login(loginVo, req);
    } //0: 로그인 성공, 1: 일치하는 아이디 없음, 2: 비밀번호 일치하지 않음
    @RequestMapping(value = "/logout", method = {RequestMethod.GET, RequestMethod.POST})
    public void logout(HttpSession session){ session.invalidate(); }
    @RequestMapping(value="/user-adduser", method = {RequestMethod.GET, RequestMethod.POST})
    public User register(User user){ return userService.addUser(user); }
    @RequestMapping(value="/user-update", method = {RequestMethod.GET, RequestMethod.POST})
    public User update(HttpServletRequest req, User user){ return userService.updateUser(req, user); }
    @RequestMapping(value="/user-delete", method = {RequestMethod.GET, RequestMethod.POST})
    public int delete(HttpServletRequest req, String id){ return userService.deleteUser(req, id); }

    @RequestMapping(value="/user-findid", method = {RequestMethod.GET, RequestMethod.POST})
    public String findId(String name, String email){
        String id = userService.findId(name, email);
        return id;
    }
    @RequestMapping(value="/user-findpw", method = {RequestMethod.GET, RequestMethod.POST})
    public String findPassword(String id, String email){
        String password = userService.findPassword(id, email);
        System.out.println(password);

        return password;
    }
    @GetMapping("/user-info")
    public User getUserInfo(HttpServletRequest req){ return userService.getUserInfo(req); }

    //----------------------------------------------------------------------------------------


    @GetMapping("/user-byid")
    public User getUserInfoById(@RequestParam("id") String id){ return userService.getUserInfoById(id); }


    @GetMapping("/user-byemail")
    public User getUserInfoByEmail(@RequestParam("email") String email){ return userService.getUserInfoByEmail(email); }

    @GetMapping("/user")
    public List<User> testController() {
        return userService.getAllUser();
    }


}
