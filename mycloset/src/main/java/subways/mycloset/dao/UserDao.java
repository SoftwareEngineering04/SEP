package subways.mycloset.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import subways.mycloset.dto.User;

import java.util.List;

@Repository
@Mapper
public interface UserDao {
    List<User> getAllUser();
}
