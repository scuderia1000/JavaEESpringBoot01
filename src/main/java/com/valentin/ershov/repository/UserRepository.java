package com.valentin.ershov.repository;

import com.valentin.ershov.entity.User;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.UUID;

/**
 * Created by Valek on 31.10.2017.
 */
//@Repository
//    @NoRepositoryBean
public interface UserRepository extends PagingAndSortingRepository<User, UUID>, UserRepositoryCustom {

}
