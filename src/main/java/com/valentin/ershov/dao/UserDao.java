package com.valentin.ershov.dao;

import com.valentin.ershov.entity.User;

import java.util.UUID;

/**
 * Created by Valek on 31.10.2017.
 */
public interface UserDao extends Dao<User> {

    UUID getUserId(String userName);
}
