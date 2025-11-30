import Link from 'next/link'

export default function Nav(){
  return (
    <nav style={{
      padding:16,
      background:"#050507",
      borderBottom:"1px solid #1b1c25",
      color:"#f9fafb",
      display:"flex",
      gap:"12px",
      justifyContent:"center",
      fontSize:"14px"
    }}>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/login">Login</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/pay">Pay</Link>
    </nav>
  )
}
