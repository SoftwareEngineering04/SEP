package subways.mycloset.service;

import subways.mycloset.dto.Clothes;

import java.util.List;

public interface ClothesService {

    int addClothes(Clothes clothes);
    int deleteClothese(int cId);
    int updateClothes(Clothes clothes);
    Clothes getClothesBycId(int cId);
    List<Clothes> getClothesByName(String name, String id);
    List<Clothes> getClothesByCategory(String category, String subcategory, String id);
    List<Clothes> getFavorites(String id);
    List<Clothes> getAllClothes(String id);
}
