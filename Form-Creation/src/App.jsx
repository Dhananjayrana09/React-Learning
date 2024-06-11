import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    textarea: "",
    isVisible: false,
    mode: "",
    favcar: ""
  });

  console.log(formData);

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log('entire formData')
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <br />
        <input
          type="text"
          placeholder='First name'
          onChange={changeHandler}
          name="firstname"
          value={formData.firstname}
        />

        <br />

        <input
          type="text"
          placeholder='Last name'
          onChange={changeHandler}
          name="lastname"
          value={formData.lastname}
        />

        <br />

        <input
          type="text"
          placeholder='Email'
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br />

        <textarea
          placeholder='Comments'
          onChange={changeHandler}
          name="textarea"
          value={formData.textarea}
        />

        <br />

        <input
          type='checkbox'
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I visible</label>

        <br />

        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value='online-mode'
          id='online-mode'
          checked={formData.mode === "online-mode"}
        />
        <label htmlFor="online-mode">Online</label>

        <br />

        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value='offline-mode'
          id='offline-mode'
          checked={formData.mode === "offline-mode"}
        />
        <label htmlFor="offline-mode">Offline</label>

        <br />

        <label htmlFor="favcar">Tell me your Fav Car</label>

        <select
          name='favcar'
          id='favcar'
          value={formData.favcar}
          onChange={changeHandler}
        >
          <option value="Thar">Thar</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Swift">Swift</option>
          <option value="Porsche">Porsche</option>
          <option value="Defender">Defender</option>
        </select>

        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
