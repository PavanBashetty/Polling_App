package com.dragonball.pollingapp.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class OptionVote {

    private String voteOption;
    private Long voteCount = 0L;

    public OptionVote(){}

    public String getVoteOption() {
        return voteOption;
    }

    public void setVoteOption(String voteOption) {
        this.voteOption = voteOption;
    }

    public Long getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(Long voteCount) {
        this.voteCount = voteCount;
    }
}
