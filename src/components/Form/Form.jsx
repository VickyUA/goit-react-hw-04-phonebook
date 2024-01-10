// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import css from 'components/Form/form.module.css';

// export class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.getSubmitData(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <div>
//         <form className={css.form} onSubmit={this.handleSubmit}>
//           <label htmlFor={this.nameInputId}>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             id={this.nameInputId}
//             pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             required
//           />
//           <label htmlFor={this.numberInputId}>Number</label>
//           <input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//             id={this.numberInputId}
//             pattern="/^\+?\d{1,4}[ .-]?\(?\d{1,3}?\)?[ .-]?\d{1,4}[ .-]?\d{1,4}[ .-]?\d{1,9}$/"
//             required
//           />
//           <button type="submit">Add contact</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;

import { nanoid } from 'nanoid';
import css from 'components/Form/form.module.css';
import { useState } from 'react';

export default function Form({ getSubmitData }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    getSubmitData({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
        <label htmlFor={numberInputId}>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id={numberInputId}
          pattern="/^\+?\d{1,4}[ .-]?\(?\d{1,3}?\)?[ .-]?\d{1,4}[ .-]?\d{1,4}[ .-]?\d{1,9}$/"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}
