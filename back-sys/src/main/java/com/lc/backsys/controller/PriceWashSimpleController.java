package com.lc.backsys.controller;

import com.lc.backsys.Entity.Customer;
import com.lc.backsys.Entity.PriceWashSimple;
import com.lc.backsys.service.PriceWashSimpleService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@RestController
@RequestMapping("/priceWashSimple")
public class PriceWashSimpleController {

    @Autowired
    private PriceWashSimpleService priceWashSimpleService;

    @PostMapping("/save")
    public ResponseEntity<PriceWashSimple> create(@RequestBody PriceWashSimple priceWashSimple){
        PriceWashSimple createCustomer = priceWashSimpleService.create(priceWashSimple);
        return ResponseEntity.ok(priceWashSimple);
    }

    @GetMapping("/get")
    public ResponseEntity <List<PriceWashSimple>>findAll(){
        List<PriceWashSimple>priceWashSimples = priceWashSimpleService.findAll();
        return ResponseEntity.ok(priceWashSimples);
    }

    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<PriceWashSimple>findById(@PathVariable(value = "id") UUID id){
        PriceWashSimple priceWashSimple = priceWashSimpleService.findById(id);

        if (priceWashSimple != null){
            return new ResponseEntity<>(priceWashSimple, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<PriceWashSimple> update(@PathVariable(value = "id")  UUID id, @RequestBody PriceWashSimple priceWashSimple) {
        PriceWashSimple updatedWashSimple = priceWashSimpleService.update(id, priceWashSimple);

        if (updatedWashSimple != null) {
            return ResponseEntity.ok(updatedWashSimple);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
