import { useRef, useState } from 'react';

const Form = () => {

  const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];

  const  carOptions = carBrands.map((brand, key) => (
    <option value={brand} key={key}>{brand}</option>
  ))

  const [nameState, setNameState] = useState({
    fname: '',
    lname: '',
    carBrand: '',
    isChecked: false,
    gender: '',
    price: 0
  })

  const handleChange = (evt) => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    setNameState({
      ...nameState,
      [evt.target.name]: value
    })
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <>
      <h1>React Form handling</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            First name: 
            <input 
              type="text" 
              name='fname'
              value={nameState.fname}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Last name: 
            <input 
              type="text" 
              name='lname'
              value={nameState.lname}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <select 
            name="carBrand" 
            value={nameState.carBrand}
            onChange={handleChange}
          >
            <option value={''} disabled>
              --- Pick a car Brand ---
            </option>
            {carOptions}
          </select>
        </div>

        <div>
          <label>
            <input 
              type="checkbox"
              name='isChecked'
              checked={nameState.isChecked}
              onChange={handleChange}
            />
          </label>
          Is Checked?
        </div>

        <div>
          <label>
            <input 
              type="radio" 
              value="male"
              name="gender"
              checked={nameState.gender === 'male'}
              onChange={handleChange}
            />
            male
          </label>
          <label>
            <input 
              type="radio" 
              value="female"
              name="gender"
              checked={nameState.gender === 'female'}
              onChange={handleChange}
            />
            female
          </label>
        </div>

        <div>
          <label>
            Price (between 0 and 50):
            <input 
              type="range" 
              name='price'
              min='0'
              max='50'
              value={nameState.price}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" />
      </form>
      
      <h4>Price: ${nameState.price}</h4>
      <h4>Name: {nameState.fname} {nameState.lname}</h4>
      <h4>Favorite car brand: {nameState.carBrand}</h4>
      <h4>Is it checked? {nameState.isChecked ? 'true' : 'false' }</h4>
      <h4>Gender {nameState.gender}</h4>
    </>
  )
}

export default Form;