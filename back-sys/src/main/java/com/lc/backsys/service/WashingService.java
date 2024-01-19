package com.lc.backsys.service;


import com.lc.backsys.Entity.Washing;

import java.util.List;
import java.util.UUID;

public interface WashingService {
    public Washing create(Washing washing);
    public List<Washing> findAll();
    public Washing findById(UUID id);
    public Washing update(UUID id, Washing washing);
}
