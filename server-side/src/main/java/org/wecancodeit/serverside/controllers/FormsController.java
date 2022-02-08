package org.wecancodeit.serverside.controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
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
    public Optional<FormsResource> getFormsById(@PathVariable Long id){
        return formsRepo.findById(id);
    }
}
