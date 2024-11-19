import { useState } from "react";
import styles from "./CandidateItem.module.css";

function CandidateItem({ candidate, addVote, removeCandidate }) {
    
    return (
        <div className={styles.listItem}>
            <p className={styles.name}> {candidate.nome} </p>
            <p className={styles.votes}> Votos: {candidate.qtVotos}</p>
            <div className={styles.actions}>
                <button onClick={() => addVote(candidate.id)} className={styles.voteButton}>
                    Votar
                </button>
                <button onClick={() => removeCandidate(candidate.id)} className={styles.deleteButton}>
                    X
                </button>
            </div>
        </div>
    );
}

export default CandidateItem;
