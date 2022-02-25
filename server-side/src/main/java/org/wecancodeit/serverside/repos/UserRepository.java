package org.wecancodeit.serverside.repos;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByUsername(String username);
}

