package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.RemindersResource;
import org.wecancodeit.serverside.repos.RemindersRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RequestMapping("https://projectwellbeing-demo.herokuapp.com")
@RestController
@CrossOrigin
public class RemindersController {

    @Resource
    private RemindersRepository remindersRepo;

    @GetMapping("/api/reminders")
    public Collection<RemindersResource> getReminders() {
        return (Collection<RemindersResource>) remindersRepo.findAll();
    }

    @GetMapping("/api/reminders/{id}")
    public Optional<RemindersResource> getRemindersById(@PathVariable Long id) {
        return remindersRepo.findById(id);
    }

    @PostMapping("/api/reminders/add-reminder")
    public Collection<RemindersResource> addReminder(@RequestBody String body) throws JSONException {
        JSONObject newResource = new JSONObject(body);
        String name = newResource.getString("name");
        String category = newResource.getString("category");
        String priority = newResource.getString("priority");
        String description = newResource.getString("description");

        Optional<RemindersResource> reminderToAddOpt = remindersRepo.findByName(name);

        if (reminderToAddOpt.isEmpty()) {
            RemindersResource resourceToAdd = new RemindersResource(name, category, priority, description);
            remindersRepo.save(resourceToAdd);
            return (Collection<RemindersResource>) remindersRepo.findAll();
        }
        return (Collection<RemindersResource>) remindersRepo.findAll();
    }

    @DeleteMapping("/api/reminders/{id}/delete-reminder")
    public Collection<RemindersResource> deleteReminder(@PathVariable Long id) throws JSONException{
        Optional<RemindersResource> reminderToRemoveOpt = remindersRepo.findById(id);
        if (reminderToRemoveOpt.isPresent()){
            remindersRepo.delete(reminderToRemoveOpt.get());
        }
        return (Collection<RemindersResource>) remindersRepo.findAll();
    }
}