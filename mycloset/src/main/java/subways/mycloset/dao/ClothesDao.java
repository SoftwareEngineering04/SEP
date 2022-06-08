package subways.mycloset.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import subways.mycloset.dto.Clothes;

import java.util.ArrayList;
import java.util.List;

@Repository
@Mapper
public interface ClothesDao {

    int add(Clothes clothes);
    int updateClothes(Clothes clothes);
    int delete(int cId);
    Clothes getClothesBycId(int cId);
    List<Clothes> getClothesByName(@Param("name") String name, @Param("id") String id);
    List<Clothes> getClothesByCategory(@Param("category") String category, @Param("subcategory") String subcategory, @Param("id") String id);
    List<Clothes> getClothesBySeason();
    List<Clothes> getFavorites(String id);

    List<Clothes> getAllClothes(String id);

    //ArrayList<Clothes> getClothesByTag();
}
