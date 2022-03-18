package org.wecancodeit.serverside.controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.JournalResource;
import org.wecancodeit.serverside.repos.JournalRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

// @RequestMapping("https://projectwellbeing-demo.herokuapp.com")
@RestController
@CrossOrigin
public class JournalController {

    @Resource
    private JournalRepository journalRepo;

    @GetMapping("/api/journal-entries")
    public Collection<JournalResource> getJournal() {
        return (Collection<JournalResource>) journalRepo.findAll();
    }

    @GetMapping("/api/journal-entry/{id}")
    public Optional<JournalResource> getJournalById(@PathVariable Long id) {
        return journalRepo.findById(id);
    }

    @PostMapping("/api/journals/add-journal-entry")
    public Collection<JournalResource> addJournalEntry(@RequestBody String body) throws JSONException {
        JSONObject newResource = new JSONObject(body);
        String date = newResource.getString("date");
        String content = newResource.getString("content");


        Optional<JournalResource> journalEntryToAddOpt = journalRepo.findByDate(date);

        if (journalEntryToAddOpt.isEmpty()) {
            JournalResource journalEntryToAdd = new JournalResource(date, content);
            journalRepo.save(journalEntryToAdd);
            return (Collection<JournalResource>) journalRepo.findAll();
        }
        return (Collection<JournalResource>) journalRepo.findAll();
    }

    @DeleteMapping("/api/journals/{id}/delete-journal-entry")
    public Collection<JournalResource> deleteJournal(@PathVariable Long id) throws JSONException {
        Optional<JournalResource> journalToRemoveOpt = journalRepo.findById(id);
        if (journalToRemoveOpt.isPresent()) {
            journalRepo.delete(journalToRemoveOpt.get());
        }
        return (Collection<JournalResource>) journalRepo.findAll();
    }

}
