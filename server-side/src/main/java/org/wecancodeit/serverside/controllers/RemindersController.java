package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.RemindersResource;
import org.wecancodeit.serverside.models.User;
import org.wecancodeit.serverside.repos.RemindersRepository;
import org.wecancodeit.serverside.repos.UserRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class RemindersController {
    @Resource
    private UserRepository userRepo;

    @Resource
    private RemindersRepository remindersRepo;

    @GetMapping("/api/{username}/reminders")
    public Collection<RemindersResource> getReminders(@PathVariable String username) {
        Optional<User> user = userRepo.findByUsername(username);
        return user.get().getReminders();
    }

    @GetMapping("/api/reminders/{id}")
    public Optional<RemindersResource> getRemindersById(@PathVariable Long id) {
        return remindersRepo.findById(id);
    }

    @PostMapping("/api/{username}/reminders/add-reminder")
    public Collection<RemindersResource> addReminder(@PathVariable String username, @RequestBody String body) throws JSONException {
        JSONObject newResource = new JSONObject(body);
        String name = newResource.getString("name");
        String category = newResource.getString("category");
        String priority = newResource.getString("priority");
        String description = newResource.getString("description");

        Optional<RemindersResource> reminderToAddOpt = remindersRepo.findByName(name);

        Optional<User> user = userRepo.findByUsername(username);

        if (reminderToAddOpt.isEmpty()) {
            RemindersResource resourceToAdd = new RemindersResource(name, category, priority, description);
            remindersRepo.save(resourceToAdd);
            user.get().addReminder(resourceToAdd);
            userRepo.save(user.get());
        }
        return user.get().getReminders();
    }

    @DeleteMapping("/api/{username}/reminders/{id}/delete-reminder")
    public Collection<RemindersResource> deleteReminder(@PathVariable Long id, @PathVariable String username) throws JSONException{
        Optional<RemindersResource> reminderToRemoveOpt = remindersRepo.findById(id);
        Optional<User> user = userRepo.findByUsername(username);
        if (reminderToRemoveOpt.isPresent()){
            remindersRepo.delete(reminderToRemoveOpt.get());
            user.get().deleteReminder(reminderToRemoveOpt.get());
            userRepo.save(user.get());
        }
        return user.get().getReminders();
    }

//    @DeleteMapping("/api/reminders/{id}/delete-reminder")
//    public Collection<RemindersResource> deleteReminder(@PathVariable Long id) throws JSONException{
//        Optional<RemindersResource> reminderToRemoveOpt = remindersRepo.findById(id);
//        if (reminderToRemoveOpt.isPresent()){
//            remindersRepo.delete(reminderToRemoveOpt.get());
//        }
//        return (Collection<RemindersResource>) remindersRepo.findAll();
//    }

}
