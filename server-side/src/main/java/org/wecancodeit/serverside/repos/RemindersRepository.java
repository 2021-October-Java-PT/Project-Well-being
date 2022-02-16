package org.wecancodeit.serverside.repos;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.RemindersResource;

import java.util.Optional;

public interface RemindersRepository extends CrudRepository<RemindersResource, Long> {
    Optional<RemindersResource> findByName(String name);

    Optional<RemindersResource> findById(Long id);
}
