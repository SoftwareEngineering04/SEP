package subways.mycloset.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import subways.mycloset.dto.Filter;

@Repository
@Mapper
public interface FilterDao {
    int addFilter(Filter filter);
    int updateFilter(int cId);
    int deleteFilter(int cId);
    Filter getFilter(int cId);
}
