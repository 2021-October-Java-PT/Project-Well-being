package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class RemindersResource {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String category;
    private String priority;
    private String description;


    public RemindersResource(RemindersBody remindersBody){
        this.name = remindersBody.getName();
        this.category = remindersBody.getCategory();
        this.priority = remindersBody.getPriority();
        this.description = remindersBody.getDescription();
    }

    public RemindersResource() {

    }

    public RemindersResource(String name, String category, String priority, String description) {
        this.name = name;
        this.category = category;
        this.priority = priority;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public String getPriority() {
        return priority;
    }

    public String getDescription() {
        return description;
    }

    public Long getId() {
        return  id;
    }
}
