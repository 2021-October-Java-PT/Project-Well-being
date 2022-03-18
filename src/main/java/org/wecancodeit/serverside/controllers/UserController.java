package org.wecancodeit.serverside.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.User;
import org.wecancodeit.serverside.repos.UserRepository;
import javax.annotation.Resource;
import java.util.Optional;

// @RequestMapping("https://projectwellbeing-demo.herokuapp.com")
@RestController
@CrossOrigin
public class UserController {

    @Resource
    private UserRepository userRepo;

    @GetMapping("/api/users/{username}")
    public Optional<User> getUser(@PathVariable String username){
        return userRepo.findByUsername(username);
    }
}

