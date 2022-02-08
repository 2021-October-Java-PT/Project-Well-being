package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.RemindersBody;
import org.wecancodeit.serverside.models.RemindersResource;
import org.wecancodeit.serverside.repos.RemindersRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

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
        public Collection<RemindersResource> addReminder(@RequestBody RemindersBody reminders) {
        RemindersResource reminderToAddToList = new RemindersResource(reminders);
        remindersRepo.save(reminderToAddToList);

        return (Collection<RemindersResource>) remindersRepo.findAll();
    }

}
