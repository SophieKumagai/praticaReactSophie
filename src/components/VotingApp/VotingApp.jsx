import styles from "./VotingApp.module.css"
import CandidateForm from "../CandidateForm/CandidateForm";
import CandidateList from "../CandidateList/CandidateList"
import VotesSummary from "../VotesSummary/VotesSummary";
import { useState } from 'react';

function VotingApp() {
    const [candidates, setCandidate] = useState([]);
    const [total, setTotal] = useState(0)

    const addCandidate = (nome, qtVotos) => {
        const newCandidate = {
        id: Date.now(),
        nome: nome,
        qtVotos: qtVotos,
        };
        setTotal((total) => total + qtVotos)
        setCandidate([...candidates, newCandidate]);
    };

    const addVote = (candidateId) => {
        setCandidate(
            candidates.map((candidate) => {
                if (candidate.id === candidateId) {
                return {
                        ...candidates,
                        qtVotos: parseInt(candidate.qtVotos) + 1,
                };
                }
                return candidates;
            })
        );
    };

    
    const removeCandidate = (id) => {
        setCandidate(candidates.filter((candidate) => candidate.id !== id));
    };

    const winner = () => {
        let maior = 0
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].qtVotos > maior) {
                maior = candidates[i].qtVotos
            }
        }

        const winners = candidates.filter((candidates) => candidates.qtVotos >= maior)
        let str
        for (let i = 0; i < winners.length; i++) {
            str += winners
        }
        return str
    }

    return (
        <div className={styles.appContainer}>
            <h1 className={styles.header}>App Votos</h1>
            <CandidateForm addCandidate={addCandidate} />
            <CandidateList candidates={candidates} addVote={addVote} removeCandidate={removeCandidate} />
            <VotesSummary total={total} winner={winner()}/>
        </div>
    );
}

export default VotingApp