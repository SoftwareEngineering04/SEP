package subways.mycloset;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import subways.mycloset.dto.Clothes;
import subways.mycloset.dto.Filter;
import subways.mycloset.dto.User;
import subways.mycloset.service.ClothesService;
import subways.mycloset.service.UserService;

import java.net.http.HttpRequest;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@SpringBootTest
class MyclosetApplicationTests {

	@Autowired
	UserService userService;
	@Autowired
	ClothesService clothesService;


	@Test
	public void login(){
		MockHttpSession session = new MockHttpSession();
	}
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
	public void addClothes(){
		Clothes clothes = new Clothes();

		clothes.setCId(4);
		clothes.setName("dlfma");
		clothes.setCategory("상의");
		clothes.setSubcategory("자켓");
		clothes.setFilter(Filter.SUMMER);
		clothes.setPhoto("sldkfjef");
		clothes.setFavorite(true);
		clothes.setId("lweyine");

		clothesService.addClothes(clothes);

	}

	@Test
	public void finduser(){
		User user = userService.getUserInfoById("lweyine");
		System.out.println(user);
	}

	@Test
	public void deleteClothes(){
		clothesService.deleteClothese(3);
	}

	@Test
	public void getClothesByCid(){
		Clothes clothes = clothesService.getClothesBycId(3);

		System.out.println(clothes);
	}

	@Test
	public void update(){
		User user = new User();
		user.setId("lewyine");
		user.setPassword("wldnjs790");
		user.setName("lee");
		user.setEmail("lweyine@naver.com");

	}



	@Test
	void contextLoads() {
	}

}
