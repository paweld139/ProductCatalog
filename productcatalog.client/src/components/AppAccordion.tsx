import React, {
    useCallback,
    useState
} from 'react';

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

interface Props {
    header: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const AppAccordion = ({
    header,
    children,
    className
}: Props) => {
    const [open, setOpen] = useState('1');

    const toggle = useCallback((id: string) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    }, [open]);

    return (
        <Accordion
            open={open}
            toggle={toggle}
            className={className}
        >
            <AccordionItem>
                <AccordionHeader targetId="1">
                    {header}
                </AccordionHeader>

                <AccordionBody accordionId="1">
                    {children}
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );
};

export default AppAccordion;