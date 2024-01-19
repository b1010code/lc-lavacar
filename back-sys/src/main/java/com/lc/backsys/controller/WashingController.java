package com.lc.backsys.controller;

import com.lc.backsys.Entity.Washing;
import com.lc.backsys.service.WashingService;
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
@RequestMapping("/washing")
public class WashingController {

    @Autowired
    private final WashingService washingService;

    @PostMapping("/save")
    public ResponseEntity<Washing> create(@RequestBody Washing washing){
        Washing createWashing = washingService.create(washing);
        return ResponseEntity.ok(createWashing);
    }

    @GetMapping("/get")
    public ResponseEntity <List<Washing>>findAll(){
        List<Washing>washes = washingService.findAll();
        return ResponseEntity.ok(washes);
    }

    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<Washing>findById(@PathVariable(value = "id") UUID id){
        Washing washing = washingService.findById(id);

        if (washing != null){
            return new ResponseEntity<>(washing, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Washing> update(@PathVariable(value = "id")  UUID id, @RequestBody Washing washing) {
        Washing updatedWashing = washingService.update(id, washing);

        if (updatedWashing != null) {
            return ResponseEntity.ok(updatedWashing);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
