package com.valentin.ershov.service;

import com.valentin.ershov.repository.UserRepository;
import com.valentin.ershov.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Valek on 31.10.2017.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    public User insert(User user) {
        return userRepository.save(user);
    }

    public List<User> getUsers() {
        List<User> result = new ArrayList<>();
        userRepository.getUsers().forEach(result::add);
        return result;
    }
}
