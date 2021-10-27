import { useEffect, useState } from 'react';

const useTestimonials = () => {
    
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("/dataForTestimonials.json")
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, []);


    return [testimonials, setTestimonials];
};

export default useTestimonials;