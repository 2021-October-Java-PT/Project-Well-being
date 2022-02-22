package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.*;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String username;

    @OneToMany
    private Collection<RemindersResource> reminders;

    @OneToMany
    private Collection<MoodResource> moods;

    @OneToMany
    private Collection<JournalResource> journals;

    @OneToMany
    private Collection<FormsResource> forms;

    public String getUsername() {
        return username;
    }

    public Long getId() {
        return id;
    }

    public Collection<RemindersResource> getReminders(){
        return reminders;
    }

    public Collection<MoodResource> getMoods(){
        return moods;
    }

    public Collection<JournalResource> getJournals(){
        return journals;
    }

    public Collection<FormsResource> getForms(){
        return forms;
    }

    protected User(){}

    public User(String username, RemindersResource...reminders) {
        this.username = username;
        this.reminders = new HashSet<>(Arrays.asList(reminders));
    }

    public User(String username){
        this.username=username;
        this.moods = new ArrayList<>();
        this.journals = new ArrayList<>();
        this.forms = new ArrayList<>();
    }

    public User(String username, Collection<MoodResource> x, Collection<JournalResource> y, Collection<FormsResource> z) {
        this.username = username;
        this.moods = x;
        this.journals = y;
        this.forms = z;
    }

    public void addReminder(RemindersResource reminderToAdd) {
        reminders.add(reminderToAdd);
    }

    public void addMood(MoodResource moodToAdd) {
        moods.add(moodToAdd);
    }

    public void addForm(FormsResource formToAdd){
        forms.add(formToAdd);
    }

    public void addJournal(JournalResource jTA){
        journals.add(jTA);
    }

    public void deleteReminder(RemindersResource reminderToRemove) {
        reminders.remove(reminderToRemove);
    }
}