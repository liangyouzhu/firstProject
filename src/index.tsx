import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function formatName(user: any) {
  return user.firstName + ' ' + user.lastName;
}
const link = <a href="https://baidu.com">React</a>;
const user = {  firstName: 'Harper',  lastName: 'Perez'};
const element = <h1>Hello, world!{formatName(user)}</h1>;

root.render(
<div>
{link}
    <h1>Hello, world!{element}</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
