import React, {useEffect, useState} from 'react';

const ComponentTypes = (props) => {
    const [name, setName ] = useState('Nj');
    useEffect(() => {
        setName('Nj2');
    });
    return (
        <div>Functional Component - {name}</div>
    )
};

export default ComponentTypes;

// export default class ComponentTypes extends React.Component {
//     constructor() {
//         super(props);
//         this.state = {name: "Nj"};
//     }
//     componentDidMount() {
//         this.setState({name: "Nj2"})
//     }
//     render () {
//         return (
//            <div>Class component</div>
//         )
//     }
// }