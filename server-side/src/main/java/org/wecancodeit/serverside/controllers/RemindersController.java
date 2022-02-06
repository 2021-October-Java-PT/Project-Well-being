package org.wecancodeit.serverside.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.RemindersResource;
import org.wecancodeit.serverside.repos.RemindersRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class RemindersController {

    @Resource
    private RemindersRepository remindersRepo;

    @GetMapping("/api/reminders")
    public Collection<RemindersResource> getReminders() {
        return (Collection<RemindersResource>) remindersRepo.findAll();
    }
}
