package com.ssafy.youniverse.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer memberId;

    @Column(length = 20, nullable = false)
    private String nickname;

    @Column(length = 30, nullable = false)
    private String email;

    @Column(length = 2, nullable = false)
    private String gender;

    @Column(nullable = false)
    private Byte age;

    @Column(length = 255, nullable = false)
    private String introduce;

    @Column(length = 255, nullable = false)
    private String memberImage;

    @OneToMany(mappedBy="follower")
    private List<Follow> followings = new ArrayList<>();

    @OneToMany(mappedBy="following")
    private List<Follow> followers = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<OttMember> ottMembers = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<HeartMovie> heartMovies = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<HateMovie> hateMovies = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<BestMovie> bestMovies = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Review> reviews = new ArrayList<>();

}