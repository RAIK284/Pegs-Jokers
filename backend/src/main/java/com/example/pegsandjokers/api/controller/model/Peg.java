package com.example.pegsandjokers.api.controller.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize(using = PegSerializer.class)
public class Peg {
    private Hole hole;
    private boolean inHome;
    private boolean inHeaven;
    private Player player;
    private String color;
    private int num;

    public Peg(){};

    public Peg(String color, int num){
        this.color = color;
        this.num = num;
    }

    public Hole getHole(){
        return this.hole;
    }

    public void setHole(Hole hole){
        this.hole = hole;
    }

    public boolean getInHome(){
        return this.inHome;
    }

    public void sendHome(){
        this.inHome = true;
        this.hole = null;
    }

    public void removeFromHome(){
        this.inHome = false;
    }

    public boolean getInHeaven(){
        return this.inHeaven;
    }

    public void setInHeaven(boolean inHeaven){
        this.inHeaven = inHeaven;
    }

    public Player getPlayer(){
        return this.player;
    }

    public void setPlayer(Player p){
        this.player = p;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }
}
