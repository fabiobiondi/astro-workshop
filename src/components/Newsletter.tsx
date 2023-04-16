import { FormEvent, useState } from 'react';

const EMAIL_REGEX =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,16})+$/;

export default function Newsletter() {
  const [email, setEmail] = useState('');

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.alert('subscribe the newsletter: ' + email)
  }

  const isEmailValid = email.match(EMAIL_REGEX)

  return (
    <form
      onSubmit={submit}
      className="flex flex-col gap-3 max-w-screen-sm mx-auto mt-16"
    >

      <h2 className="text-3xl">Subscribe</h2>

      <input
        type="text"
        placeholder="Your email"
        className="p-3 rounded-xl text-black"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />

      <button
        disabled={!isEmailValid}
        className={isEmailValid ? '' : 'opacity-30'}
        type="submit"
      >SUBMIT</button>
    </form>
  )
}
