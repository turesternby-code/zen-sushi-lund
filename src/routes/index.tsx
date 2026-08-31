import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  Clock,
  Phone,
  Star,
  UtensilsCrossed,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import heroSushi from "@/assets/hero-sushi.jpg";
import nigiri from "@/assets/nigiri.jpg";
import matcha from "@/assets/matcha.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Zen Sushi & Tea — Sushi i Lund" },
      {
        name: "description",
        content:
          "Zen Sushi & Tea i Lund. Beställ sushi för avhämtning eller hemkörning. Öppet till kl. 21. Adress: Ö:a Mårtensgatan 4, 223 61 Lund.",
      },
      { property: "og:title", content: "Zen Sushi & Tea — Sushi i Lund" },
      {
        property: "og:description",
        content:
          "Beställ sushi för avhämtning eller hemkörning i Lund. Öppet till kl. 21.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <InfoRibbon />
      <MenuHighlights />
      <VisitUs />
      <Reviews />
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-serif text-xl font-semibold tracking-tight">
          Zen Sushi & Tea
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#meny"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Meny
          </a>
          <a
            href="#oppettider"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Öppettider
          </a>
          <a
            href="#kontakt"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Hitta hit
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="tel:046142050"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            046-14 20 50
          </a>
          <a
            href="https://www.google.com/search?q=Zen+Sushi+%26+Tea+Lund"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Beställ
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <Star className="size-4 fill-primary text-primary" />
            <span className="text-sm font-medium">4,0</span>
            <span className="text-sm text-muted-foreground">· 626 recensioner</span>
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Sushi & te i hjärtat av Lund
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Välkommen till Zen Sushi & Tea på Östra Mårtensgatan. Vi serverar färsk sushi och
            hantverkste i en lugn miljö — perfekt för en lunchpaus eller middag.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.google.com/search?q=Zen+Sushi+%26+Tea+Lund"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Beställ take away
              <ArrowRight className="size-4" />
            </a>
            <a
              href="https://www.google.com/search?q=Zen+Sushi+%26+Tea+Lund"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Beställ hemkörning
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-2xl bg-muted">
            <img
              src={heroSushi}
              alt="Elegant sushiplatta med nigiri och maki på ett handgjort keramikfat"
              width={1200}
              height={912}
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRibbon() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl divide-y divide-border px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
        <div className="flex items-start gap-4 py-8 md:py-10 md:pr-8">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
            <MapPin className="size-5 text-primary" />
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Adress
            </h2>
            <p className="mt-1 font-medium">
              Ö:a Mårtensgatan 4
              <br />
              223 61 Lund
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 py-8 md:px-8 md:py-10">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
            <Clock className="size-5 text-primary" />
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Öppettider
            </h2>
            <p className="mt-1 font-medium">Öppet till kl. 21 idag</p>
            <p className="text-sm text-muted-foreground">Se fulla tider längre ner</p>
          </div>
        </div>
        <div className="flex items-start gap-4 py-8 md:py-10 md:pl-8">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
            <UtensilsCrossed className="size-5 text-primary" />
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Prisnivå
            </h2>
            <p className="mt-1 font-medium">100–200 kr per person</p>
            <p className="text-sm text-muted-foreground">Rapporterat av 49 gäster</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuHighlights() {
  const dishes = [
    {
      name: "Lax Nigiri",
      description: "Noggrant skivad norsk lax över sushiris med en touch av wasabi.",
      price: "45 kr / 2 bitar",
      image: nigiri,
      alt: "Närbild på lax nigiri på ett ljust keramikfat",
    },
    {
      name: "Zen Moriawase",
      description: "Kockens utvalda mix av dagens finaste fiskar och skaldjur.",
      price: "165 kr",
      image: heroSushi,
      alt: "Sushiplatta med nigiri och maki",
    },
    {
      name: "Ceremonial Matcha",
      description: "Ekologiskt matcha-te från Uji, vispad för hand vid beställning.",
      price: "55 kr",
      image: matcha,
      alt: "Traditionell matcha-te i en handgjord keramikskål",
    },
  ];

  return (
    <section id="meny" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 text-center md:mb-16">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Från köket
        </span>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Utvalda smaker
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          En liten smak av vad vi serverar. Kom in och upplev hela menyn på plats, eller beställ för
          avhämtning.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {dishes.map((dish) => (
          <div
            key={dish.name}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
          >
            <div className="overflow-hidden">
              <img
                src={dish.image}
                alt={dish.alt}
                width={816}
                height={816}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-xl font-semibold">{dish.name}</h3>
                <span className="shrink-0 text-sm font-semibold text-primary">{dish.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function VisitUs() {
  return (
    <section id="kontakt" className="border-y border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div id="oppettider">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Öppettider
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            När vi har öppet
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vi har oftast ingen kö under lugnare tider — välkommen in när det passar dig.
          </p>
          <div className="mt-8 space-y-3">
            {[
              { day: "Måndag", hours: "11:00 – 21:00" },
              { day: "Tisdag", hours: "11:00 – 21:00" },
              { day: "Onsdag", hours: "11:00 – 21:00" },
              { day: "Torsdag", hours: "11:00 – 21:00" },
              { day: "Fredag", hours: "11:00 – 21:00" },
              { day: "Lördag", hours: "12:00 – 21:00" },
              { day: "Söndag", hours: "12:00 – 21:00" },
            ].map((row) => (
              <div
                key={row.day}
                className="flex justify-between border-b border-border pb-3 last:border-b-0"
              >
                <span className="font-medium">{row.day}</span>
                <span className="text-muted-foreground">{row.hours}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Hitta hit
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            Besök oss på Mårtensgatan
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vi ligger på Östra Mårtensgatan 4 i centrala Lund, en kort promenad från stadens
            shopping och universitet.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href="https://maps.google.com/?q=Ö:a+Mårtensgatan+4,+223+61+Lund"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-accent"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Ö:a Mårtensgatan 4, 223 61 Lund</p>
                <p className="text-sm text-muted-foreground">Öppna vägbeskrivning</p>
              </div>
              <ExternalLink className="ml-auto size-4 text-muted-foreground" />
            </a>
            <a
              href="tel:046142050"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-accent"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Phone className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">046-14 20 50</p>
                <p className="text-sm text-muted-foreground">Ring för bokning eller frågor</p>
              </div>
              <ExternalLink className="ml-auto size-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="rounded-3xl bg-foreground px-8 py-16 text-center text-background md:px-16 md:py-24">
        <div className="mx-auto inline-flex items-center gap-1">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="size-6 fill-background text-background" />
          ))}
          <Star className="size-6 fill-background/20 text-background/20" />
        </div>
        <p className="mt-4 font-serif text-5xl font-semibold md:text-6xl">4,0</p>
        <p className="mt-2 text-sm uppercase tracking-wider text-background/60">
          626 recensioner på Google
        </p>
        <blockquote className="mx-auto mt-10 max-w-2xl">
          <p className="font-serif text-xl italic leading-relaxed md:text-2xl">
            "En lugn och trevlig sushiupplevelse i Lund. Färsk fisk, bra te och oftast ingen kö. Perfekt
            för en avslappnad middag."
          </p>
          <cite className="mt-6 block text-sm font-medium not-italic text-background/70">
            — Lokal gäst
          </cite>
        </blockquote>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-semibold">Zen Sushi & Tea</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Ö:a Mårtensgatan 4, 223 61 Lund · 046-14 20 50
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://www.google.com/search?q=Zen+Sushi+%26+Tea+Lund"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Google Profil
            </a>
            <a href="#meny" className="transition-colors hover:text-foreground">
              Meny
            </a>
            <a href="#kontakt" className="transition-colors hover:text-foreground">
              Kontakt
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zen Sushi & Tea. Informationen baseras på offentligt tillgängliga
          uppgifter.
        </p>
      </div>
    </footer>
  );
}
