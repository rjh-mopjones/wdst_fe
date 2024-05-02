import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Accordion, AccordionControl, Text} from "@mantine/core";
import classes from '../styles/FAQS.module.css';





console.log(classes);




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
            <Accordion chevronPosition="left" maw={1000} mx="auto" size="xxl" fz="lg" classNames={{root:classes.root,
                item:classes.item,
                text:classes.text, control:classes.control}}
            >
                <Accordion.Item value="item-1" classNames={{text:classes.text}}>
                    <AccordionControl>Control 1</AccordionControl>
                    <Accordion.Panel>Panel 1</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="item-2">
                    <AccordionControl>Control 2</AccordionControl>
                    <Accordion.Panel>Panel 2</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="item-3">
                    <AccordionControl>Control 3</AccordionControl>
                    <Accordion.Panel>Panel 3 </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-4">
                    <AccordionControl>Control 4</AccordionControl>
                    <Accordion.Panel>Panel 4 </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="item-5">
                    <AccordionControl>Control 5</AccordionControl>
                    <Accordion.Panel>Panel 5 </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQs;
