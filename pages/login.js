import { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


export default function Login(){
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const signup = async () => {
try {
await createUserWithEmailAndPassword(auth, email, password)
alert('Account created!')
} catch(e){ alert(e.message) }
}


const login = async () => {
try {
await signInWithEmailAndPassword(auth, email, password)
alert('Logged in!')
window.location.href = "/dashboard"
} catch(e){ alert(e.message) }
}


return (
<div style={{padding:24}}>
<h2>Login / Sign up</h2>
<input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
<br />
<input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
<br />
<button onClick={login}>Login</button>
<button onClick={signup}>Sign up</button>
</div>
)
}
