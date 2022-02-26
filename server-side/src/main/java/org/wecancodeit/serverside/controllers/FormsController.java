package org.wecancodeit.serverside.controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.FormsResource;
import org.wecancodeit.serverside.repos.FormsRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class FormsController {

    @Resource
    private FormsRepository formsRepo;

    @GetMapping("/api/forms")
    public Collection<FormsResource> getForms() {
        return (Collection<FormsResource>) formsRepo.findAll();
    }

    @GetMapping("/api/forms/{id}")
    public Optional<FormsResource> getFormsById(@PathVariable Long id) {
        return formsRepo.findById(id);
    }

    @PostMapping("/api/forms/save-form")
    public String addReminder(@RequestBody String body) throws JSONException {
        JSONObject newResource = new JSONObject(body);
        String type = newResource.getString("type");
        int score = newResource.getInt("score");

        Optional<FormsResource> formToSaveOpt = formsRepo.findByType(type);

        if (formToSaveOpt.isEmpty()) {
            FormsResource formToSave = new FormsResource(type, score);
            formsRepo.save(formToSave);
            return "redirect:/api/forms";
        }
        return "redirect:/api/forms";


    }
}
