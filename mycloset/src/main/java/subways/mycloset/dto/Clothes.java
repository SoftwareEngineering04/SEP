package subways.mycloset.dto;

import lombok.Data;
import lombok.Getter;

import java.util.ArrayList;

@Getter
@Data
public class Clothes {
    private int cId;
    private String name;
    private String category;
    private ArrayList<filterDto> filter;
    //private String filter;
    private ArrayList<String> tag;
    //private String tag;
    private FileInfoDto photo;
    //private int photo;
    private ArrayList<Stylist> stylist;
    //private int stylist;
    private int isFavorite;
    private String id;

}
