package org.wecancodeit.serverside.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.FormsResource;
import org.wecancodeit.serverside.models.JournalResource;
import org.wecancodeit.serverside.models.MoodResource;
import org.wecancodeit.serverside.models.User;
import org.wecancodeit.serverside.repos.UserRepository;
import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserController {

    @Resource
    private UserRepository userRepo;

//    @GetMapping("/api/users/{username}")
//    public Optional<User> getUser(@PathVariable String username){
//        return userRepo.findByUsername(username);
//    }

    @GetMapping("/api/users/{username}")
    public User getUser(@PathVariable String username){
        Optional<User> x =  userRepo.findByUsername(username);
        User all = new User(x.get().getUsername(),x.get().getMoods(),x.get().getJournals(),x.get().getForms());
        return all;
    }
}

