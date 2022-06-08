package subways.mycloset.repository;

import subways.mycloset.dto.LoginVo;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class UserRepository {
    private static Map<String, String> store = new HashMap<>();

    public LoginVo save(LoginVo loginVo){
        store.put(loginVo.getId(), loginVo.getPassword());

        return loginVo;
    }

}
