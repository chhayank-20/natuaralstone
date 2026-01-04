import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Upload,
  Scan,
  Palette,
  Calculator,
  CheckCircle2,
  Building2,
  Home,
  PenTool,
  Store
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-20 px-4 md:py-32 bg-slate-50 dark:bg-slate-950/50">
        <div className="container max-w-4xl space-y-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            AI-Powered Spatial Design
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Visualize Tiles & Marble <br className="hidden md:block" />
            in <span className="text-primary">Your Own Space</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Upload a room image, let our AI detect structures, and preview premium tiles and marble instantly. Get accurate estimates without the guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="h-12 px-8 text-lg" asChild>
              <Link href="/visualizer">
                Try Visualizer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
              For Brands / Companies
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From photo to estimate in four simple steps. No complex 3D modeling skills required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StepCard
              icon={<Upload className="h-6 w-6" />}
              step="1"
              title="Upload Room Photo"
              description="Take a picture of your room. Our system processes generic formats (JPG, PNG)."
            />
            <StepCard
              icon={<Scan className="h-6 w-6" />}
              step="2"
              title="AI Detection"
              description="Our AI automatically identifies floors and walls. You can fine-tune the boundaries."
            />
            <StepCard
              icon={<Palette className="h-6 w-6" />}
              step="3"
              title="Apply Materials"
              description="Choose from a curated library of tiles and marbles. Preview them in realistic 3D."
            />
            <StepCard
              icon={<Calculator className="h-6 w-6" />}
              step="4"
              title="Get Estimates"
              description="Receive instant quantity calculations and pricing estimates for your renovation."
            />
          </div>
        </div>
      </section>

      {/* Why This Platform */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose NaturalStone</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Built for accuracy, realism, and professional workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <FeatureItem
              title="Real User Images"
              description="We don't just use pre-rendered 3D rooms. We project materials onto YOUR actual photos."
            />
            <FeatureItem
              title="Accurate Scaling"
              description="Advanced calibration ensures tile sizes look realistic relative to your room's perspective."
            />
            <FeatureItem
              title="Brand-Specific Catalogs"
              description="Access real inventories from top tile and marble manufacturers, not just generic textures."
            />
            <FeatureItem
              title="AI-Assisted Segmentation"
              description="Stop wasting time manually masking floors. Our models handle the heavy lifting."
            />
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="py-20 px-4 border-t border-slate-200 dark:border-slate-800">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Who It Is For</h2>

          <div className="flex flex-wrap justify-center gap-6">
            <AudienceBadge icon={<Home className="w-4 h-4 mr-2" />} label="Homeowners" />
            <AudienceBadge icon={<PenTool className="w-4 h-4 mr-2" />} label="Interior Designers" />
            <AudienceBadge icon={<Building2 className="w-4 h-4 mr-2" />} label="Architects" />
            <AudienceBadge icon={<Store className="w-4 h-4 mr-2" />} label="Tile Brands" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-4 bg-slate-900 text-slate-50">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Bridging the Gap Between Showroom & Reality</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Our vision is to eliminate the guesswork in construction and renovation. By connecting offline showrooms with high-fidelity online visualization, we empower homeowners and professionals to make decisions with confidence. We are moving away from generic tools towards specialized, AI-driven solutions for the stone industry.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5 dark:bg-primary/10">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to Transform Your Space?</h2>
          <p className="text-muted-foreground">
            Start visualizing today or contact us to integrate your brand's catalog.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <Link href="/visualizer">Start Visualizing Now</Link>
            </Button>
            <Button size="lg" variant="secondary" className="px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} NaturalStone. All rights reserved.
      </footer>
    </div>
  )
}

// Sub-components for cleaner structure

function StepCard({ icon, step, title, description }: { icon: React.ReactNode, step: string, title: string, description: string }) {
  return (
    <Card className="p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow">
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
        {step}
      </div>
      <div className="h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-slate-100">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}

function FeatureItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1">
        <CheckCircle2 className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  )
}

function AudienceBadge({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center px-6 py-3 bg-white dark:bg-slate-800 border rounded-full shadow-sm">
      {icon}
      <span className="font-medium text-slate-900 dark:text-slate-100">{label}</span>
    </div>
  )
}
