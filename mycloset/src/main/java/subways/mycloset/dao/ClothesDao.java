package subways.mycloset.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import subways.mycloset.dto.Clothes;

import java.util.ArrayList;
import java.util.List;

@Repository
@Mapper
public interface ClothesDao {

    int add(Clothes clothes);
    Clothes update(Clothes clothes);
    int delete(int cId);
    Clothes getClothesBycId(int cId);
    ArrayList<Clothes> getClothesByName();
    ArrayList<Clothes> getClothesByTag();
    ArrayList<Clothes> getClothesByCategory();
    ArrayList<Clothes> getClothesBySeason();
    ArrayList<Clothes> getFavorites();

    List<Clothes> getAllClothes();
}
