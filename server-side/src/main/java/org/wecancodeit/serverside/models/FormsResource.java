package org.wecancodeit.serverside.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class FormsResource {

    @Id
    @GeneratedValue
    private Long id;
    private String type;
    private String description;
    private String question;
    private int score;

    public FormsResource(){

    }

    public FormsResource(String type, String description, String question, int score){
        this.type=type;
        this.description=description;
        this.question=question;
        this.score=score;
    }

    public Long getId(){
        return id;
    }

    public String getType(){
        return type;
    }

    public String getDescription(){
        return description;
    }

    public String getQuestion(){
        return question;
    }

    public int getScore(){
        return score;
    }
}
