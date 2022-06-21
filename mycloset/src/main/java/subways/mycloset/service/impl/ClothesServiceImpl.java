package subways.mycloset.service.impl;


import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import subways.mycloset.dao.ClothesDao;
import subways.mycloset.dao.FilesDao;
import subways.mycloset.dto.Clothes;
import subways.mycloset.dto.Files;
import subways.mycloset.dto.User;
import subways.mycloset.service.ClothesService;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;



@Service
public class ClothesServiceImpl implements ClothesService {

    @Autowired
    ClothesDao clothesDao;
    @Autowired
    FilesDao filesDao;

    public int addClothes(HttpServletRequest req, @RequestParam(value = "img") MultipartFile file, Clothes clothes){
//    public int addClothes(Clothes clothes){

        Files files = new Files();
        String sourceFileName = file.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceFileName).toLowerCase();
        FilenameUtils.removeExtension(sourceFileName);

        File destinationFile;
        String destinationFileName;
        String fileUrl = "C:\\github\\SEP\\mycloset\\src\\main\\resources\\images\\";

        do{
            destinationFileName = RandomStringUtils.randomAlphanumeric(32 ) + "." + sourceFileNameExtension;
            destinationFile = new File(fileUrl + destinationFileName);
        }while(destinationFile.exists());

        destinationFile.getParentFile().mkdirs();

        try{
            file.transferTo(destinationFile);
        }catch (IOException e){
            System.out.println("error");
        }

        files.setFId(1);
        files.setCId(1);
        files.setFileName(destinationFileName);
        files.setFileOriName(sourceFileName);
        files.setFileUrl(fileUrl);

        int cid = 0;
        List<Clothes> lst = getAllClothesCount();
//        cid = lst.size();
        //System.out.println("lst 받아왔음^^");
        //System.out.println("lstsize"+lst.toArray().length);

        int i = 0;
        int maxCid = 0;
        while (i<lst.size()){   // 등록된 옷중 cId 맥스값 찾기
            cid = lst.get(i).getCId();
            //System.out.println("cid = " + cid);
            //System.out.println("i = " + i);
            i++;
            if (cid > maxCid) {
                maxCid = cid;
                System.out.println("maxCid = " + maxCid);
            }
        }
        clothes.setCId(++cid);  // 찾은 cid에서 +1 증가시킨 cid 할당
        clothes.setId("iddd");
        clothes.setPhoto(fileUrl);
        clothesDao.add(clothes);
        filesDao.fileUpload(files);
        //clothesDao.add(clothes);

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

    public List<Clothes> getAllClothesCount() {
        List<Clothes> clothes = clothesDao.getAllClothesCount();
        return clothes;
    }
}
