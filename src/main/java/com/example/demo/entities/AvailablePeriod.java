package com.example.demo.entities;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "available_periods")
public class AvailablePeriod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="start_date")
    private int startDate;
    @Column(name="end_date")
    private int endDate;


    //RELATIONS
    @ManyToOne
    private Residence residence;

    //GETTERS AND SETTERS
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public int getStartDate() { return startDate; }
    public void setStartDate(int startDate) { this.startDate = startDate; }
    public int getEndDate() { return endDate; }
    public void setEndDate(int endDate) { this.endDate = endDate; }
}

