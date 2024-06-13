import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'India',
    streetAddress: '',
    state: '',
    city: '',
    ZipCode: '',
    isVisible1: false,
    isVisible2: false,
    isVisible3: false,
    Emode: ''
  });

  console.log(formData);

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing Entire Form Data:", formData);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName"><b>First name</b></label>
        <br/>
        <input
          type='text'
          placeholder='First name'
          name='firstName'
          onChange={changeHandler}
          value={formData.firstName}
        />

        <label htmlFor='lastName'><b>Last name</b></label>
        <br/>
        <input
          type='text'
          placeholder='Last name'
          name='lastName'
          onChange={changeHandler}
          value={formData.lastName}
        />

        <label htmlFor='email'><b>Email address</b></label>
        <br/>
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={changeHandler}
          value={formData.email}
        />

        <label htmlFor='country'><b>Country</b></label>
        <br/>
        <select
          name='country'
          onChange={changeHandler}
          value={formData.country}
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="germany">Germany</option>
          <option value="england">England</option>
          <option value="france">France</option>
          <option value="nepal">Nepal</option>
        </select>

        <label htmlFor='streetAddress'><b>Street address</b></label>
        <br/>
        <input
          type='text'
          placeholder='Street address'
          name='streetAddress'
          onChange={changeHandler}
          value={formData.streetAddress}
        />

        <label htmlFor='state'><b>State</b></label>
        <br/>
        <input
          type='text'
          placeholder='State'
          name='state'
          onChange={changeHandler}
          value={formData.state}
        />

        <label htmlFor='city'><b>City</b></label>
        <br/>
        <input
          type='text'
          placeholder='City'
          name='city'
          onChange={changeHandler}
          value={formData.city}
        />

        <label htmlFor='ZipCode'><b>ZIP Code</b></label>
        <br/>
        <input
          type='text'
          placeholder='ZIP Code'
          name='ZipCode'
          onChange={changeHandler}
          value={formData.ZipCode}
        />

        <p><b>By Email</b></p>

        <div className="checkbox-group">
          <input
            type='checkbox'
            onChange={changeHandler}
            name="isVisible1"
            id="isVisible1"
            checked={formData.isVisible1}
          />
          <label htmlFor='isVisible1'> Comments</label>
          <p>Get notified when someone posts a comment on a posting</p>

          <input
            type='checkbox'
            onChange={changeHandler}
            name="isVisible2"
            id="isVisible2"
            checked={formData.isVisible2}
          />
          <label htmlFor='isVisible2'> Candidates</label>
          <p>Get notified when a candidate applies for a job</p>

          <input
            type='checkbox'
            onChange={changeHandler}
            name="isVisible3"
            id="isVisible3"
            checked={formData.isVisible3}
          />
          <label htmlFor='isVisible3'> Others</label>
          <p>Get notified when a candidate accepts or rejects an offer</p>
        </div>

        <p><b>Push Notification</b></p>
        <p>These are delivered via SMS to your mobile phone</p>

        <div className="radio-group">
          <input
            type='radio'
            onChange={changeHandler}
            name='Emode'
            value='Everything'
            id='Everything'
            checked={formData.Emode === "Everything"}
          />
          <label htmlFor="Everything"> Everything</label>

          <input
            type='radio'
            onChange={changeHandler}
            name='Emode'
            value='Everything2'
            id='Everything2'
            checked={formData.Emode === "Everything2"}
          />
          <label htmlFor="Everything2"> Same as email</label>

          <input
            type='radio'
            onChange={changeHandler}
            name='Emode'
            value='Everything3'
            id='Everything3'
            checked={formData.Emode === "Everything3"}
          />
          <label htmlFor="Everything3"> No push notification</label>
        </div>

        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default App;
