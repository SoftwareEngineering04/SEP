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
@RequestMapping
public class ClothesController {

    @Autowired
    ClothesServiceImpl clothesService;

    @GetMapping("/clothes/add")
    public int addClothes(Clothes clothes){ return clothesService.addClothes(clothes); }

    @GetMapping("/clothes2")
    public Clothes getClothesBycId(int cId){ return clothesService.getClothesBycId(cId); }

    @GetMapping("/clothes")
    public List<Clothes> testController() { return clothesService.getAllClothes(); }
}
