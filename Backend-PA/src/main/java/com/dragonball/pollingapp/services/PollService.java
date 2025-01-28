package com.dragonball.pollingapp.services;

import com.dragonball.pollingapp.model.OptionVote;
import com.dragonball.pollingapp.model.Poll;
import com.dragonball.pollingapp.repositories.PollRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PollService {

    private final PollRepository pollRepository;

    public PollService(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    public Poll createPoll(Poll poll){
        return pollRepository.save(poll);
    }

    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }

    public Optional<Poll> getPollById(Long id) {
        return pollRepository.findById(id);
    }

    public void vote(Long pollId, int optionIndex) {

        Poll poll = pollRepository.findById(pollId).orElseThrow(()-> new RuntimeException("Poll not found"));
        List<OptionVote> options =  poll.getOptions();

        //If index for vote is invalid, throw error
        if(optionIndex<0 || optionIndex>=options.size()){
            throw new IllegalArgumentException("Invalid option index");
        }

        //Get Selected option
        OptionVote selectedOption = options.get(optionIndex);

        //Increment vote for selected option
        selectedOption.setVoteCount(selectedOption.getVoteCount() + 1);

        //Save incremented option info the database
        pollRepository.save(poll);

    }
}
