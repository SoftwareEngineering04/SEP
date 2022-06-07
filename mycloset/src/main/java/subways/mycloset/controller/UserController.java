package subways.mycloset.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import subways.mycloset.dto.User;
import subways.mycloset.service.impl.UserServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserServiceImpl userService;

    @GetMapping("/user-adduser")
    public int addUser(User user){ return userService.addUser(user); }

    @GetMapping("/user")
    public List<User> testController() {
        return userService.getAllUser();
    }
}
