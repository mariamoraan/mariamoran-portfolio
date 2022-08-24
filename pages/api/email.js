import { SMTPClient } from 'emailjs';
 
 
export default async function handler(req, res) {
 const {email, message, subject} = req.query;
 const client = new SMTPClient({
   user: process.env.EMAIL,
   password: process.env.EMAIL_PASSWORD,
   host: 'smtp.gmail.com',
   ssl:true
 });

 console.log("email: " + email)
 console.log("message: " + message)
 console.log("subject: " + subject)
 
 try{
    await client.sendAsync(
    {
      text: message,
      from: process.env.EMAIL,
      to: email,
      subject:  subject,
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