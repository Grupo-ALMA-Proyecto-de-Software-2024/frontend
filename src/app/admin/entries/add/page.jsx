import styles from './add.module.css';


const AddEntry = () => {
  return (
    <div className={styles.container}>
      <h1>Add Entry</h1>
      <form action="" className={styles.form}>          
          <input type='text' id='title' name='title' required/>
          <select id='category' name='category'>
            <option value='observation'>Observation</option>
            <option value='script'>Experiment</option>
            <option value='study'>Hypothesis</option>
          </select>
          <input type='text' id='author' name='author' required/>
          <textarea
            id='description'
            name='description'
            rows={16}
            placeholder='Description'
            required
          />
          <button type='submit'>Add Entry</button>          
      </form>
    </div>
  );
};


export default AddEntry;
