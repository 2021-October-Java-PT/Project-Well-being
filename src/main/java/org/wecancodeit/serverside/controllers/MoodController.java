package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.MoodResource;
import org.wecancodeit.serverside.models.User;
import org.wecancodeit.serverside.repos.MoodRepository;
import org.wecancodeit.serverside.repos.UserRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class MoodController {
    @Resource
    private UserRepository userRepo;

    @Resource
    private MoodRepository moodRepo;

    @GetMapping("/api/mood")
    public Collection<MoodResource> getMood() {
        return (Collection<MoodResource>) moodRepo.findAll();
    }
//    @GetMapping("/api/{username}/mood")
//    public Collection<MoodResource> getMood(@PathVariable String username) {
//        Optional<User> user = userRepo.findByUsername(username);
//        return user.get().getMood();
//    }

    @GetMapping("/api/mood/{id}")
    public Optional<MoodResource> getMoodById(@PathVariable Long id) {
        return moodRepo.findById(id);
    }

    @PostMapping("/api/mood/add-mood")
    public String addMood(@RequestBody String body) throws JSONException {
        JSONObject newResource = new JSONObject(body);
        String value = newResource.getString("value");

        Optional<MoodResource> moodToAddOpt = moodRepo.findByValue(value);

        if (moodToAddOpt.isEmpty()) {
            MoodResource resourceToAdd = new MoodResource(value);
            moodRepo.save(resourceToAdd);
            return "redirect:/api/mood";
        }

        return "redirect:/api/mood";
    }
}