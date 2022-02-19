package org.wecancodeit.serverside.controllers;


import org.json.JSONException;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.JournalBody;
import org.wecancodeit.serverside.models.JournalResource;
import org.wecancodeit.serverside.models.RemindersResource;
import org.wecancodeit.serverside.repos.JournalRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class  JournalController {

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

    @PostMapping("/api/journals/add-journal")
    public Collection<JournalResource> addJournalEntry(@RequestBody JournalBody journals) {
        JournalResource journalEntryToAdd = new JournalResource(journals);
        journalRepo.save(journalEntryToAdd);

        return (Collection<JournalResource>) journalRepo.findAll();
    }

    @DeleteMapping("/api/journals/{id}/delete-journal")
    public Collection<JournalResource> deleteJournal(@PathVariable Long id) throws JSONException {
        Optional<JournalResource> journalToRemove = journalRepo.findById(id);
        if (journalToRemove.isPresent()){
            journalRepo.delete(journalToRemove.get());
        }
        return (Collection<JournalResource>) journalRepo.findAll();
    }

}
