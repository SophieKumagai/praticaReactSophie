import styles from './CandidateForm.module.css';
import Button from '../Button/Button';
import { useState } from "react";

function CandidateForm({ addCandidate }) {

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name != "") {
            addCandidate(name, 0)
        } else {
            window.alert("Preencha todos os campos!")
        }
    }
    const create = () => {
        const value = document.getElementById("candidate")
        if (value.value) {
        addCandidate(value.value, 0)
        value.value = ""
        } else {
        window.alert("Não é possível adicionar um candidato sem nome!")
        }
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <input
        placeholder='Novo Candidato'
        type="text"
        name="candidate"
        id="candidate"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <Button titulo="Adicionar Candidato" click={create} />
    </form>

  );
}

export default CandidateForm;
