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

    @GetMapping("/clothes2")
    public Clothes getClothesInfo(int cId){ return clothesService.getClothesInfo(cId);}

    @GetMapping("/clothes")
    public List<Clothes> testController() { return clothesService.getAllClothes(); }
}
