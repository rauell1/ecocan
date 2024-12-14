import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Aluminium from "./aluminium"
import Glass from "./glass"

export default function FunFacts() {
  return (
    <Tabs defaultValue="aluminium" className="max-w-[69.375rem] mx-auto px-4 xl:px-0 py-12">
      <h2 className="text-center text-3xl lg:text-5xl font-bold mb-4">Fun Facts!</h2>
      <TabsList className="grid md:w-3/5 mx-auto grid-cols-3 bg-white border-[#E6E6E6] rounded-full">
        <TabsTrigger value="aluminium" className="rounded-full text-[#0000004D] text-[0.7375rem] md:text-[0.9125rem] lg:text-base">Aluminium Cans</TabsTrigger>
        <TabsTrigger value="plastics" className="rounded-full text-[#0000004D] text-[0.7375rem] md:text-[0.9125rem] md:text-base">Plastics</TabsTrigger>
        <TabsTrigger value="glass" className="rounded-full text-[#0000004D] text-[0.7375rem] md:text-[0.9125rem] md:text-base">Glass</TabsTrigger>
      </TabsList>
      <TabsContent value="aluminium">
        <Aluminium/>
      </TabsContent>
      <TabsContent value="plastics">
        <Glass/>
      </TabsContent>
      <TabsContent value="glass">
        <Aluminium/>
      </TabsContent>
    </Tabs>
  )
}
