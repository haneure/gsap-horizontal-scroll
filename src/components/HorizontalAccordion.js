import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '../styles/horizontal-accordion.scss';


const HorizontalAccordion = () => {
    const triggersRef = useRef([]);
    const panelsRef = useRef([]);
    const dayGroupsRef = useRef([]);

    useEffect(() => {
        const staggerDayGroups = (items) => {
            gsap.timeline().staggerTo(items, 0.6, { opacity: 1, x: 0, delay: 0.3 }, 0.15);
        };

        const hideDayGroups = () => {
            gsap.to(dayGroupsRef.current, { opacity: 0, x: -50, duration: 0 });
        };

        const handleTriggerClick = (index, event) => {
            event.preventDefault(); // Prevent the default anchor behavior

            const panel = panelsRef.current[index];
            const dayGroups = panel.querySelectorAll('.x-day-group');

            panelsRef.current.forEach((panel, i) => {
                if (i !== index) {
                    panel.classList.remove('is-active');
                }
            });

            panel.classList.add('is-active');
            hideDayGroups();
            staggerDayGroups(dayGroups);
        };

        hideDayGroups();

        const initialGroups = document.querySelectorAll('.is-active .x-day-group');
        staggerDayGroups(initialGroups);

        const handleTriggerClicks = [];
        triggersRef.current.forEach((trigger, index) => {
            const handler = (event) => handleTriggerClick(index, event);
            trigger.addEventListener('click', handler);
            handleTriggerClicks.push(handler);
        });

        return () => {
            triggersRef.current.forEach((trigger, index) => {
                trigger.removeEventListener('click', handleTriggerClicks[index]);
            });
        };
    }, []);

    return (
        <div className="x-accordion">
            <div className="x-accordion-panel is-active" ref={el => panelsRef.current[0] = el}>
                <a href="#" className="x-schedule-trigger" ref={el => triggersRef.current[0] = el}><span className="visuallyhidden">Expand Monday Schedule</span></a>
                <div className="x-accordion-content">
                    <h3>Mon<span className="visuallyhidden">day</span></h3>
                    <div className="x-day-group" ref={el => dayGroupsRef.current[0] = el}>
                        <h4>Breakfast</h4>
                        <p>8:00AM - 9:00AM</p>
                    </div>
                    <div className="x-day-group" ref={el => dayGroupsRef.current[1] = el}>
                        <h4>General Hours</h4>
                        <p>10:15AM - 1:45PM<br /> 3:30PM - 6:00PM</p>
                    </div>
                    <div className="x-day-group x-is-power-hour" ref={el => dayGroupsRef.current[2] = el}>
                        <h4>Demo Power Hour</h4>
                        <p>4:00PM - 5:00PM</p>
                    </div>
                    <div className="x-day-group" ref={el => dayGroupsRef.current[3] = el}>
                        <h4>Happy Hour</h4>
                        <p>6:00PM - 7:00PM</p>
                    </div>
                </div>
            </div>
            <div className="x-accordion-panel" ref={el => panelsRef.current[1] = el}>
                <a href="#" className="x-schedule-trigger" ref={el => triggersRef.current[1] = el}><span className="visuallyhidden">Expand Tuesday Schedule</span></a>
                <div className="x-accordion-content">
                    <h3>Tues<span className="visuallyhidden">day</span></h3>
                    <div className="x-day-group" ref={el => dayGroupsRef.current[4] = el}>
                        <h4>Breakfast</h4>
                        <p>8:30AM - 9:30AM</p>
                    </div>
                    <div className="x-day-group" ref={el => dayGroupsRef.current[5] = el}>
                        <h4>General Hours</h4>
                        <p>10:15AM - 1:45PM<br /> 3:30PM - 6:00PM</p>
                    </div>
                    <div className="x-day-group x-is-power-hour" ref={el => dayGroupsRef.current[6] = el}>
                        <h4>Demo Power Hour</h4>
                        <p>3:00PM - 4:00PM</p>
                    </div>
                    <div className="x-day-group" ref={el => dayGroupsRef.current[7] = el}>
                        <h4>Happy Hour</h4>
                        <p>6:00PM - 7:00PM</p>
                    </div>
                </div>
            </div>
            <div className="x-accordion-panel" ref={el => panelsRef.current[2] = el}>
                <a href="#" className="x-schedule-trigger" ref={el => triggersRef.current[2] = el}><span className="visuallyhidden">Expand Wednesday Schedule</span></a>
                <div className="x-accordion-content">
                    <h3>Wed<span className="visuallyhidden">nesday</span></h3>
                    <div className="x-day-group" ref={el => dayGroupsRef.current[8] = el}>
                        <h4>Breakfast</h4>
                        <p>8:00AM - 9:00AM</p>
                    </div>
                    <div className="x-day-group" ref={el => dayGroupsRef.current[9] = el}>
                        <h4>General Hours</h4>
                        <p>10:15AM - 1:45PM<br /> 3:30PM - 6:00PM</p>
                    </div>
                    <div className="x-day-group x-is-power-hour" ref={el => dayGroupsRef.current[10] = el}>
                        <h4>Demo Power Hour</h4>
                        <p>4:00PM - 5:00PM</p>
                    </div>
                    <div className="x-day-group" ref={el => dayGroupsRef.current[11] = el}>
                        <h4>Happy Hour</h4>
                        <p>6:00PM - 7:00PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalAccordion;