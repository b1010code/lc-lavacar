package com.lc.backsys.repository;


import com.lc.backsys.Entity.PriceWashing;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PriceWashingRepository extends MongoRepository<PriceWashing, UUID> {
}
