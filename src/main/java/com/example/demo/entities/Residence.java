package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.mapping.Join;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "residences")
public class Residence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int size;
    private int rooms;
    private int maxguests;
    private int pricepernight;
    private int numberofbeds;
    private String title;

    //CONSTRUCTORS
    public Residence() { }


    //RELATIONS
    @ManyToOne
    private Address address;

    @ManyToOne
    private User user;

    @JsonManagedReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="amenity_id")
    private Amenity amenity;

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="residence_id")
    private List<Booking> bookingList;


    // GETTERS AND SETTERS
    public Address getAddress() { return address; }
    public void setAddress(Address address) { this.address = address; }
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public int getSize() { return size; }
    public void setSize(int size) { this.size = size; }
    public int getMaxguests() { return maxguests; }
    public void setMaxguests(int maxguests) { this.maxguests = maxguests; }
    public int getRooms() { return rooms; }
    public void setRooms(int rooms) { this.rooms = rooms; }
    public int getPricepernight() { return pricepernight; }
    public void setPricepernight(int pricepernight) { this.pricepernight = pricepernight; }
    public String getTitle() { return title; }
    public int getNumberofbeds() { return numberofbeds; }
    public void setTitle(String title) { this.title = title; }
    public void setNumberofbeds(int numberofbeds) { this.numberofbeds = numberofbeds; }
    public Amenity getAmenity() { return amenity; }
    public void setAmenity(Amenity amenity) { this.amenity = amenity; }
    public List<Booking> getBookingList() { return bookingList; }
}

