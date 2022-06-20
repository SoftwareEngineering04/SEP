package subways.mycloset.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import subways.mycloset.dto.Files;

@Repository
@Mapper
public interface FilesDao {

    int fileUpload(Files files);

    Files findfile(int fId);

}
