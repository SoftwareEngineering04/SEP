package subways.mycloset.dto;


import lombok.Data;
import lombok.Getter;


@Getter
@Data
public class FileInfoDto {
    private int fId;
    private int cId;
    private String filePath;
}
