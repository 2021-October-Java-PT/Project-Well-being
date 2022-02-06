package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.RemindersResource;
import org.wecancodeit.serverside.repos.RemindersRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private RemindersRepository remindersRepo;

    @Override
    public void run(String...args) throws Exception {
        RemindersResource breakfast = new RemindersResource("breakfast", "meals", "high","eat your cheerios!");
        RemindersResource lunch = new RemindersResource("lunch","meals","high","eat your sammich!");
        RemindersResource dinner = new RemindersResource("dinner","meals","high","eat your potatoes");

        remindersRepo.save(breakfast);
        remindersRepo.save(lunch);
        remindersRepo.save(dinner);
    }
}
