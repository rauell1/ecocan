import EcoEventsForm from "@/components/shared/eco-events-form";
import { FaqSection } from "@/components/shared/faq";
import RegisterPopup from "@/components/shared/register-popup";

const faqData = [
  {
    question: "How can I get ECOcans to my event?",
    answer: (
      <>
        <RegisterPopup
          form={<EcoEventsForm />}
          join="Register as an ECO-Event organizer"
          className="text-lg font-normal"
        />{" "}
        and submit a request for ECOcans. Our team will contact you with the
        next steps.
      </>
    ),
  },
  {
    question: "How can I get ECOCAN Security codes for my ticketing?",
    answer:
      "Once onboarded, we’ll create a TnT profile for your event and help customize ECOCAN Security codes, which will be digitally delivered to you.",
  },
  {
    question:
      "Where will collected empties end up?",
    answer:
      "Returnable glass bottles will be recycled by us, while other materials will be sent to ECO-recyclers for processing.",
  },
  {
    question: "Have a different question?",
    answer: (
      <>
        Contact us at{" "}
        <span className="text-primary">support@ECO-Events.com</span>
      </>
    ),
  },
];

export default function Faq() {
  return <FaqSection faqs={faqData} />;
}
