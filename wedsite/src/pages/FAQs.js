import React from 'react';
import {Accordion, AccordionControl} from "@mantine/core";
import classes from '../styles/FAQS.module.css';

const FAQs= () => {
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
                    <Accordion.Panel>Latest 12:30pm 21st June 2025, Ceremony starts at 1pm</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-5">
                    <AccordionControl>Is the ceremony and reception in the same place?</AccordionControl>
                    <Accordion.Panel>Yes, there is no separation of venues</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-6">
                    <AccordionControl>Is the menu completely vegetarian?</AccordionControl>
                    <Accordion.Panel>Yes, we are both vegetarian so we have a vegetarian menu</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-7">
                    <AccordionControl>Is there a strict dress code?</AccordionControl>
                    <Accordion.Panel>Just normal wedding smart attire, Most of the day will be outside on grass so wear stilettos are your own risk</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-8">
                    <AccordionControl>Are there plus 1s?</AccordionControl>
                    <Accordion.Panel>Mainly for planning reasons, we are not offering +1s up front - we might have spaces closer to the time</Accordion.Panel>
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
