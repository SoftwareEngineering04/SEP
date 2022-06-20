package subways.mycloset;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import subways.mycloset.dao.ClothesDao;
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

//	@Test
//	public void addClothes(){
//		Clothes clothes = new Clothes();
//
//		clothes.setCId(2);
//		clothes.setName("asdf");
//		clothes.setCategory("상의");
//		clothes.setSubcategory("자켓");
//		clothes.setFilter("SUMMER");
//		clothes.setPhoto("sldkfjef");
//		clothes.setFavorite(true);
//		clothes.setId("iddd");
//
//		clothesService.addClothes(clothes);
//
//	}

	@Test
	public void fineClothes(){
		Clothes clothes = new Clothes();
		clothes.setId("lweyine");

		int cid;
		List<Clothes> lst = clothesService.getAllClothesCount();
//        cid = lst.size();
		System.out.println("lst 받아왔음^^");
		System.out.println("lstsize"+lst.toArray().length);

		int i = 0;
		int maxCid = 0;
		while (i<lst.size()){   // 등록된 옷중 cId 맥스값 찾기
			cid = lst.get(i).getCId();
			System.out.println("cid = " + cid);
			System.out.println("i = " + i);
			i++;
			if (cid > maxCid) {
				maxCid = cid;
				System.out.println("maxCid = " + maxCid);
			}
		}
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
