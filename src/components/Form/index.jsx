import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function Form(){

	useEffect(() => emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY), []);

	const emailRef = useRef(" ");
	const nameRef = useRef(" ");
	const messageRef = useRef(" ");

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const serviceId = "service_kqvgbah";
		const templateId = "contact_form";
		try {
			setLoading(true);
			await emailjs.send(serviceId, templateId, {
				user_name: nameRef.current.value,
				user_email: emailRef.current.value,
				message: messageRef.current.value
			});
			alert("email successfully sent check inbox");
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};


    return(
        <form action="#" method="POST" className="form__form" onSubmit={handleSubmit}>

			<label className="sr-only" htmlFor="name">Nom</label>
			<input ref={nameRef} placeholder="Nom" type="text" name="name" id="name" required />

			<label className="sr-only" htmlFor="email">Email</label>
			<input ref={emailRef} placeholder="Adresse e-mail" type="email" name="email" id="email" required />

			<label className="sr-only" htmlFor="message">Message</label>
			<textarea ref={messageRef} placeholder="Votre message" name="message" id="message" cols="30" rows="10" required></textarea>

			<input className="submit" type="submit" value="Envoyer" disabled={loading} />
        </form>
    )
}

export default Form