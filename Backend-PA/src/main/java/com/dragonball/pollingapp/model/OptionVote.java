package com.dragonball.pollingapp.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class OptionVote {

    private String optionText;
    private Long voteCount = 0L;

    public OptionVote(){}

    public String getOptionText() {
        return optionText;
    }

    public void setOptionText(String optionText) {
        this.optionText = optionText;
    }

    public Long getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(Long voteCount) {
        this.voteCount = voteCount;
    }
}
