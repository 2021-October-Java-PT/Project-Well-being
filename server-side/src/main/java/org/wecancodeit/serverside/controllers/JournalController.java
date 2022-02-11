package org.wecancodeit.serverside.controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.JournalResource;
import org.wecancodeit.serverside.repos.JournalRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class JournalController {

    @Resource
    private JournalRepository journalRepo;

    @GetMapping("/api/journal-entry")
    public Collection<JournalResource> getJournal() {
        return (Collection<JournalResource>) journalRepo.findAll();
    }

    @GetMapping("/api/journal-entry/{id}")
    public Optional<JournalResource> getJournalById(@PathVariable Long id) {
        return journalRepo.findById(id);
    }


}
