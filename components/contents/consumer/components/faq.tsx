import EligblePopup from "@/components/shared/eligble-popup";
import { FaqSection } from "@/components/shared/faq";
import JoinEcommunity from "@/components/shared/join-ecommunity";
import ScanqrPopup from "@/components/shared/scan-qr";

const faqData = [
  {
    question: "Who are ECOnsumers?",
    answer: (
      <>
        ECO-friendly COnsumers are individuals committed to conserving the
        environment by recycling their used beverage bottles (empties) through
        the ECOCAN DRS. They also actively combat beverage counterfeiting by
        authenticating genuine drinks with the EcocanApp before purchase.
        Additionally, they support sustainable commerce by prioritizing purchase
        of ECO-friendly products available on the ECOCAN Market. Join the{" "}
        <JoinEcommunity
          className="text-primary h-0 px-0 text-lg underline underline-offset-4"
          showArrow={false}
          join="ECommunity"
        />{" "}
        today and become an ECOnsumer!
      </>
    ),
  },
  {
    question: "What are empties?",
    answer: (
      <>
        Empties are used beverage bottles from{" "}
        <EligblePopup className="font-normal text-lg" /> products, that are
        recyclable, carry refundable deposit money, and feature ECOCAN Security
        codes printed on their labels. You can easily verify eligible empties by
        scanning their codes with the EcocanApp
      </>
    ),
  },
  {
    question: "How can I get EcocanApp?",
    answer: (
      <>
        Downloading the EcocanApp is simple and free! Click{" "}
        <ScanqrPopup join="here" className="text-lg font-normal" /> to get
        started. There are no download nor subscription fees
      </>
    ),
  },
  {
    question: "What can I do with EcocanApp?",
    answer: (
      <ol className="space-y-2">
        <li>
          <span className="font-medium">Verify Product Authenticity</span>:
          Before buying a product, use the EcocanApp to confirm its genuineness
          and ensure it&apos;s safe for consumption
        </li>
        <li>
          <span className="font-medium">Check Recyclability and Deposits</span>:
          After consuming genuine products, use the app to determine if the
          empties are recyclable and carry refundable deposit money.
        </li>
        <li>
          <span className="font-medium">Redeem Deposit Money</span>: Return
          eligible empties to ECO-Stations for recycling and have the applicable
          deposit money digitally refunded into your ECO-wallet
        </li>
        <li>
          <span className="font-medium">
            Utilize Refunded Deposits as you please
          </span>
          : Use the redeemed deposit money to make purchases, send it to
          friends, donate to charity, or cash out
        </li>
      </ol>
    ),
  },
  {
    question: "How much deposit money does each eligible empty carry?",
    answer: (
      <>
        The deposit amount varies based on the product&apos;s manufacturer or
        importer, product type, container material, and size to reflect the
        material&apos;s value. Scan the ECOCAN Security codes on eligible
        products to verify their deposit amounts
      </>
    ),
  },
  {
    question: "What is an ECO-Station?",
    answer: (
      <>
        ECO-Stations are designated recycling points where you can purchase
        ECO-friendly products, and return eligible empties for recycling to
        redeem applicable deposit money. Empties can be returned either Over the
        counter to <span className="font-semibold">Egents</span>, or
        Automatically through <span className="font-semibold">ECOcans</span>.
        Use the <span className="font-semibold">ECOCAN Map</span> to locate your
        nearest or preferred ECO-station.
      </>
    ),
  },
  {
    question: "Who is responsible for running this ECO-system?",
    answer: (
      <>
        ECOCAN serves as the administrator of the ECO-system, developing the
        necessary technology and managing the infrastructure to keep it running
        smoothly.
      </>
    ),
  },
  {
    question: "Have a different question?",
    answer: (
      <>
        Contact us at{" "}
        <span className="text-primary">support@ECOnsumer.com</span>
      </>
    ),
  },
];

export default function Faq() {
  return <FaqSection faqs={faqData} />;
}
