package org.wecancodeit.serverside.repos;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.RemindersResource;

public interface RemindersRepository extends CrudRepository<RemindersResource, Long> {
}
