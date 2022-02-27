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
    private int score;
    private String date;

    public FormsResource(){

    }

    public FormsResource(String type, int score, String date){
        this.type=type;
        this.score=score;
        this.date=date;
    }

    public Long getId(){
        return id;
    }

    public String getType(){
        return type;
    }

    public int getScore(){
        return score;
    }

    public String getDate() { return date; }
}
