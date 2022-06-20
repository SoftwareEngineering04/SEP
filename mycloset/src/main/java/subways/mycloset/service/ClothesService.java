package subways.mycloset.service;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import subways.mycloset.dto.Clothes;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface ClothesService {

    int addClothes(Clothes clothes, HttpServletRequest req, MultipartFile file);
//    int addClothes(Clothes clothes);
    int deleteClothese(int cId);
    int updateClothes(Clothes clothes);
    Clothes getClothesBycId(int cId);
    List<Clothes> getClothesByName(String name, String id);
    List<Clothes> getClothesByCategory(String category, String subcategory, String id);
    List<Clothes> getFavorites(String id);
    List<Clothes> getAllClothes(String id);
    List<Clothes> getAllClothesCount();
}
