package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class MoodResource {

    @Id
    @GeneratedValue
    private Long id;
    private String value;

    public MoodResource(){
    }

    public MoodResource(String value){
        this.value=value;
    }

    public Long getId(){
        return id;
    }

    public String getValue(){
        return value;
    }

}
