package subways.mycloset.controller;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import subways.mycloset.dto.Clothes;
import subways.mycloset.dto.Filter;
import subways.mycloset.dto.User;
import subways.mycloset.service.impl.ClothesServiceImpl;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/clothes")
public class ClothesController {

    @Autowired
    ClothesServiceImpl clothesService;

    @RequestMapping(value="/add", method = {RequestMethod.GET, RequestMethod.POST})
    public int addClothes(HttpServletRequest req, @RequestParam(value = "img") MultipartFile file, Clothes clothes){ return clothesService.addClothes(req, file, clothes); }
    //    public int addClothes(Clothes clothes){ return clothesService.addClothes(clothes); }
    @RequestMapping(value="/update", method = {RequestMethod.GET, RequestMethod.POST})
    public int updateClothes(Clothes clothes){ return clothesService.updateClothes(clothes); }
    @RequestMapping(value="/delete", method = {RequestMethod.GET, RequestMethod.POST})
    public int deleteClothes(int cId){ return clothesService.deleteClothese(cId); }


    //인자 세션아이디로 바꾸기
    @RequestMapping(value="/byCategory", method = {RequestMethod.GET, RequestMethod.POST})
//    public List<Clothes> getClothesByCategory(Clothes clothes){ return clothesService.getClothesByCategory(clothes); }
    public List<Clothes> getClothesByCategory(Clothes clothes){ return clothesService.getClothesByCategory(clothes); }
    @RequestMapping(value="/bycId", method = {RequestMethod.GET, RequestMethod.POST})
    public Clothes getClothesInfo(int cId){ return clothesService.getClothesBycId(cId); }


    //태그 일단 제외
    @RequestMapping(value="/byName", method = {RequestMethod.GET, RequestMethod.POST})
    public List<Clothes> getClothesByName(String name, String id){ return clothesService.getClothesByName(name, id); }

    @RequestMapping(value="/byFavorite", method = {RequestMethod.GET, RequestMethod.POST})
    public List<Clothes> getFavorites(String id){ return clothesService.getFavorites(id); }

    @GetMapping("/all")
    public List<Clothes> getAllClothes(String id) { return clothesService.getAllClothes(id); }


}