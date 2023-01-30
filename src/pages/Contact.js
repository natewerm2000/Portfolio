import { useState } from 'react';
import { send } from 'emailjs-com';

function Contact() {
    const [toSend, setToSend] = useState({
      from_name: '',
      to_name: 'Nathaniel Alexander',
      message: '',
      reply_to: '',
    });
  
    const onSubmit = (e) => {
        e.preventDefault();
        
        send(
          'service_llkczmk',
          'template_04zjvwt',
          toSend,
          'Kj3gwoIQ9BaTn38SJ'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email Successfully sent to host!")
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
  
    return (
      <div className='Contact'>
        <form onSubmit={onSubmit}>
  <input
    type='text'
    name='from_name'
    placeholder='Name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  
  <input
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  <input
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <button type='submit'>Submit</button>
</form>
      </div>
    );
  }
  export default Contact;