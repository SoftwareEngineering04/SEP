package subways.mycloset.dto;

import lombok.Data;

import java.util.List;

@Data
public class Clothes {
    private int cId;
    private String name;
    private String category;
    private String subcategory;
    private Filter filter;
    private String photo;
    private boolean isFavorite;
    private String id;
    //private List<String> tag;
    //private List<Integer> stylist;

}
