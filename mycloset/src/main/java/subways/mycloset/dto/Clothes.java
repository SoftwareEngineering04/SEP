package subways.mycloset.dto;

import lombok.Data;
import lombok.Getter;

import java.util.ArrayList;

@Getter
@Data
public class Clothes {
    private int cId;
    private String name;
    private ArrayList<filterDto> filter;
    private ArrayList<String> tag;
    private FileInfoDto photo;
    private ArrayList<Stylist> stylist;
    private boolean isFaborite;
    private String id;
}
