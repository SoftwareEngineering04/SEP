package subways.mycloset.controller;

import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import subways.mycloset.dto.LoginVo;
import subways.mycloset.dto.User;
import subways.mycloset.service.impl.UserServiceImpl;

import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserServiceImpl userService;

    @CrossOrigin("*")
    @RequestMapping(value="/test", method = {RequestMethod.GET, RequestMethod.POST})
    public String test(String id, String password){
        System.out.println(id);

        return id ;
    }


    @RequestMapping(value="/login", method = {RequestMethod.GET, RequestMethod.POST})
    public int login(String id, String password, HttpServletRequest req){

        LoginVo loginVo = new LoginVo();
        loginVo.setId(id);
        loginVo.setPassword(password);

        userService.login(loginVo, req);

        User sessionId = userService.getSessionId(loginVo, req);
        //추가한부분
        if(sessionId.getId() != null)
            return 0;

        return -1;
    }

    @GetMapping("/user-adduser")
    public int addUser(User user){ return userService.addUser(user); }
    @GetMapping("/user-update")
    public int update(User user){ return userService.updateUser(user); }
    @GetMapping("/user-delete")
    public int delete(HttpServletRequest req){ return userService.deleteUser(req); }

    @GetMapping("/user-findid")
    public String findId(@RequestParam("name") String name, @RequestParam("email") String email){
        String id = userService.findId(name, email);
        return id;
    }
    @GetMapping("/user-findpw")
    public String findPasswor(@RequestParam("id") String id, @RequestParam("email") String email){
        String password = userService.findPassword(id, email);

        return password;
    }

    @GetMapping("/user-byid")
    public User getUserInfoById(@RequestParam("id") String id){ return userService.getUserInfoById(id); }

    //logout


    //Controller에서 삭제될 예정 test용

    @GetMapping("/user-byemail")
    public User getUserInfoByEmail(@RequestParam("email") String email){ return userService.getUserInfoByEmail(email); }

    @GetMapping("/user")
    public List<User> testController() {
        return userService.getAllUser();
    }

    //리액트 연결 테스트
    @GetMapping("/users")
    public String test(){ return "Test test"; }
}
