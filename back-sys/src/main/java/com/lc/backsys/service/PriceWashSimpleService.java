package com.lc.backsys.service;

import com.lc.backsys.Entity.Employee;
import com.lc.backsys.Entity.PriceWashSimple;

import java.util.List;
import java.util.UUID;

public interface PriceWashSimpleService {
    public PriceWashSimple create(PriceWashSimple priceWashSimple);
    public List<PriceWashSimple> findAll();
    public PriceWashSimple findById(UUID id);
    public PriceWashSimple update(UUID id, PriceWashSimple priceWashSimple);
}
