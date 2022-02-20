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

    }
}
