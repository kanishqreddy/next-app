export default function Pay(){
const startCheckout = async ()=>{
const res = await fetch('/api/payment', { method:'POST' })
const data = await res.json()
if(data.checkout_url) window.location = data.checkout_url
else alert('Error creating checkout session')
}


return (
<div style={{padding:24}}>
<h2>Pay / Subscribe</h2>
<button onClick={startCheckout}>Pay $20</button>
</div>
)
}
