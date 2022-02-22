package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.*;
import org.wecancodeit.serverside.repos.FormsRepository;
import org.wecancodeit.serverside.repos.JournalRepository;
import org.wecancodeit.serverside.repos.MoodRepository;
import org.wecancodeit.serverside.repos.RemindersRepository;
import org.wecancodeit.serverside.repos.UserRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {
    @Resource
    private UserRepository userRepo;
    @Resource
    private MoodRepository moodRepo;
    @Resource
    private RemindersRepository remindersRepo;
    @Resource
    private FormsRepository formsRepo;

    @Resource
    private JournalRepository journalRepo;

    @Override
    public void run(String...args) throws Exception {
        RemindersResource breakfast = new RemindersResource("Breakfast", "Meals", "High","Eat your Cheerios!");
        RemindersResource lunch = new RemindersResource("Lunch","Meals","High","Eat your sammich!");
        RemindersResource dinner = new RemindersResource("Dinner","Meals","High","Eat your potatoes");

        remindersRepo.save(breakfast);
        remindersRepo.save(lunch);
        remindersRepo.save(dinner);

        FormsResource anxietyShort = new FormsResource("anxiety-short", 0);
        FormsResource anxietyLong = new FormsResource("anxiety-long",0);
        FormsResource depressionShort = new FormsResource("depression-short",0);
        FormsResource depressionLong = new FormsResource("depression-long",0);
        FormsResource ptsd = new FormsResource("ptsd",0);

        formsRepo.save(anxietyShort);
        formsRepo.save(anxietyLong);
        formsRepo.save(depressionShort);
        formsRepo.save(depressionLong);
        formsRepo.save(ptsd);

        JournalResource one = new JournalResource("2021-12-31", "Today was a rough day!  I got into it with my partner who was being unreasonable about how late I stayed out last night.");
        JournalResource two = new JournalResource("2022-01-13", "Today was awesome!  My boss was so encouraging when I asked her how she liked my work project. uch an amazing boss:)");
        JournalResource three = new JournalResource("2022-01-31", "Today was a little hard with my kids.  They argue so much!  I just want them to get along with each other and understand that they are both lucky to have each other.");
        JournalResource four = new JournalResource("2022-02-01", "khdkfjghkshdfkghkskdjhg");

        journalRepo.save(one);
        journalRepo.save(two);
        journalRepo.save(three);
        journalRepo.save(four);

        User user1 = new User("user1", breakfast);
        User user2 = new User("user2", lunch, dinner);

        userRepo.save(user1);
        userRepo.save(user2);
        userRepo.save(new User("admin"));

        //jtest
        MoodResource moodOne = new MoodResource("happy");
        MoodResource moodTwo = new MoodResource("sad");
        moodRepo.save(moodOne);
        moodRepo.save(moodTwo);

        JournalResource newJ = new JournalResource("j1","blahblahblah");
        journalRepo.save(newJ);
        JournalResource newJ2 = new JournalResource("j2","lalala");
        journalRepo.save(newJ2);

        User user3 = new User("user3");
        userRepo.save(user3);

        user3.addForm(anxietyShort);
        user3.addMood(moodOne);
        user3.addJournal(newJ);
        user3.addForm(anxietyLong);
        user3.addMood(moodTwo);
        user3.addJournal(newJ2);










    }
}
