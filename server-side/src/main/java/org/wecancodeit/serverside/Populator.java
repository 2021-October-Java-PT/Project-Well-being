package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.FormsResource;
import org.wecancodeit.serverside.models.RemindersResource;
import org.wecancodeit.serverside.repos.FormsRepository;
import org.wecancodeit.serverside.repos.RemindersRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private RemindersRepository remindersRepo;

    @Resource
    private FormsRepository formsRepo;

    @Override
    public void run(String...args) throws Exception {
        RemindersResource breakfast = new RemindersResource("breakfast", "meals", "high","eat your cheerios!");
        RemindersResource lunch = new RemindersResource("lunch","meals","high","eat your sammich!");
        RemindersResource dinner = new RemindersResource("dinner","meals","high","eat your potatoes");

        remindersRepo.save(breakfast);
        remindersRepo.save(lunch);
        remindersRepo.save(dinner);

        FormsResource anxiety2_1 = new FormsResource("Anxiety-short", "The Anxiety Short form is a very brief and easy to perform initial screening tool for generalized anxiety disorder", "Feeling nervous, anxious or on edge", 0);
        FormsResource anxiety2_2 = new FormsResource("Anxiety-short", "The Anxiety Short form is a very brief and easy to perform initial screening tool for generalized anxiety disorder", "Not being able to stop or control worrying", 0);

        formsRepo.save(anxiety2_1);
        formsRepo.save(anxiety2_2);
    }
}
