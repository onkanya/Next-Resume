import { useEffect, useState } from 'react';
import { Button } from 'antd'

const About = () => {
    let [buttonName, setName] = useState('Mean San Narak')

    const kuyIsus = () => {
        if (buttonName === 'Mean San Narak') {
            setName('Narak Mak Mung')
        } else {
            setName('Mean San Narak')
        }
    }

    return (
        <div>
            about page
            <Button onClick={kuyIsus}>{buttonName}</Button>
        </div>
    )
}

export default About