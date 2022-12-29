import { useEffect } from 'react';
import apparts from "../data/logements.json"
import { useParams, useNavigate } from 'react-router-dom';
import Carrousel from "../composants/Carrousel"
import Accordeon from "../composants/Accordeon"
import Notation from '../composants/Notation';


const Appart = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const appt = apparts.find(appart => appart.id === id)
    useEffect(() => {
        if (!appt) {
            navigate("/404");
            return;
        }
    }, []);
    if (!appt) {
        return (<div className='page-appart'>Chargement...</div>)
    }
    return (
        <div className='page-appart'>
            <Carrousel images={appt.pictures} />
            <section className='info-appart'>
                <div className='description'>
                    <h3> {appt.title} </h3>
                    <h4>{appt.location} </h4>
                    <div className='span-tag'>
                        {appt.tags.map((tag, indexTag) => <span key={indexTag}>{tag} </span>)}
                    </div>
                </div>
                <div className='fototag' >
                    <div className='info-hote'>
                        <div className='nom-hote'>
                            {appt.host.name}
                        </div>
                        <img src={appt.host.picture} alt={appt.host.name} />
                    </div>
                    <div className='notation'>
                        <Notation note={appt.rating} />
                    </div>
                </div>
            </section >
            <div className='accordeon-appart'>
                <Accordeon className='accordeon' etiquette={"description"} contenu={appt.description} />
                <Accordeon className='accordeon' etiquette={"equipements"} contenu={appt.equipments} type={"liste"} />
            </div>
        </div >
    );
};

export default Appart;