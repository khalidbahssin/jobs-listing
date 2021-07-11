import React, { useState, useEffect } from 'react'
import Job from './Job'

const Jobs = ({ data, setkeywords, keywords }) => {
    //console.log(data);

    const [filterData, setfilterData] = useState([]);

    const modifiedData = () => {

        if (keywords.length > 0) {

            const newData = filterData.filter(d => {
                return keywords.every(key => {

                    return (
                        d.role == key ||
                        d.level == key ||
                        d.languages.includes(key) ||
                        d.tools.includes(key)

                    );
                })
            })
            setfilterData(newData);
        }
        else {
            setfilterData(data);
        }


    }

    useEffect(()=>{
        modifiedData();
    }, [keywords]);
    
    return (

        <div className="jobs">
            {data.map((d) => {

                return <Job key={d.id} data={d} setkeywords={setkeywords} />

            })}
        </div>
    )
}

export default Jobs
