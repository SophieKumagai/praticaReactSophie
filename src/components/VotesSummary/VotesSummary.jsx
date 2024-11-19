import styles from "./VotesSummary.module.css"
function VotesSummary({total, winner}) {
    return (
        <div className={styles.summaryContainer}>
            <p className={styles.summaryText}>Votos Totais: {total}</p>
            <p>Candidato Vencedor: {winner}</p>
        </div>
    )
}

export default VotesSummary