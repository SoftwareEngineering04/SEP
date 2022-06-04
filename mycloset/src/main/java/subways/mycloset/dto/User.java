package subways.mycloset.dto;

import lombok.Data;

@Data
public class User {
    //로그인 정보
    private String id;
    private String password;

    //유저 상세 정보
    private String name;
    private String email;
}
