import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Accordion, AccordionControl, Text} from "@mantine/core";
import classes from '../styles/FAQS.module.css';

const FAQs= () => {
    const routerNavigate = useNavigate();
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    routerNavigate('/registry')
                    break;
                case 'ArrowRight':
                    routerNavigate('/rsvp')
                    break;
                default:
                // Do nothing for other keys
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

    }, []);
    return (
        <div className={"faqs"}>
            <Accordion chevronPosition="left" maw={1000} mx="auto" size="xxl" fz="lg" classNames={classes}>
                <Accordion.Item value="item-1" classNames={{text:classes.text}}>
                    <AccordionControl>Is there a Free Bar?</AccordionControl>
                    <Accordion.Panel>Yes</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="item-2">
                    <AccordionControl>Are kids allowed?</AccordionControl>
                    <Accordion.Panel>No</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="item-3">
                    <AccordionControl>When should we RSVP by?</AccordionControl>
                    <Accordion.Panel>11:59pm 14th Feb 2025, we will send reminders</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-4">
                    <AccordionControl>What time should we arrive?</AccordionControl>
                    <Accordion.Panel>Latest 12:00pm 21st June 2025</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-5">
                    <AccordionControl>Is the ceremony and reception in the same place?</AccordionControl>
                    <Accordion.Panel>Yes, there is no separation of venues</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-6">
                    <AccordionControl>Is the menu completely vegetarian?</AccordionControl>
                    <Accordion.Panel>Yes, We are both vegetarian so we have a vegetarian menu</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-7">
                    <AccordionControl>Is there a strict dress code?</AccordionControl>
                    <Accordion.Panel>Just normal wedding smart attire</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-8">
                    <AccordionControl>Are there plus 1s?</AccordionControl>
                    <Accordion.Panel>Mainly for planning reasons, we are not offering +1s up front - if you would like one though, feel free
                                    to contact us</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-9">
                    <AccordionControl>How do I get there?</AccordionControl>
                    <Accordion.Panel>Brother, I spent a whole evening making a Directions section</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQs;
