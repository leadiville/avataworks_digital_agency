import {IfaqHome } from '@/types';
import React from 'react'
import { AccordionItem, Accordion, AccordionHeader, AccordionBody } from 'react-bootstrap'


interface FaqProps {
  faq: IfaqHome[]
}
const AccordionA = ({ faq }: FaqProps) => {
  return (
    <div className="container-fluid p-0">
      <Accordion>
        {faq?.map((data, index) => (
          <AccordionItem
            eventKey={String(index)}
            key={data._id}
          >
            <AccordionHeader>
              Q{index + 1}: {data.question}
            </AccordionHeader>

            <AccordionBody>
              {/* STRING */}
              {typeof data.answer === "string" && (
                <p>{data.answer}</p>
              )}

              {/* ARRAY */}
              {Array.isArray(data.answer) && (
                <ul>
                  {data.answer.map((item, i) => {
                    // STRING ITEM
                    if (typeof item === "string") {
                      return <li key={i}>{item}</li>;
                    }

                    // OBJECT ITEM { title, description }
                    if (typeof item === "object" && item !== null) {
                      return (
                        <li key={i}>
                          <strong>{item.title}</strong>
                          <p>{item.description}</p>
                        </li>
                      );
                    }

                    return null;
                  })}
                </ul>
              )}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionA;
