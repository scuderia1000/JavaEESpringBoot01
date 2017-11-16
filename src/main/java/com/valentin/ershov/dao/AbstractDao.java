package com.valentin.ershov.dao;

import com.valentin.ershov.entity.AbstractEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.io.Serializable;
import java.util.UUID;

/**
 * Created by Valek on 31.10.2017.
 */
public abstract class AbstractDao<T extends AbstractEntity> implements Dao<T> {


    @Override
    public <S extends T> S save(S entity) {
        return null;
    }

    @Override
    public Iterable<T> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<T> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public <S extends T> Iterable<S> save(Iterable<S> entities) {
        return null;
    }

    @Override
    public T findOne(UUID uuid) {
        return null;
    }

    @Override
    public boolean exists(UUID uuid) {
        return false;
    }

    @Override
    public Iterable<T> findAll() {

        return null;
    }

    @Override
    public Iterable<T> findAll(Iterable<UUID> uuids) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void delete(UUID uuid) {

    }

    @Override
    public void delete(T entity) {

    }

    @Override
    public void delete(Iterable<? extends T> entities) {

    }

    @Override
    public void deleteAll() {

    }
}
