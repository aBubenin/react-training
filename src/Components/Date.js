// import React, { Component } from 'react';

// export default class Date extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         };
//     }

//     componentDidMount() {
//         fetch("https://www.cbr-xml-daily.ru/daily_json.js")
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     this.setState({
//                         isLoaded: true,
//                         items: result.Valute.AUD.Value
//                     });
//                 },
//                 (error) => {
//                     this.setState({
//                         isLoaded: true,
//                         error
//                     });
//                 }
//             )
//     }


//     render() {
//         const { error, isLoaded, items } = this.state;
//         if (error) {
//             return <p>Error {error.message}</p>
//         } else if (!isLoaded) {
//             return <p>Loading...</p>
//         } else {
//             return (
//                 <ul>
//                     {items.map(item => (
//                         <li key={item.name}>
//                             {item.Value}
//                         </li>
//                     ))}
//                 </ul>
//             )
//         }
//     }
// }
