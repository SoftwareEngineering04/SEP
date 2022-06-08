package subways.mycloset.service;

import subways.mycloset.dto.Clothes;

import java.util.List;

public interface ClothesService {

    int addClothes(Clothes clothes);
    Clothes getClothesBycId(int cId);
    List<Clothes> getAllClothes();
}
