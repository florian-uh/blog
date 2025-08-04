import React, { useState } from "react";
import data from "./data.json";
import "./styles.css";

type Timeframe = "daily" | "weekly" | "monthly";

const TimeTrackingDashboard: React.FC = () => {
    const [period, setPeriod] = useState<Timeframe>("weekly");

    const handlePeriodChange = (newPeriod: Timeframe) => {
        setPeriod(newPeriod);
    };

    return (
        <main>
            {/* Profil Card */}
            <section id="profil" className="profil-card card">
                <div className="top-card top">
                    <img
                        src="assets/images/image-jeremy.png"
                        alt="Jeremy Robson"
                        className="profile-pic"
                    />
                    <div className="top-text">
                        <p>Report for</p>
                        <h1>Jeremy Robson</h1>
                    </div>
                </div>
                <nav id="menu">
                    <ul>
                        {(["daily", "weekly", "monthly"] as Timeframe[]).map((tf) => (
                            <li
                                key={tf}
                                className={period === tf ? "active" : ""}
                                onClick={() => handlePeriodChange(tf)}
                            >
                                {tf.charAt(0).toUpperCase() + tf.slice(1)}
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>

            {/* Cards pour chaque activité */}
            {data.map((item, i) => {
                const timeframe = item.timeframes[period];
                const previousPeriodLabel =
                    period === "daily"
                        ? "Yesterday"
                        : period === "weekly"
                            ? "Last Week"
                            : "Last Month";

                return (
                    <section
                        key={i}
                        id={item.title.toLowerCase()}
                        className="card"
                        style={{ backgroundColor: item.colorVar }}
                    >
                        <div className="top"></div>
                        <div className="top-display">
                            <div className="display">
                                <h3>{item.title}</h3>
                                <img src={item.icon} alt={`${item.title} icon`} />
                            </div>
                            <div className="top-info">
                                <p className="current">{timeframe.current}hrs</p>
                                <p className="previous">
                                    {previousPeriodLabel} - {timeframe.previous}hrs
                                </p>
                            </div>
                        </div>
                    </section>
                );
            })}
        </main>
    );
};

export default TimeTrackingDashboard;
