package subways.mycloset.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import subways.mycloset.dto.User;

import java.util.List;

@Repository
@Mapper
public interface UserDao {

    int addUser(User user);
    User updateUserInfo(User user);
    int deleteUser(String id);
    User getUserInfoByEmail(String email);
    User getUserInfoById(String id);
    List<User> getAllUser();
}
