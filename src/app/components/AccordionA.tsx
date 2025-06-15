import React from 'react'
import { AccordionItem, Accordion, AccordionHeader, AccordionBody } from 'react-bootstrap'

const AccordionA = ({ faqs }) => {

  console.log(faqs);
  return (
    <div className='container-fluid p-0'>
      <Accordion>
        {faqs?.map((faq, faqId: number) => {

          return (
            <AccordionItem eventKey={faq.id} key={faqId}>
              <AccordionHeader>
                Q{faq.id}: {faq.question}
              </AccordionHeader>
              <AccordionBody>
                A: {faq.answer}
              </AccordionBody>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default AccordionA