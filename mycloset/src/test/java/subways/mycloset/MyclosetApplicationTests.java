package subways.mycloset;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import subways.mycloset.dto.User;
import subways.mycloset.service.UserService;

@SpringBootTest
class MyclosetApplicationTests {

	@Autowired
	UserService userService;

	@DisplayName("회원가입")
	@Test
	public void register(){
		User user1 = new User();
		user1.setId("qkqhajd");
		user1.setPassword("ghkdud790");
		user1.setName("lee");
		user1.setEmail("werffwer");

		userService.addUser(user1);
	}

	@Test
	void contextLoads() {
	}

}
