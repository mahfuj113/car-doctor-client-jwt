// import { useEffect, useState } from "react";
import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [asc, setAsc] = useState(true)
    const [search, setSearch] = useState('')
    const services = useServices(asc,search)
    // const [services, setServices] = useState([]);
    console.log(asc);
    // useEffect(() => {
    //     fetch('https://car-doctor-server-gamma-sage.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])
const handleSearch = e => {
    e.preventDefault()
    const search = e.target.search.value
    setSearch(search)
    // console.log(search);
}
console.log(search);
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <form onSubmit={handleSearch}>
                    <input type="text" className="bg-base-300 h-11" placeholder="Search here" name="search"/>
                    <input type="submit" className="btn" value="Search" />
                </form>
                <button className="btn btn-secondary" onClick={() => setAsc(!asc)}>{asc ?  'Price: High to low' : 'Price: Low to high' }</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;