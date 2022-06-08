package subways.mycloset.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import subways.mycloset.dao.ClothesDao;
import subways.mycloset.dto.Clothes;
import subways.mycloset.dto.User;
import subways.mycloset.service.ClothesService;

import java.util.List;

@Service
public class ClothesServiceImpl implements ClothesService {

    @Autowired
    ClothesDao clothesDao;

    public int addClothes(Clothes clothes){

        clothesDao.add(clothes);

        return 0;
    }

    public int deleteClothese(int cId){

        clothesDao.delete(cId);

        return 0;
    }

    public int updateClothes(Clothes clothes){
        clothesDao.updateClothes(clothes);
        return 0;
    }

    public Clothes getClothesBycId(int cId){
        Clothes clothes = clothesDao.getClothesBycId(cId);
        return clothes;
    }

    public List<Clothes> getClothesByName(String name, String id){
        List<Clothes> clothes = clothesDao.getClothesByName(name, id);

        return clothes;
    }

    public List<Clothes> getClothesByCategory(String category, String subcategory, String id){
        List<Clothes> clothes = clothesDao.getClothesByCategory(category, subcategory, id);

        return clothes;
    }

    public List<Clothes> getFavorites(String id){
        List<Clothes> clothes = clothesDao.getFavorites(id);

        return clothes;
    }

    public List<Clothes> getAllClothes(String id) {
        List<Clothes> clothes = clothesDao.getAllClothes(id);
        return clothes;
    }
}
