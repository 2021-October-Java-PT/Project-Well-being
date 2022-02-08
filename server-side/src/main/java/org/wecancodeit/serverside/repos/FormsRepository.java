package org.wecancodeit.serverside.repos;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.FormsResource;

import java.util.Optional;

public interface FormsRepository extends CrudRepository<FormsResource, Long> {
    Optional<FormsResource> findByType(String type);
}
