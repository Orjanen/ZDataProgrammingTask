import React from 'react';
import agent from "./api/agent";

import { Button, Center } from "@chakra-ui/react"

function App() {

    const getTest = async() => {
        try {
            const data = await agent.WeatherForecast.getWeatherForecast()
            console.log(data)
        }catch (e) {
            console.log('getTest not working')
            throw e
        }
    }
    return (
        <Center>
            <Button
                onClick={() => getTest()}
            > test</Button>
        </Center>
    );
}

export default App;
