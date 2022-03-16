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
        RemindersResource dinner = new RemindersResource("Dinner","Meals","High","Mmm, steak!");

        remindersRepo.save(breakfast);
        remindersRepo.save(lunch);
        remindersRepo.save(dinner);

        JournalResource one = new JournalResource("2021-02-20", "Today was a rough day!  I got into it with my partner who was being unreasonable about how late I stayed out last night.  I want to talk with my therapist about this at our next visit and see if she has any good ideas about how to address him in these situations when we disagree.  My whole day felt ruined because of how I felt after that confrontation.");
        JournalResource two = new JournalResource("2022-02-21", "Today was awesome!  My boss was so encouraging when I asked her how she liked my work project.  She asked me to take over another project because she wanted it “done right.”  I am so lucky to have such an amazing boss:)  I hope that I can always impress her with my work.");
        JournalResource three = new JournalResource("2022-02-22", "Today was a little hard with my kids.  They argue so much!  I just want them to get along with \n" +
                "each other and understand that they are both lucky to have each other.  They are really great kids but it’s really tough to parent when all they want to do is fight.  Maybe my therapist can give me some pointers on how to handle their fights.\n");

        journalRepo.save(one);
        journalRepo.save(two);
        journalRepo.save(three);

        User user1 = new User("user1");
        User user2 = new User("user2");
        userRepo.save(user1);
        userRepo.save(user2);

        userRepo.save(new User("admin"));

        FormsResource firstForm = new FormsResource("Daily Anxiety", 6, "02-20-2022");
        FormsResource secondForm = new FormsResource("Daily Anxiety", 5, "02-21-2022");
        FormsResource thirdForm = new FormsResource("Daily Anxiety", 4, "02-22-2022");
        FormsResource fourthForm = new FormsResource("Daily Anxiety", 3, "02-23-2022");
        FormsResource fifthForm = new FormsResource("Daily Anxiety", 3, "02-24-2022");
        FormsResource sixthForm = new FormsResource("Daily Anxiety", 2, "02-25-2022");
        FormsResource weekly = new FormsResource("Weekly Anxiety", 10, "02-26-2022");

        formsRepo.save(firstForm);
        formsRepo.save(secondForm);
        formsRepo.save(thirdForm);
        formsRepo.save(fourthForm);
        formsRepo.save(fifthForm);
        formsRepo.save(sixthForm);
        formsRepo.save(weekly);

        MoodResource first = new MoodResource("3");
        MoodResource second = new MoodResource("1");
        MoodResource third = new MoodResource("2");

        moodRepo.save(first);
        moodRepo.save(second);
        moodRepo.save(third);
    }
}
