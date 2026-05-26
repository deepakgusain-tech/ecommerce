import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Globe, ShieldCheck, Sparkles, Package, Users } from 'lucide-react'

const page = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_15%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_18%)] text-foreground">
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-12 rounded-[2.5rem] bg-gradient-to-br from-slate-950/95 via-slate-900/85 to-slate-950/95 p-12 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.9)] ring-1 ring-slate-800/70 lg:grid-cols-[1.05fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <Badge className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              About ShopHub
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                A modern ecommerce platform made to help brands scale faster.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                ShopHub helps merchants launch, manage, and grow their online business from one unified dashboard. We build tools for better conversions, stronger operations, and long-term customer loyalty.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button className="min-w-[12rem] bg-gradient-to-r from-primary to-cyan-500 text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-500 hover:to-sky-500">
                Explore the platform
              </Button>
              <Button variant="secondary" className="min-w-[12rem] border-white/10 bg-white/10 text-white shadow-sm shadow-slate-900/10 hover:bg-white/20">
                Talk to a specialist
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Stat accent="blue" value="200k+" label="Active customers" />
              <Stat accent="orange" value="4.9/5" label="Merchant rating" />
              <Stat accent="green" value="98%" label="Support satisfaction" />
              <Stat accent="teal" value="24/7" label="Commerce support" />
            </div>
          </div>

          <Card className="rounded-[2rem] border border-transparent bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 text-white shadow-xl shadow-slate-950/20 ring-1 ring-slate-700/40">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/15 text-cyan-300 shadow-cyan-400/20">
                <Sparkles className="size-5" />
              </div>
              <CardTitle className="mt-6 text-2xl text-white">Our vision for commerce</CardTitle>
              <CardDescription className="mt-2 text-slate-300">
                Build faster, sell smarter, and delight customers with a platform designed to support every brand journey.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
              <p>
                ShopHub modernizes commerce by giving teams a beautiful storefront, powerful marketing tools, and simple operations in one place.
              </p>
              <p>
                We believe every merchant should enjoy fast time to launch, a reliable growth engine, and a customer experience that feels polished and effortless.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16 space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Built for growth
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything merchants need to run a modern online business.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              accent="blue"
              icon={Globe}
              title="Global storefronts"
              description="Launch responsive product experiences that adapt to every device and region with built-in localization support."
            />
            <FeatureCard
              accent="orange"
              icon={ShieldCheck}
              title="Secure checkout"
              description="Deliver fast, PCI-ready checkout flows with fraud protection and trust signals that increase conversions."
            />
            <FeatureCard
              accent="green"
              icon={Package}
              title="Smart operations"
              description="Streamline inventory, orders, and fulfillment so you can focus on growth instead of manual processes."
            />
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              What we stand for
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A thoughtful platform experience built for teams and customers.
            </h2>
            <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              We focus on speed, clarity, and reliability so your ecommerce business can move faster, reduce friction, and keep customers coming back.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <PillarCard
                accent="blue"
                title="Fast time to value"
                description="Launch your storefront and promotions in hours, not weeks."
              />
              <PillarCard
                accent="orange"
                title="Consistent experience"
                description="Keep product discovery and checkout seamless across every channel."
              />
              <PillarCard
                accent="green"
                title="Flexible operations"
                description="Manage orders, inventory, and shipping from a single modern workspace."
              />
              <PillarCard
                accent="teal"
                title="Trusted support"
                description="Access expert commerce help whenever you need it, 24/7."
              />
            </div>
          </div>

          <Card className="rounded-[2rem] border border-transparent bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-8 text-white shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-400/20">
            <CardHeader>
              <CardTitle className="text-white">Trusted by growing brands</CardTitle>
              <CardDescription className="text-slate-300">Built to support teams from boutique shops to large catalogs.</CardDescription>
            </CardHeader>
            <CardContent className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <p>
                ShopHub combines a polished storefront with commerce tools designed for modern operations, letting teams focus on what matters most — selling more and delighting customers.
              </p>
              <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-sm shadow-slate-950/20">
                  <p className="font-semibold text-white">99.9%</p>
                  <p className="text-slate-300">Average platform uptime.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-sm shadow-slate-950/20">
                  <p className="font-semibold text-white">1,200+</p>
                  <p className="text-slate-300">Integrations available out of the box.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16 rounded-[2rem] border border-border bg-card p-8 shadow-sm shadow-muted/10 ring-1 ring-border">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                ShopHub stories
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Merchants choose ShopHub for speed, simplicity, and support.
              </h2>
              <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                Our customers move faster with a platform that makes it easy to run campaigns, manage inventory, and deliver a premium brand experience.
              </p>
            </div>
            <div className="space-y-4">
              <TestimonialCard />
              <div className="rounded-3xl border border-border bg-background p-6 text-sm leading-7 text-muted-foreground">
                “ShopHub helped us streamline our store operations, and our buyers love the fresh storefront experience. Our conversion rate improved in the first month.”
                <p className="mt-4 font-semibold text-foreground">Mia Johnson</p>
                <p className="text-sm text-muted-foreground">Co-founder, Bloom & Co.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 p-8 shadow-2xl shadow-cyan-500/20 ring-1 ring-cyan-300/30">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                Ready to get started?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Launch your next chapter in ecommerce.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="min-w-[10rem] bg-white text-slate-950 shadow-lg shadow-slate-950/10 hover:bg-slate-100">
                Start your free trial
              </Button>
              <Button variant="secondary" className="min-w-[10rem] border-white/30 bg-white/10 text-white hover:bg-white/20">
                Talk to sales
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function Stat({ accent, value, label }: { accent: 'blue' | 'orange' | 'green' | 'teal'; value: string; label: string }) {
  const accentClass = {
    blue: 'from-sky-500/20 via-sky-500/10 to-slate-950/10 border-sky-400/20',
    orange: 'from-orange-500/20 via-orange-500/10 to-slate-950/10 border-orange-400/20',
    green: 'from-emerald-500/20 via-emerald-500/10 to-slate-950/10 border-emerald-400/20',
    teal: 'from-cyan-500/20 via-cyan-500/10 to-slate-950/10 border-cyan-400/20',
  }[accent]

  return (
    <div className={`rounded-3xl border p-6 text-center backdrop-blur-sm ${accentClass}`}>
      <p className="text-3xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-200">{label}</p>
    </div>
  )
}

function FeatureCard({
  accent,
  icon: Icon,
  title,
  description,
}: {
  accent: 'blue' | 'orange' | 'green'
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}) {
  const accentClass = {
    blue: 'from-blue-600/90 via-sky-600/80 to-cyan-500/90 text-white shadow-blue-500/20',
    orange: 'from-orange-500/95 via-amber-500/80 to-yellow-400/95 text-slate-950 shadow-orange-500/20',
    green: 'from-emerald-600/95 via-emerald-500/80 to-teal-500/95 text-white shadow-emerald-500/20',
  }[accent]

  return (
    <Card className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-br p-6 shadow-2xl ${accentClass}`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-white shadow-sm shadow-white/10">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-6 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-current/80">{description}</p>
    </Card>
  )
}

function PillarCard({
  accent,
  title,
  description,
}: {
  accent: 'blue' | 'orange' | 'green' | 'teal'
  title: string
  description: string
}) {
  const accentClass = {
    blue: 'from-sky-950/95 via-sky-800/90 to-slate-950/90 border-sky-400/20 text-white',
    orange: 'from-orange-950/95 via-orange-800/90 to-slate-950/90 border-orange-400/20 text-white',
    green: 'from-emerald-950/95 via-emerald-800/90 to-slate-950/90 border-emerald-400/20 text-white',
    teal: 'from-cyan-950/95 via-cyan-800/90 to-slate-950/90 border-cyan-400/20 text-white',
  }[accent]

  return (
    <div className={`rounded-3xl border p-6 shadow-lg shadow-slate-950/20 bg-gradient-to-br ${accentClass}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-200">{description}</p>
    </div>
  )
}

function TestimonialCard() {
  return (
    <Card className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-950 via-cyan-950 to-emerald-950 p-8 shadow-xl shadow-cyan-500/10 text-white">
      <CardHeader>
        <CardTitle className="text-white">Fast time to launch</CardTitle>
        <CardDescription className="text-slate-200">Our design-first experience helps merchants launch quickly.</CardDescription>
      </CardHeader>
      <CardContent className="mt-4 text-sm leading-7 text-slate-200">
        Build product pages, launch campaigns, and manage your storefront from a single dashboard with no compromise on reliability.
      </CardContent>
    </Card>
  )
}

export default page
