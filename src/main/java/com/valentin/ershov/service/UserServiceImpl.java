package com.valentin.ershov.service;

import com.valentin.ershov.dao.UserDao;
import com.valentin.ershov.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by Valek on 31.10.2017.
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    public User insert(User user) {
        return userDao.save(user);
    }

    public List<User> getUsers() {
        List<User> result = new ArrayList<>();
        userDao.findAll().forEach(result::add);
        return result;
    }
}
