import Link from 'next/link'


export default function Nav(){
return (
<nav style={{padding:16, borderBottom:'1px solid #eee'}}>
<Link href="/">Home</Link> | <Link href="/dashboard">Dashboard</Link> | <Link href="/login">Login</Link> | <Link href="/admin">Admin</Link> | <Link href="/pay">Pay</Link>
</nav>
)
}
