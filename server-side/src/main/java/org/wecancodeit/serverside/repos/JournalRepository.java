package org.wecancodeit.serverside.repos;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.JournalResource;

import java.util.Optional;

public interface JournalRepository extends CrudRepository<JournalResource, Long> {
    Optional<JournalResource> findByDate(String date);
}
