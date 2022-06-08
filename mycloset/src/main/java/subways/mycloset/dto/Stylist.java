package subways.mycloset.dto;


import lombok.Data;
import lombok.Getter;

@Data
public class Stylist {
    private int cId;
    private int stylistCnt;
    private String name;
    //private FileInfoDto photo;
    private int photo;
}
