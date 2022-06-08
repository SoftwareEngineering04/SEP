package subways.mycloset.service;

import subways.mycloset.dto.Clothes;

public interface ClothesService {

    int addClothes(Clothes clothes);
    Clothes getClothesInfo(int cId);

}
