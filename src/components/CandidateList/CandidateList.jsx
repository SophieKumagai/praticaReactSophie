import styles from "./CandidateList.module.css"
import CandidateItem from "../CandidateItem/CandidateItem"

function CandidateList({candidates, addVote, removeCandidate}) {
    return(
        <div className={styles.listContainer}>
            <h1 className={styles.header}>Candidatos</h1>
            <ul className={styles.listItem} key={Date.now}>
                {candidates.map((t) => (
                    <CandidateItem candidate={t} addVote={addVote} removeCandidate={removeCandidate}  />
                ))}
            </ul>
        </div>
    )
}

export default CandidateList