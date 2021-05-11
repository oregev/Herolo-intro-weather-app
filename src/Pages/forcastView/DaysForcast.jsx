import React from 'react';
import { useSelector } from 'react-redux';
import { weekDays } from 'Resources/weekDays';

export const DaysForcast = () => {
    const { daysData, city } = useSelector(state => state.forcastData);

    const loadIcon = (IconNum) => require(`Assets/icons/${IconNum < 10 ? '0' + IconNum : IconNum}-s.png`).default;
    
    return (
        <div className="daysForcast">
            <h3>5-days forcast<span>in</span>{city.LocalizedName}</h3>
            <div className="daysForcast--days">
                {daysData && daysData.map((day) => {
                    const numDay = new Date(day.Date).getDay();
                    return (
                        <div className="daysForcast--day" key={day.Date}>
                            <div className="daysForcast--icons">
                                <img src={loadIcon(day.Day.Icon)} alt="Forcast daytime icon"/>
                                <img src={loadIcon(day.Night.Icon)} alt="Forcast nighttime icon"/>
                            </div>
                            <p className="daysForcast--day-temp">
                                {day.Temperature.Maximum.Value} - {day.Temperature.Minimum.Value}
                            </p>
                            <p className="daysForcast--day-day">{weekDays[numDay]}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
