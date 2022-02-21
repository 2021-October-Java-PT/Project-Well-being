package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;

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

    public String getUsername() {
        return username;
    }

    public Long getId() {
        return id;
    }

    public Collection<RemindersResource> getReminders(){
        return reminders;
    }

    public Collection<MoodResource> getMood(){
        return moods;
    }

    protected User(){}

    public User(String username, RemindersResource...reminders) {
        this.username = username;
        this.reminders = new HashSet<>(Arrays.asList(reminders));
    }

    public void addReminder(RemindersResource reminderToAdd) {
        reminders.add(reminderToAdd);
    }

    public void addMood(MoodResource moodToAdd) {
        moods.add(moodToAdd);
    }

    public void deleteReminder(RemindersResource reminderToRemove) {
        reminders.remove(reminderToRemove);
    }
}