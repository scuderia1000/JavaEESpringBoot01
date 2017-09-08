package com.valentin.ershov.repository;

import com.valentin.ershov.entity.DomainObject;

import java.util.Set;

/**
 * Created by Valek on 17.08.2017.
 */
public interface DataRepository<V extends DomainObject> {
    void persist(V object);

    void delete(V object);

    Set<String> getRandomData();
}
