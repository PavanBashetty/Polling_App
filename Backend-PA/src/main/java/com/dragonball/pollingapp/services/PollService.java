package com.dragonball.pollingapp.services;

import com.dragonball.pollingapp.model.Poll;
import com.dragonball.pollingapp.repositories.PollRepository;
import org.springframework.stereotype.Service;

@Service
public class PollService {

    private final PollRepository pollRepository;

    public PollService(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    public Poll createPoll(Poll poll){
        return pollRepository.save(poll);
    }
}
