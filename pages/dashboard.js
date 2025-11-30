import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'


export default function Dashboard(){
const [user, setUser] = useState(null)


useEffect(()=>{
const unsub = onAuthStateChanged(auth, u=>setUser(u))
return ()=>unsub()
},[])


if(!user) return <div style={{padding:24}}>Please <a href="/login">login</a> to see the dashboard.</div>


return (
<div style={{padding:24}}>
<h2>Interactive Dashboard</h2>
<iframe src="https://streamlitapps-xnyn.onrender.com" width="100%" height={900} style={{border:'none', borderRadius:12}} />
</div>
)
}
