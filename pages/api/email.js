import { SMTPClient } from 'emailjs';
 
 
export default async function handler(req, res) {
 const {name, email, message} = req.query;
 const client = new SMTPClient({
   user: process.env.EMAIL,
   password: process.env.EMAIL_PASSWORD,
   host: 'smtp.gmail.com',
   ssl:true
 });
 
 try{
    await client.sendAsync(
    {
      text: message,
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject:  `Message from ${name} with email: ${email}`,
    }
    )
  }
catch(e){
    console.log(e)
  res.status(400).end(JSON.stringify({ message:"Error" }))
  return;
}

res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}