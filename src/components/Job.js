import React, { useState, useEffect } from 'react'

const Job = (props) => {

    const {
        id,
        company,
        logo,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,

    } = props.data;

    let keywords = [role, level, ...languages, ...tools];

    const [icon, setIcon] = useState("");

    const importSvgs = () => {
        const logoSvg = import(`${logo}`).then((d) => {

            setIcon(d.default);
        });
    };

    useEffect(() => {
        importSvgs();
    }, [logo]);


    return (
        <div className={featured? "job-container job-container--borderLeft": "job-container"}>
            <div className="logo">
                <img src={icon} alt="" />

            </div>
            <div className="part1">

                <div className="company">
                    <span className="cname">
                        {company}
                    </span>
                    {props.data.new && <span className="new">new!</span>}
                    {props.data.featured && <span className="featured">featured</span>}
                </div>

                <div className="position">{position}</div>
                <div className="details">
                    <span>{postedAt}</span>
                    <span>&nbsp;-&nbsp;</span>
                    <span>{contract}</span>
                    <span>&nbsp;-&nbsp;</span>
                    <span>{location}</span>
                </div>
            </div>

            <div className="part2">
                {keywords.map((key, id) => (
                    <button onClick={() => props.setkeywords(key)} key={id}>
                        {key}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default Job
