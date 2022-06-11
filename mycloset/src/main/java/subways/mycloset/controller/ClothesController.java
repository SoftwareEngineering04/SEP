package subways.mycloset.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import subways.mycloset.dto.Clothes;
import subways.mycloset.dto.User;
import subways.mycloset.service.impl.ClothesServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/clothes")
public class ClothesController {

    @Autowired
    ClothesServiceImpl clothesService;

    @GetMapping("/add")
    public int addClothes(Clothes clothes){ return clothesService.addClothes(clothes); }
    @GetMapping("/update")
    public int updateClothes(Clothes clothes){ return clothesService.updateClothes(clothes); }
    @GetMapping("/delete")
    public int deleteClothes(int cId){ return clothesService.deleteClothese(cId); }


    //인자 세션아이디로 바꾸기
    @GetMapping("/byCategory")
    public List<Clothes> getClothesByCategory(String category, String subcategory, String id){ return clothesService.getClothesByCategory(category, subcategory, id); }
    @GetMapping("/bycId")
    public Clothes getClothesInfo(int cId){ return clothesService.getClothesBycId(cId); }


    //태그 일단 제외
    @GetMapping("/byName")
    public List<Clothes> getClothesByName(String name, String id){ return clothesService.getClothesByName(name, id); }

    @GetMapping("/byFavorite")
    public List<Clothes> getFavorites(String id){ return clothesService.getFavorites(id); }

    @GetMapping("/all")
    public List<Clothes> getAllClothes(String id) { return clothesService.getAllClothes(id); }
}
