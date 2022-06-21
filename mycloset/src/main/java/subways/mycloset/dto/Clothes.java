package subways.mycloset.dto;

import lombok.Data;

import java.lang.reflect.Array;
import java.util.List;

@Data
public class Clothes {
    private int cId;
    private String name;
    private String category;
    private String subcategory;
    private String[] filter;
    private String photo;
    private boolean isFavorite;
    private String id;


    //안할거
    //private List<String> tag;
    //private List<Integer> stylist;
}