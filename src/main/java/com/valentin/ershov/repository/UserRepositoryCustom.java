package com.valentin.ershov.repository;

import com.valentin.ershov.entity.User;

import java.util.UUID;

/**
 * Created by Valek on 23.11.2017.
 */
//@Repository
public interface UserRepositoryCustom {

    UUID getUserId(String userName);

    Iterable<User> getUsers();

    User getUserByName(String name);
}
