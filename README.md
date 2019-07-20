# node-express-mail-api
Simple node express mail api created using the nodemailer module
## Getting Started
To begin using the node-express-mail-api, be sure to have an outlook account to send emails from.

The api works off of HTTP `post` request with the following syntax

`https://node-express-mail-api.herokuapp.com/api/mail?email='youremail'&&password='yourpassword'`

Where 'youremail' is the outlook account that will send the email

It is recommended to hide your email and password behind a environment variable so that in the event that you decide to
upload your code to github or another hosting website your credentials are hidden.

`https://node-express-mail-api.herokuapp.com/api/mail?email=${process.env.email}&&password=${process.env.password}`

The data you send needs to be a javascript object in the form of the following example and be sure to set your headers
correctly.

`Content-Type: application/json`

```
const data = {
  "from": "John Doe <myemail@live.com>",
  "to": "test@live.com",
  "subject": "This is the subject text",
  "html": "this is the text of the email"
}
```

The `from` key is the name and email address that youd like shown when you receive the email

The `to` key is the email address that youd like to send the email to. This can be both a single email or multiple.

`"to": "test@live.com"` or `"to": ["susanG@live.com", "peter@outlook.com", "andy.keith@gmail.com"]`

The `subject` key is the subject text of the email.

The `html` key is the body of the email that supports html input.

```
"html": "<h1>Hello, World</h1> /n this text works as well"
```

An example of the full `post` request using axios and async/await is as follows...

```
const sendMail = async () => {
  const contactEmail = process.env.EMAIL;
  const contactPassword = process.env.PASSWORD;

  const data = {
  "from": "John Doe <myemail@live.com>",
  "to": "test@live.com",
  "subject": "This is the subject text",
  "html": "this is the text of the email"
  }

  const res = await axios.post(
      `https://node-express-mail-api.herokuapp.com/api/mail?email=${contactEmail}&password=${contactPassword}`,
      data
    );
    
  try {
    console.log('Message Sent!');
  } catch(err) {
    console.log(err); 
  }
}
```
