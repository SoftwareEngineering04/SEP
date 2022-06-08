package subways.mycloset.dto;


import lombok.Data;
import lombok.Getter;

@Getter
@Data
public class Stylist {
    private int cId;
    private int stylistCnt;
    private String name;
    private FileInfoDto photo;
}
