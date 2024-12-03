import ConsumerContent from "@/components/contents/consumer/consumer-content";
import CourierContent from "@/components/contents/courier/courier-content";
import ProducerContent from "@/components/contents/eco-producer/producer-content";
import EcoStationContent from "@/components/contents/eco-station/eco-station-content";
import RecyclerContent from "@/components/contents/recycler/recycler-content";
import CourierHero from "@/components/shared/heros/courier-hero";
import DefaultHero from "@/components/shared/heros/default-hero";
import EcoStationHero from "@/components/shared/heros/eco-station-hero";
import EventsHero from "@/components/shared/heros/events-hero";
import ProducerHero from "@/components/shared/heros/producer-hero";
import RecyclerHero from "@/components/shared/heros/recycler-hero";
import Events from "@/components/contents/events/events";

export interface TabContent {
    hero: React.ReactNode;
    content: React.ReactNode;
  }
  
  export const tabContent: Record<string, TabContent> = {
    "ECOnsumer": {
      hero: <DefaultHero/>,
      content: <ConsumerContent/>,
    },
    "ECO-Station": {
      hero: <EcoStationHero/>,
      content: <EcoStationContent/>,
    },
    "ECO-Producer": {
        hero: <ProducerHero/>,
        content: <ProducerContent/>,
    },
    "ECO-Events": {
        hero: <EventsHero/>,
        content: <Events/>,
    },  
  };