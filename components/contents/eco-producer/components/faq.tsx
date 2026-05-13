import EcoProducerForm from "@/components/shared/eco-producer-form";
import { FaqSection } from "@/components/shared/faq";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import RegisterPopup from "@/components/shared/register-popup";

const faqData = [
  {
    question:
      "Do I have to register with ECOCAN for my products to be eligible?",
    answer: (
      <>
        Yes, registration is required. If you produce, manufacture, import, or
        sell drinks online, you have a critical role play in sustainability, by
        conserving the environment and protecting your customers&apos; health.{" "}
        <RegisterPopup
          form={<EcoProducerForm />}
          join="Register to become"
          className="text-lg font-normal"
        />{" "}
        an ECO-Producer to fulfil this vital responsibility
      </>
    ),
  },
  {
    question: "Can I still join the ECO-System if I don--™t produce beverage products?",
    answer: "Not yet, but soon! Currently, only beverage products packaged in aluminium cans, PET plastics, returnable and one-way glass, and beverage cartons are eligible. We plan to expand eligibility to include other products and packaging types in the near future."
  },
  {
    question: "How do I receive updates of my collected and recycled packaging?",
    answer: "You--™ll receive real-time updates through your secure ECOCAN TnT profile. This platform provides information on collected and recycled packaging, as well as alerts on any suspicious market activity.",
  },
  {
    question: "What if I stop producing the product, or change my product line after joining the ECO-system?",
    answer:
      "Notify ECOCAN and update your ECOCAN TnT Profile to remove the discontinued product from your registration list. If you change your product line, update the TnT profile and send packaging samples to ECOCAN for profiling.",
  },
  {
    question:
      "Do I need to change my labelling before joining the ECO-System?",
    answer: "No you do not; you can retain your existing labels. The only requirement is to add ECOCAN Security codes measuring as small as 9 mm x 9 mm, to your labels using your current printing technology. There--™s no need to modify or purchase new equipment for this."
  },
  {
    question: "Have a different question?",
    answer: (
      <>
        Contact us at{" "}
        <span className="text-primary">support@ECO-Producer.com</span>
      </>
    ),
  },
];

export default function Faq() {
  return <FaqSection faqs={faqData} />;
}
