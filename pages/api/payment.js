import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


export default async function handler(req, res){
if(req.method !== 'POST') return res.status(405).end()
try{
const session = await stripe.checkout.sessions.create({
payment_method_types:['card'],
mode:'payment',
line_items:[{ price_data: { currency:'usd', product_data:{name:'Premium Access'}, unit_amount:2000 }, quantity:1 }],
success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
})
res.json({ checkout_url: session.url })
}catch(e){
res.status(500).json({ error: e.message })
}
}
