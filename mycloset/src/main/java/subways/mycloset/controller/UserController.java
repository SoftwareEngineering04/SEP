package subways.mycloset.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import subways.mycloset.dto.LoginVo;
import subways.mycloset.dto.User;
import subways.mycloset.service.impl.UserServiceImpl;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserServiceImpl userService;

    @GetMapping("/test")
    public User test(@RequestParam("id") String id,@RequestParam("password") String password, HttpServletRequest req){

        LoginVo loginVo = new LoginVo();
        loginVo.setId(id);
        loginVo.setPassword(password);

        userService.login(loginVo, req);

        User sessionId = userService.getSessionId(loginVo, req);

        System.out.println("sessionId = " + sessionId);

        return sessionId;
    }

    @GetMapping("/user-adduser")
    public int addUser(User user){ return userService.addUser(user); }

    @GetMapping("user-update")
    public int update(User user){ return userService.updateUser(user); }
    @GetMapping("/user-delete")
    public int delete(HttpServletRequest req){ return userService.deleteUser(req); }

    @GetMapping("user-findid")
    public String findId(@RequestParam("name") String name, @RequestParam("email") String email){
        String id = userService.findId(name, email);
        return id;
    }

    @GetMapping("user-findpw")
    public String findPasswor(@RequestParam("id") String id, @RequestParam("email") String email){
        String password = userService.findPassword(id, email);

        return password;
    }



    //Controller에서 삭제될 예정 test용

    @GetMapping("user-byemail")
    public User getUserInfoByEmail(@RequestParam("email") String email){ return userService.getUserInfoByEmail(email); }
    @GetMapping("/user-byid")
    public User getUserInfoById(@RequestParam("id") String id){ return userService.getUserInfoById(id); }

    @GetMapping("/user")
    public List<User> testController() {
        return userService.getAllUser();
    }
}
