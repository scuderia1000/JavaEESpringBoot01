package com.valentin.ershov.repository;

import com.valentin.ershov.entity.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Created by Valek on 31.10.2017.
 */
@Repository("userRepository")
public class UserRepositoryImpl implements UserRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

    @Override
    public User getUserByName(String name) {
        List<User> result = new ArrayList<>();
        Query query = em.createQuery("select u from User u where u.userName = :userName");
        query.setParameter("userName", name);

        result = query.getResultList();

        return !result.isEmpty() ? result.get(0) : null;
    }

    @Override
    public UUID getUserId(String userName) {
        return null;
    }

    @Override
    public Iterable<User> getUsers() {

        return null;
    }
}
