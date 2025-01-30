import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogHero from "./blog-hero";
import Articles from "./articles";
import PartnershipBlogHero from "./partnership-blog-hero";
import PartnershipArticles from "./partnership-articles";

export default function News() {
  return (
    <section id="">
      <Tabs defaultValue="sustainability">
        <TabsList className="grid md:w-3/5 mx-auto grid-cols-2 bg-white border-[#E6E6E6] rounded-full my-8">
          <TabsTrigger
            value="sustainability"
            className="rounded-full text-[#0000004D] text-[0.7375rem] md:text-[0.9125rem] lg:text-base"
          >
            Sustainability News
          </TabsTrigger>
          <TabsTrigger
            value="partnership"
            className="rounded-full text-[#0000004D] text-[0.7375rem] md:text-[0.9125rem] md:text-base"
          >
            Partnership News
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sustainability" className="space-y-12">
          <BlogHero />
          <Articles />
        </TabsContent>
        <TabsContent value="partnership" className="space-y-12">
          <PartnershipBlogHero />
          <PartnershipArticles />
        </TabsContent>
      </Tabs>
    </section>
  );
}
