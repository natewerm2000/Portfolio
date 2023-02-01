import { useState } from 'react';
import { send } from 'emailjs-com';
import * as ReactDOM from 'react-dom';

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
            
            ReactDOM.render(<p>Message successfully sent to user, thank you for contacting us and expect a response shortly.</p>, document.getElementById("success"))   })
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
<div id = "success">

</div>
      </div>
      
    );
  }
  
  export default Contact;