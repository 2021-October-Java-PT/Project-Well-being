package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.FormsResource;
import org.wecancodeit.serverside.models.JournalResource;
import org.wecancodeit.serverside.models.RemindersResource;
import org.wecancodeit.serverside.repos.FormsRepository;
import org.wecancodeit.serverside.repos.JournalRepository;
import org.wecancodeit.serverside.repos.RemindersRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private RemindersRepository remindersRepo;

    @Resource
    private FormsRepository formsRepo;

    @Resource
    private JournalRepository journalRepo;

    @Override
    public void run(String...args) throws Exception {
        RemindersResource breakfast = new RemindersResource("breakfast", "meals", "high","eat your cheerios!");
        RemindersResource lunch = new RemindersResource("lunch","meals","high","eat your sammich!");
        RemindersResource dinner = new RemindersResource("dinner","meals","high","eat your potatoes");

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

        JournalResource one = new JournalResource(20220113, "kjdgkjhsdlkgjhdlkjghlkdfgh");
        JournalResource two = new JournalResource(20220131, "jhsdguuisehrnghjsdnfgynk");
        JournalResource three = new JournalResource(20211231, "khjdhfgjkhkjhdfhsgdhghj");
        JournalResource four = new JournalResource(20220201, "khdkfjghkshdfkghkskdjhg");

        journalRepo.save(one);
        journalRepo.save(two);
        journalRepo.save(three);
        journalRepo.save(four);

    }
}
