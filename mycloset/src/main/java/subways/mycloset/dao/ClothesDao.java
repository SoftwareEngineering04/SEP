package subways.mycloset.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import subways.mycloset.dto.Clothes;
import subways.mycloset.dto.Filter;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Repository
@Mapper
public interface ClothesDao {

    int add(Clothes clothes);
    //    int add(Clothes clothes);
    int updateClothes(Clothes clothes);
    int delete(int cId);
    Clothes getClothesBycId(int cId);
//    List<Clothes> getClothesByName(@Param("name") String name, @Param("id") String id);
    List<Clothes> getClothesByName(String name, String id);
    //    List<Clothes> getClothesByCategory(@Param("category") String category, @Param("subcategory") String subcategory, @Param("id") String id);
    List<Clothes> getClothesByCategory(Filter filter);
    List<Clothes> getClothesBySeason();
    List<Clothes> getFavorites(String id);

    List<Clothes> getAllClothes(String id);

    List<Clothes> getAllClothesCount();

    //ArrayList<Clothes> getClothesByTag();

    //    Filter test(Filter filter);
    List<Clothes> test(Filter filter);

}