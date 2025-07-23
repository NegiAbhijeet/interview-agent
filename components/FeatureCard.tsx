// components/FeatureCard.tsx
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function FeatureCard({ section, idx }: { section: any; idx: number }) {
  return (
    <div
      className=""
      data-aos="fade-up"
      data-aos-delay={200 + idx * 100}
    >
      <Card className="h-full card-border-color">
        <CardHeader className="relative z-10 p-0 pt-4 px-4 md:pt-6 md:px-6">
          <div className="flex items-center gap-4 mb-2">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br from-${section.badgeColor}-500/20 to-${section.badgeColor}-500/20 border border-${section.badgeColor}-500/30`}
            >
              {section.icon}
            </div>
            <span
              className={`text-sm font-semibold text-${section.badgeColor}-400 uppercase tracking-wider block`}
            >
              {section.type}
            </span>
          </div>
          <CardTitle className="text-lg md:text-xl font-bold leading-tight mb-3">
            {section.title}
          </CardTitle>
          <p className="text-base">{section.description}</p>
        </CardHeader>

        <CardContent className="relative z-10 space-y-4 pb-4 px-4 md:px-6">
          <div className="space-y-2">
            {section.items.map((item: any, itemIdx: number) => (
              <div
                key={itemIdx}
                className="flex items-start gap-5 group/item py-4 rounded-xl hover:bg-slate-200/30 transition-all duration-300 hover:translate-x-2"
              >
                <div
                  className={`p-2.5 rounded-lg bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-500/20 border border-${item.color}-500/30 mt-1`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-base leading-relaxed mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm description-color">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
