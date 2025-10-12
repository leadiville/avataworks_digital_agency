import React from 'react'
import { AccordionItem, Accordion, AccordionHeader, AccordionBody } from 'react-bootstrap'



const AccordionA = ({faqs}) => {

  return (
    <div className='container-fluid p-0'>
      <Accordion>
        {faqs?.map((faq, faqId: any) => {

          return (
            <AccordionItem eventKey={faqId} key={faqId}>
              <AccordionHeader>
                Q{faqId}: {faq.question}
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