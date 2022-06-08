package subways.mycloset.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import subways.mycloset.dao.ClothesDao;
import subways.mycloset.dto.Clothes;
import subways.mycloset.service.ClothesService;

@Service
public class ClothesServiceImpl implements ClothesService {

    @Autowired
    ClothesDao clothesDao;

    public int addClothes(Clothes clothes){

        clothesDao.add(clothes);

        return 0;
    }

    public Clothes getClothesInfo(int cId){

        Clothes clothes = clothesDao.getClothesBycId(cId);

        return clothes;
    }
}
