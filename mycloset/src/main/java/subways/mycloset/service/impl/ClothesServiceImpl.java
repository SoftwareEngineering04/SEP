package subways.mycloset.service.impl;


import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import subways.mycloset.dao.ClothesDao;
import subways.mycloset.dao.FilesDao;
import subways.mycloset.dao.FilterDao;
import subways.mycloset.dto.Clothes;
import subways.mycloset.dto.Files;
import subways.mycloset.dto.User;
import subways.mycloset.dto.Filter;
import subways.mycloset.service.ClothesService;
import subways.mycloset.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
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
    @Autowired
    FilterDao filterDao;

    public int addClothes(HttpServletRequest req, @RequestParam(value = "img") MultipartFile file, Clothes clothes){
//    public int addClothes(Clothes clothes){

        Files files = new Files();
        Filter filter = new Filter();

        String sourceFileName = file.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceFileName).toLowerCase();
        FilenameUtils.removeExtension(sourceFileName);

        File destinationFile;
        String destinationFileName;
        String fileUrl = "C:\\github\\SEP\\my_closet_front\\public\\images\\";

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
        clothes.setId(clothes.getId());
        clothes.setPhoto("/images/" + files.getFileName());


        i=0;
        String season ;
        while (i<clothes.getFilter().length){
            season = (String) clothes.getFilter()[i];
            if (season.equals("봄")){
                filter.setSpring(true);
            } else if (season.equals("여름")) {
                filter.setSummer(true);
            } else if (season.equals("가을")) {
                filter.setFall(true);
            }else if (season.equals("겨울")) {
                filter.setWinter(true);
            }

            // System.out.println("(String) clothes.getFilter()[0] = " + (String) clothes.getFilter()[i]);
            i++;
        }
        System.out.println("filter = " + filter);
        //System.out.println("clothes = " + clothes.getFilter().length);


        files.setFId(cid);
        files.setCId(cid);
        filter.setSId((cid));


        clothesDao.add(clothes);
        filesDao.fileUpload(files);
        filterDao.addFilter(filter);


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
//        System.out.println(cId instanceof Integer);
        Filter filter = filterDao.getFilter(cId);

        Clothes clothes = clothesDao.getClothesBycId(cId);
        String[] a = new String[4];
        int i=0;
        if (filter.isSpring()) {
            a[i++] = "봄";
        }
        if (filter.isSummer()) {
            a[i++] = "여름";
        }
        if (filter.isFall()) {
            a[i++] = "가을";
        }
        if (filter.isWinter()) {
            a[i++] = "겨울";
        }
        clothes.setFilter(a);
        return clothes;
    }

    public List<Clothes> getClothesByName(String name, String id){
        List<Clothes> clothes = clothesDao.getClothesByName(name, id);

        return clothes;
    }

//    public List<Clothes> getClothesByCategory(Clothes clothes){
//        List<Clothes> lst = clothesDao.getClothesByCategory(clothes.getCategory(), clothes.getSubcategory(), clothes.getId());
//        //filterDao.getFilter(clothes.getCId());
//        return lst;
//    }

    public List<Clothes> getClothesByCategory(Clothes clothes){
        Filter filter = new Filter();
        int check = 0;
        int i=0;
        String season ;
        //String[] a = clothes.getFilter();
        while (i<clothes.getFilter().length){
            season = (String) clothes.getFilter()[i];
            if (season.equals("봄")){
                filter.setSpring(true);
                check++;
            } else if (season.equals("여름")) {
                filter.setSummer(true);
                check++;
            } else if (season.equals("가을")) {
                filter.setFall(true);
                check++;
            }else if (season.equals("겨울")) {
                filter.setWinter(true);
                check++;
            }

            // System.out.println("(String) clothes.getFilter()[0] = " + (String) clothes.getFilter()[i]);
            i++;
        }
        filter.setCategory(clothes.getCategory());
        filter.setSubCategory(clothes.getSubcategory());
        filter.setId(clothes.getId());
        System.out.println("filter = " + filter);

        List<Clothes> list;
        if(check==0){
            if(filter.getSubCategory().equals("전체")){
                list = clothesDao.getClothesByCategoryAll(filter);
                return list;
            }
            else{
                list = clothesDao.getClothesByCategory(filter);
                return list;
            }
        }
        else {
            if(filter.getSubCategory().equals("전체")){
                list = clothesDao.getClothesByCategoryAllAndFilter(filter);
                return list;
            }
            else{
                list = clothesDao.getClothesByCategoryAndFilter(filter);
                return list;
            }
        }
    }

    public List<Clothes> getFavorites(String id){
        List<Clothes> clothes = clothesDao.getFavorites(id);

        return clothes;
    }

    public List<Clothes> getAllClothes(String id) { // 모든 옷 가져오기
        List<Clothes> clothes = clothesDao.getAllClothes(id);

        return clothes;
    }

    //
    public List<Clothes> getAllClothesCount() { // max cId를 체크하기 위한 함수
        List<Clothes> clothes = clothesDao.getAllClothesCount();
        return clothes;

    }

//    public List<Clothes> test(){
//        Filter filter = new Filter();
//        filter.setSpring(false);
//        filter.setSummer(false);
//        filter.setFall(true);
//        filter.setWinter(true);
//        List<Clothes> clothes = clothesDao.test();
//        return clothes;
//    }
}