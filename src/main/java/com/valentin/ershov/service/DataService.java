package com.valentin.ershov.service;

import java.util.Set;

/**
 * Created by Valek on 17.08.2017.
 */
public interface DataService {
    boolean persist(String problem);

    Set<String> getRandomData();
}