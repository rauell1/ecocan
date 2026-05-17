import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BlogHero from "./blog-hero"
import Articles from "./articles"
import PartnershipBlogHero from "./partnership-blog-hero"
import PartnershipArticles from "./partnership-articles"

export default function News() {
  return (
    <section>
      <Tabs defaultValue="sustainability">
        {/* Tab switcher */}
        <TabsList
          className="mx-auto mb-10 grid w-full max-w-sm grid-cols-2 rounded-full p-1"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <TabsTrigger
            value="sustainability"
            className="rounded-full text-sm font-medium text-white/50 data-[state=active]:bg-white/10 data-[state=active]:text-white"
          >
            Sustainability
          </TabsTrigger>
          <TabsTrigger
            value="partnership"
            className="rounded-full text-sm font-medium text-white/50 data-[state=active]:bg-white/10 data-[state=active]:text-white"
          >
            Partnerships
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sustainability" className="space-y-10">
          <BlogHero />
          <Articles />
        </TabsContent>

        <TabsContent value="partnership" className="space-y-10">
          <PartnershipBlogHero />
          <PartnershipArticles />
        </TabsContent>
      </Tabs>
    </section>
  )
}
