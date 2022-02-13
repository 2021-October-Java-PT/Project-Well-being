package org.wecancodeit.serverside.models;

public class JournalBody {

    private int date;
    private String content;

    public void setDate(int date) {
        this.date = date;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getDate() {
        return date;
    }

    public String getContent() {
        return content;
    }
}
