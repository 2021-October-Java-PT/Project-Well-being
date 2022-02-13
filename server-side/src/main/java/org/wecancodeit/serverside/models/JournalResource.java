package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class JournalResource {

    @Id
    @GeneratedValue
    private Long id;
    private int date;
    private String content;

    public JournalResource(){

    }

    public JournalResource (JournalBody journalBody){
        this.date = journalBody.getDate();
        this.content = journalBody.getContent();
    }

    public JournalResource(int date, String content){
        this.date = date;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public int getDate() {
        return date;
    }

    public String getContent() {
        return content;
    }

}
