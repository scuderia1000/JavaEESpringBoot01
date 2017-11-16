package com.valentin.ershov.controller;

import com.valentin.ershov.entity.User;
import com.valentin.ershov.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

/**
 * Created by Valek on 31.10.2017.
 */
@Controller
public class UserController {
    @Autowired
    UserService userService;

    @MessageMapping("/users/getUsers")
    @SendTo("/allUsers/info")
    public List<User> getUsersInfo() {
        return userService.getUsers();
    }
}
