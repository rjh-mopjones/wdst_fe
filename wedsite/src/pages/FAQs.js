import React from 'react';
import {Accordion, AccordionControl} from "@mantine/core";
import classes from '../styles/FAQS.module.css';

const FAQs= () => {
    return (
        <div className={"faqs"}>
            <Accordion chevronPosition="left" maw={1000} mx="auto" size="xxl" fz="lg" classNames={classes}>
                <Accordion.Item value="item-1" classNames={{text:classes.text}}>
                    <AccordionControl>Is there a free bar?</AccordionControl>
                    <Accordion.Panel>Yes</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="item-2">
                    <AccordionControl>Are kids allowed?</AccordionControl>
                    <Accordion.Panel>No, not even babies soz</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="item-3">
                    <AccordionControl>When should we RSVP by?</AccordionControl>
                    <Accordion.Panel>11:59pm 14th Feb 2025, we will send reminders!</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-4">
                    <AccordionControl>What time should we arrive?</AccordionControl>
                    <Accordion.Panel>12:30pm at the very latest, the ceremony starts at 1pm</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-5">
                    <AccordionControl>Where is the evening do?</AccordionControl>
                    <Accordion.Panel>The ceremony and the evening do are all in the same venue, so just one place for you to get there and back from</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-6">
                    <AccordionControl>Is the menu completely vegetarian?</AccordionControl>
                    <Accordion.Panel>Yes, we are both veggie so we have a vegetarian menu </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-7">
                    <AccordionControl>Is there a dress code?</AccordionControl>
                    <Accordion.Panel>Just normal wedding attire. Most of the day will be outside on grass so wear heels at your own risk...</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-8">
                    <AccordionControl>Are there plus 1s?</AccordionControl>
                    <Accordion.Panel>For planning (and mainly budget) reasons, we are not offering +1s up front. We might have spaces closer to the time depending on RSVPs</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-9">
                    <AccordionControl>How do I get there?</AccordionControl>
                    <Accordion.Panel>Brother, I spent a whole evening making a directions section</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQs;
