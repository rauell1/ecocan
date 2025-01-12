import { FaqSection } from "@/components/shared/faq";
import HyperLink from "@/components/shared/hyperlink/hyperlink";

const faqData = [
  {
    question: "What is an ECO-Station?",
    answer: (
      <>
        ECO-Stations are designated recycling points where ECOnsumers can
        purchase ECO-products, and return eligible empties for recycling. At
        ECO-Stations, empties can be returned either Over the counter to Egents,
        or Automatically into ECOcans
      </>
    ),
  },
  {
    question: "Can I become an ECO-Station in my City?",
    answer: (
      <>
        Yes you can, If you are a legally registered and operational shop,
        liquor store (Wines and Spirits), supermarket, bar, or restaurant.
        Currently, onboarding is available in the Nairobi Metropolitan Area
        (NMA), with plans to expand across Kenya in the coming months. Simply
        fill out the sign-up form, and we&apos;ll get back to you promptly. Once
        onboarded, you can start accepting empties at your convenience and enjoy
        the benefits of being an ECO-Station
      </>
    ),
  },
  {
    question: "How do I accept empties over the counter, and refund deposits?",
    answer: (
      <>
        Only accept eligible empties listed on the{" "}
        <HyperLink href="/ecocan-market" link="ECOCAN Market" /> regardless of
        where they were purchased. Before starting a return session:
        <ol className="space-y-2 list-decimal ms-6">
          <li>Use your Egent App to verify the ECOnsumers&apos; ECOCAN ID.</li>
          <li>
            Scan the ECOCAN Security codes on the returned empties to confirm
            their eligibility before accepting them.
          </li>
          <li>
            Once the session is complete, the app will automatically refund the
            applicable deposits to the ECOnsumers&apos; ECO-wallets
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "How do I accept empties via ECOcans, and refund deposits?",
    answer:
      "You won't need to do much as these intelligent machines will handle accepting empties, and issuing deposits automatically. Just ensure they are connected to stable power and internet supply. Additionally, make sure to empty the collection bins at least once a week to maintain efficiency.",
  },
  {
    question:
      "How will I be reimbursed the deposits I've refunded to ECOnsumers",
    answer: (
      <>
        Every seven days, ECOCAN will reimburse 100% of the deposit money
        you&apos;ve refunded to ECOnsumers, directly into your Egent Wallet.
        Additionally, you will earn a commission for each eligible empty
        accepted. Check out how the{" "}
        <HyperLink
          href="/solutions/packaging-recycling#how-it-works"
          link="ECO-system"
        />{" "}
        operates for more details
      </>
    ),
  },
  {
    question: "How  much commission do I earn per accepted empty?",
    answer:
      "Commissions vary slightly depending on the ECO-Producers, product type, container material, and volume. Precise commission details will be communicated during onboarding.",
  },
  {
    question: "How can I get ECOcans?",
    answer:
      "If you receive over 1,500 empties daily, we can assist you in installing ECOcans to boost your recycling efficiency and promote your brand. Other factors like store traffic and eligible sales volume also inform eligibility",
  },
  {
    question: "Who are ECOuriers?",
    answer: (
      <>
        ECOuriers are our logistics partners who use electrically powered bikes
        and vehicles to:
        <ol className="space-y-2 list-disc ms-6">
          <li>Pick-up returned empties from ECO-Stations.</li>
          <li>
            Drop-off the collected empties to ECO-Recyclers for closed-loop
            recycling.
          </li>
          <li>
            Deliver ECO-products ordered via the Ping function, to ECO-Stations
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "How do I place orders my via the Egent App?",
    answer:
      "While requesting empties pick-up using the Ping function, you can also use the Reverse Logistics feature to conveniently order for ECO-products supply. Simply tap the relevant button in the app, and the TnT will swing into action",
  },
  {
    question: "Have a different question?",
    answer: (
      <>
        Contact us at{" "}
        <span className="text-primary">support@ECO-Station.com</span>
      </>
    ),
  },
];

export default function Faq() {
  return <FaqSection faqs={faqData} />;
}
