package org.wecancodeit.serverside.repos;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.MoodResource;

import java.util.Optional;

public interface MoodRepository extends CrudRepository<MoodResource, Long> {
    Optional<MoodResource> findByValue(String value);
}
