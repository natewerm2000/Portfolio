// import Style.css
import '../style.css';


export default function Contact() {
    return <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />

        <button type="submit">Send</button>
    </form>
}