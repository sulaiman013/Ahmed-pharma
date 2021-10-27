import { useEffect, useState } from 'react';

const useServices = () => {
    
    const [dataServices, setDataServices] = useState([]);

    useEffect(() => {
        fetch("/dataForServices.json")
        .then(res => res.json())
        .then(data => setDataServices(data))
    }, []);


    return [dataServices, setDataServices];
};

export default useServices;