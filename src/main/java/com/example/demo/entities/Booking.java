package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Date;
import java.util.Arrays;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="check_in")
    private int checkIn;
    @Column(name="check_out")
    private int checkOut;
    @Column(name="total_price")
    private int totalPrice;
    @Column(name="amount_of_guests")
    private int amountOfGuests;
    @ManyToOne
    @JoinColumn(name="residence_id")
    @JsonIgnoreProperties({"bookedDays", "user"})
    private Residence residence;
    @Column(name="user_id")
    private int userId;
    @Transient public int resId;


    //CONSTRUCTORS
    public Booking() { }

    // GETTERS AND SETTERS

    public Residence getResidence() {
        return residence;
    }
    public void setResidence(Residence residence) {
        this.residence = residence;
    }
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public int getCheckIn() {
        return checkIn;
    }
    public void setCheckIn(int checkIn) {
        this.checkIn = checkIn;
    }
    public int getCheckOut() {
        return checkOut;
    }
    public void setCheckOut(int checkOut) {
        this.checkOut = checkOut;
    }
    public int getTotalPrice() { return totalPrice; }
    public void setTotalPrice(int totalPrice) { this.totalPrice = totalPrice; }
    public int getAmountOfGuests() {
        return amountOfGuests;
    }
    public void setAmountOfGuests(int amountOfGuests) {
        this.amountOfGuests = amountOfGuests;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
}

