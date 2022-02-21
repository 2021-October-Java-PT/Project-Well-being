package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class JournalResource {

    @Id
    @GeneratedValue
    private Long id;
    private String date;
    private String content;

    public JournalResource(){

    }

    public JournalResource(String date, String content){
        this.date = date;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public String getContent() {
        return content;
    }

}
