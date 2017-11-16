package com.valentin.ershov.dao;

import com.valentin.ershov.entity.AbstractEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Created by Valek on 31.10.2017.
 */
@NoRepositoryBean
public interface Dao<T extends AbstractEntity> extends PagingAndSortingRepository<T, UUID> {
}
