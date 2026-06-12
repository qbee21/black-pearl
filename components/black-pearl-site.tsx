"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Coffee,
  ExternalLink,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Users,
  Wifi,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { blackPearlData } from "@/lib/black-pearl-data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

type BookingFormState = {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
};

const initialFormState: BookingFormState = {
  name: "",
  phone: "",
  guests: blackPearlData.bookingGuests[0],
  date: "",
  time: blackPearlData.bookingTimes[2],
};

const heroCollage = [
  {
    src: "images/black-pearl/hero-interior.jpg",
    alt: "Интерьер уютной кофейни с мягким светом и тёплыми материалами",
    className: "col-span-2 row-span-2 min-h-[22rem]",
  },
  {
    src: "images/black-pearl/hero-coffee.jpg",
    alt: "Кофе с молочной пеной крупным планом",
    className: "min-h-[10.5rem]",
  },
  {
    src: "images/black-pearl/hero-dessert.jpg",
    alt: "Десерт в кофейне на светлом столе",
    className: "min-h-[10.5rem]",
  },
] as const;

export function BlackPearlSite() {
  const shouldReduceMotion = useReducedMotion();
  const [bookingForm, setBookingForm] = useState(initialFormState);
  const [bookingSent, setBookingSent] = useState(false);

  const handleBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      `Здравствуйте! Хочу забронировать столик в ${blackPearlData.name}.`,
      `Имя: ${bookingForm.name}`,
      `Телефон: ${bookingForm.phone}`,
      `Гости: ${bookingForm.guests}`,
      `Дата: ${bookingForm.date}`,
      `Время: ${bookingForm.time}`,
    ].join("\n");

    window.open(
      `${blackPearlData.whatsappHref}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setBookingSent(true);
  };

  return (
    <main className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(132,98,60,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(141,157,109,0.16),transparent_26%),linear-gradient(180deg,rgba(255,248,239,0.94),rgba(255,250,245,0.55),transparent)]" />

      <header className="sticky top-0 z-40 border-b border-white/60 bg-[color:rgba(255,248,239,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="font-heading text-2xl leading-none tracking-[0.08em] text-primary">
              {blackPearlData.name}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.26em] text-muted-foreground">
              {blackPearlData.type}
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              О нас
            </a>
            <a href="#menu" className="transition-colors hover:text-foreground">
              Меню
            </a>
            <a
              href="#gallery"
              className="transition-colors hover:text-foreground"
            >
              Галерея
            </a>
            <a
              href="#reviews"
              className="transition-colors hover:text-foreground"
            >
              Отзывы
            </a>
            <a
              href="#contacts"
              className="transition-colors hover:text-foreground"
            >
              Контакты
            </a>
          </nav>

          <div className="hidden sm:block">
            <a
              href="#booking"
              className={buttonVariants({
                className:
                  "h-11 rounded-full px-5 text-sm font-semibold shadow-[0_18px_45px_-22px_rgba(104,67,33,0.5)]",
              })}
            >
              Забронировать столик
            </a>
          </div>
        </div>
      </header>

      <section id="hero" className="relative">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 md:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-22">
          <Reveal className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2">
              {blackPearlData.badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="outline"
                  className="rounded-full border-primary/15 bg-white/70 px-3 py-1 text-[0.7rem] tracking-[0.16em] uppercase text-primary/80"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-8xl">
              {blackPearlData.tagline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Качественный кофе, авторские напитки, завтраки весь день и
              интерьер, который работает на атмосферу так же сильно, как и на
              вкус. Пространство для спокойных встреч, свиданий и работы с
              ноутбуком в центре города.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#menu"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "h-13 rounded-full px-7 text-sm font-semibold shadow-[0_18px_45px_-22px_rgba(104,67,33,0.52)]",
                })}
              >
                Посмотреть меню
              </a>
              <a
                href="#booking"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "h-13 rounded-full border-primary/15 bg-white/75 px-7 text-sm font-semibold backdrop-blur-sm",
                })}
              >
                Забронировать столик
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-4">
              {blackPearlData.stats.map((stat, index) => (
                <Reveal key={stat.label} delay={0.08 * index}>
                  <Card className="border border-white/80 bg-white/75 py-5 shadow-[0_18px_60px_-36px_rgba(66,44,20,0.5)] backdrop-blur-sm">
                    <CardContent className="space-y-2">
                      <p className="font-heading text-3xl leading-none tracking-[-0.04em] text-primary">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {heroCollage.map((photo) => (
                  <div
                    key={photo.alt}
                    className={cn(
                      "group relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#eadfce] shadow-[0_28px_90px_-40px_rgba(68,40,18,0.55)]",
                      photo.className,
                    )}
                  >
                    <Image
                      fill
                      priority={photo === heroCollage[0]}
                      src={photo.src}
                      alt={photo.alt}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-white/10" />
                  </div>
                ))}
              </div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                className="absolute -bottom-6 left-4 right-4 rounded-[1.75rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,251,246,0.95),rgba(246,237,227,0.9))] p-5 shadow-[0_28px_70px_-36px_rgba(69,40,16,0.55)] backdrop-blur-md sm:left-auto sm:right-6 sm:w-[19rem]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Завтраки, кофе и атмосфера
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Формат, который работает и на утро, и на вечер.
                    </p>
                  </div>
                </div>
                <Separator className="my-4 bg-primary/10" />
                <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Средний чек</p>
                    <p>550 ₽</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ланч</p>
                    <p>от 200 ₽</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="space-y-5">
              <SectionLead title="О нас" kicker="Тёплый минимализм" />
              {blackPearlData.about.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {blackPearlData.highlights.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="rounded-full bg-secondary/70 px-3 py-1 text-foreground"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/70 bg-[#eadfce] shadow-[0_28px_70px_-40px_rgba(57,37,16,0.45)]">
                <Image
                  fill
                  src="images/black-pearl/about-table.jpg"
                  alt="Мягкий интерьер кофейни с длинным общим столом"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[11.5rem] overflow-hidden rounded-[2rem] border border-white/70 bg-[#eadfce] shadow-[0_28px_70px_-40px_rgba(57,37,16,0.45)]">
                  <Image
                    fill
                    src="images/black-pearl/about-barista.jpg"
                    alt="Бариста за кофейной стойкой"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <Card className="border border-white/80 bg-white/80 py-6 shadow-[0_24px_70px_-40px_rgba(57,37,16,0.45)] backdrop-blur-sm">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Wifi className="size-5" />
                      <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                        Для отдыха и работы
                      </span>
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">
                      Бесплатный Wi-Fi, спокойный темп, столики на улице и
                      камерный формат делают пространство одинаково удобным и
                      для рабочей встречи, и для долгого кофе вдвоём.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLead
            title="Популярные позиции меню"
            kicker="Кофе, завтраки, десерты и авторские напитки"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {blackPearlData.menuGroups.map((group, index) => (
            <Reveal key={group.title} delay={0.08 * index}>
              <Card className="h-full border border-white/80 bg-[linear-gradient(180deg,rgba(255,252,248,0.96),rgba(249,240,231,0.92))] py-7 shadow-[0_28px_70px_-45px_rgba(58,37,15,0.42)]">
                <CardHeader className="space-y-3">
                  <Badge
                    variant="outline"
                    className="w-fit rounded-full border-primary/15 bg-white/70 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-primary/80"
                  >
                    {group.caption}
                  </Badge>
                  <CardTitle className="font-heading text-3xl text-foreground">
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-end justify-between gap-4 border-b border-primary/8 pb-3 last:border-none last:pb-0"
                    >
                      <span className="max-w-[13rem] text-sm leading-6 text-foreground">
                        {item.name}
                      </span>
                      <span className="shrink-0 text-sm font-semibold text-primary">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLead
            title="Галерея атмосферы"
            kicker="Интерьер, кофе, десерты и ритм городских встреч"
            align="center"
          />
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 xl:columns-3">
          {blackPearlData.gallery.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.05 * index}
              className="mb-4 break-inside-avoid"
            >
              <div
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] border border-white/80 bg-[#eadfce] shadow-[0_24px_70px_-42px_rgba(57,37,16,0.48)]",
                  item.height,
                )}
              >
                <Image
                  fill
                  src={item.image}
                  alt={item.title}
                  sizes="(max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/0 to-white/8" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-lg font-medium text-white">{item.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLead
            title="Почему гости выбирают нас"
            kicker="Причины, которые чаще всего звучат в отзывах и описании заведения"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {blackPearlData.reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={0.06 * index}>
              <Card className="h-full border border-white/80 bg-white/80 py-7 shadow-[0_24px_70px_-45px_rgba(57,37,16,0.4)] backdrop-blur-sm">
                <CardContent className="space-y-4">
                  <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {featureIcon(reason.title)}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl leading-none text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {reason.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal>
            <Card className="border border-white/80 bg-[linear-gradient(145deg,rgba(255,252,247,0.96),rgba(246,235,221,0.92))] py-8 shadow-[0_28px_80px_-44px_rgba(58,37,15,0.45)]">
              <CardContent className="space-y-6">
                <SectionLead
                  title="Отзывы гостей"
                  kicker="Социальное доказательство"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-white/70 p-5">
                    <p className="font-heading text-5xl leading-none text-primary">
                      4.7
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Средняя оценка в 2ГИС
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white/70 p-5">
                    <p className="font-heading text-5xl leading-none text-primary">
                      276
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Публичных отзывов на карточке
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  В отзывах чаще всего повторяются одни и те же темы:
                  приветливый персонал, вкусный кофе, удачные завтраки и
                  ощущение тёплого городского места, куда легко прийти ещё раз.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {blackPearlData.reviews.map((review, index) => (
              <Reveal key={review.author} delay={0.08 * index}>
                <Card className="h-full border border-white/80 bg-white/85 py-7 shadow-[0_24px_70px_-45px_rgba(57,37,16,0.4)] backdrop-blur-sm">
                  <CardContent className="flex h-full flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                          {review.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {review.author}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-primary">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="size-4 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">
                      “{review.quote}”
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card className="h-full border border-white/80 bg-[linear-gradient(145deg,rgba(244,236,223,0.95),rgba(255,250,244,0.96))] py-8 shadow-[0_28px_80px_-44px_rgba(58,37,15,0.45)]">
              <CardContent className="space-y-6">
                <SectionLead
                  title="Бронирование столика"
                  kicker="Простая заявка без лишних шагов"
                />
                <p className="text-sm leading-7 text-muted-foreground">
                  Форма отправляет готовую заявку напрямую в WhatsApp кофейни.
                  Это быстрый сценарий бронирования, который особенно хорошо
                  работает с мобильного трафика и не требует отдельного бэкенда.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <InfoPill
                    icon={<Phone className="size-4" />}
                    label="Телефон"
                    value={blackPearlData.phoneDisplay}
                  />
                  <InfoPill
                    icon={<MapPin className="size-4" />}
                    label="Адрес"
                    value="ул. 50 лет Октября, 9"
                  />
                  <InfoPill
                    icon={<Coffee className="size-4" />}
                    label="Формат"
                    value="Завтраки, ланчи, speciality"
                  />
                  <InfoPill
                    icon={<Users className="size-4" />}
                    label="Посадка"
                    value="до 20 мест"
                  />
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="border border-white/80 bg-white/88 py-8 shadow-[0_28px_80px_-44px_rgba(58,37,15,0.42)] backdrop-blur-sm">
              <CardContent>
                <form className="grid gap-5" onSubmit={handleBookingSubmit}>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      required
                      placeholder="Как к вам обращаться"
                      className="h-12 rounded-2xl border-primary/10 bg-white/80 px-4"
                      value={bookingForm.name}
                      onChange={(event) =>
                        setBookingForm((current) => ({
                          ...current,
                          name: event.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="h-12 rounded-2xl border-primary/10 bg-white/80 px-4"
                      value={bookingForm.phone}
                      onChange={(event) =>
                        setBookingForm((current) => ({
                          ...current,
                          phone: event.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="guests">Количество гостей</Label>
                      <select
                        id="guests"
                        className="h-12 rounded-2xl border border-primary/10 bg-white/80 px-4 text-sm outline-none transition focus:border-ring focus:ring-3 focus:ring-ring/50"
                        value={bookingForm.guests}
                        onChange={(event) =>
                          setBookingForm((current) => ({
                            ...current,
                            guests: event.target.value,
                          }))
                        }
                      >
                        {blackPearlData.bookingGuests.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="time">Время</Label>
                      <select
                        id="time"
                        className="h-12 rounded-2xl border border-primary/10 bg-white/80 px-4 text-sm outline-none transition focus:border-ring focus:ring-3 focus:ring-ring/50"
                        value={bookingForm.time}
                        onChange={(event) =>
                          setBookingForm((current) => ({
                            ...current,
                            time: event.target.value,
                          }))
                        }
                      >
                        {blackPearlData.bookingTimes.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="date">Дата</Label>
                    <Input
                      id="date"
                      required
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="h-12 rounded-2xl border-primary/10 bg-white/80 px-4"
                      value={bookingForm.date}
                      onChange={(event) =>
                        setBookingForm((current) => ({
                          ...current,
                          date: event.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <Button
                      type="submit"
                      size="lg"
                      className="h-13 flex-1 rounded-full text-sm font-semibold shadow-[0_18px_45px_-22px_rgba(104,67,33,0.5)]"
                    >
                      Отправить в WhatsApp
                      <ArrowRight className="size-4" />
                    </Button>
                    <a
                      href={blackPearlData.phoneHref}
                      className={buttonVariants({
                        variant: "outline",
                        size: "lg",
                        className:
                          "h-13 flex-1 rounded-full border-primary/15 bg-white px-6 text-sm font-semibold",
                      })}
                    >
                      Позвонить
                    </a>
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">
                    Нажимая на кнопку, гость сразу переходит в диалог с
                    заведением. Это удобно для быстрых подтверждений и живого
                    общения без дополнительных шагов.
                  </p>

                  {bookingSent ? (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                      Черновик заявки открыт в WhatsApp. Остаётся только
                      отправить сообщение.
                    </div>
                  ) : null}
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <Card className="border border-white/80 bg-white/88 py-8 shadow-[0_28px_80px_-44px_rgba(58,37,15,0.4)] backdrop-blur-sm">
              <CardContent className="space-y-7">
                <SectionLead
                  title="Контакты"
                  kicker="Легко найти, удобно связаться"
                />

                <div className="space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      Адрес
                    </p>
                    <p className="mt-2 text-lg text-foreground">
                      {blackPearlData.address}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {blackPearlData.district}, {blackPearlData.postalCode}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      Телефон
                    </p>
                    <a
                      href={blackPearlData.phoneHref}
                      className="mt-2 block text-lg text-foreground transition-colors hover:text-primary"
                    >
                      {blackPearlData.phoneDisplay}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      Время работы
                    </p>
                    <div className="mt-2 space-y-2">
                      {blackPearlData.hours.map((row) => (
                        <p key={row} className="text-sm text-foreground">
                          {row}
                        </p>
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {blackPearlData.hoursNote}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={blackPearlData.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      variant: "outline",
                      className:
                        "h-11 rounded-full border-primary/15 bg-white/80 px-5",
                    })}
                  >
                    WhatsApp
                  </a>
                  <a
                    href={blackPearlData.telegramHref}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      variant: "outline",
                      className:
                        "h-11 rounded-full border-primary/15 bg-white/80 px-5",
                    })}
                  >
                    Telegram
                  </a>
                  <a
                    href={blackPearlData.vkHref}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      variant: "outline",
                      className:
                        "h-11 rounded-full border-primary/15 bg-white/80 px-5",
                    })}
                  >
                    VK
                  </a>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white p-2 shadow-[0_28px_80px_-44px_rgba(58,37,15,0.42)]">
              <iframe
                title="Карта кофейни Чёрная Жемчужина"
                src={blackPearlData.mapEmbed}
                className="h-[32rem] w-full rounded-[1.5rem] border-0"
                loading="lazy"
              />
              <div className="flex flex-col gap-3 p-4 sm:flex-row">
                <a
                  href={blackPearlData.mapHref}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    className: "h-11 rounded-full px-5 text-sm font-semibold",
                  })}
                >
                  Открыть в 2ГИС
                  <ExternalLink className="size-4" />
                </a>
                <a
                  href={blackPearlData.directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    className:
                      "h-11 rounded-full border-primary/15 bg-white px-5 text-sm font-semibold",
                  })}
                >
                  Построить маршрут
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-primary/10 bg-[color:rgba(248,241,232,0.72)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <p className="font-heading text-3xl tracking-[-0.04em] text-primary">
              {blackPearlData.name}
            </p>
            <p className="mt-2 max-w-lg text-sm leading-7 text-muted-foreground">
              Премиально собранный городской лендинг для кофейни-ростерии:
              атмосфера, меню, отзывы, бронирование и контакты в одном потоке
              без перегруза.
            </p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground lg:text-right">
            <p>{blackPearlData.address}</p>
            <p>
              <a
                href={blackPearlData.phoneHref}
                className="transition-colors hover:text-foreground"
              >
                {blackPearlData.phoneDisplay}
              </a>
              {" · "}
              <a
                href={`mailto:${blackPearlData.email}`}
                className="transition-colors hover:text-foreground"
              >
                {blackPearlData.email}
              </a>
            </p>
            <p>© 2026 {blackPearlData.name}. Все ключевые данные основаны на карточке 2ГИС.</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-4 bottom-4 z-50 sm:hidden">
        <div className="grid grid-cols-2 gap-3 rounded-[1.6rem] border border-white/80 bg-[color:rgba(255,249,243,0.9)] p-3 shadow-[0_24px_70px_-38px_rgba(58,37,15,0.5)] backdrop-blur-xl">
          <a
            href="#booking"
            className={buttonVariants({
              className: "h-11 rounded-full text-sm font-semibold",
            })}
          >
            Забронировать
          </a>
          <a
            href={blackPearlData.phoneHref}
            className={buttonVariants({
              variant: "outline",
              className:
                "h-11 rounded-full border-primary/15 bg-white text-sm font-semibold",
            })}
          >
            Позвонить
          </a>
        </div>
      </div>
    </main>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLead({
  title,
  kicker,
  align = "left",
}: {
  title: string;
  kicker: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : ""}>
      <p className="text-xs uppercase tracking-[0.25em] text-primary/75">
        {kicker}
      </p>
      <h2 className="mt-3 font-heading text-4xl leading-none tracking-[-0.04em] text-foreground sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function InfoPill({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.4rem] border border-white/80 bg-white/72 p-4">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <p className="text-xs uppercase tracking-[0.18em] text-primary/80">
          {label}
        </p>
      </div>
      <p className="mt-3 text-sm leading-6 text-foreground">{value}</p>
    </div>
  );
}

function featureIcon(title: string) {
  switch (title) {
    case "Уютная атмосфера":
      return <Sparkles className="size-5" />;
    case "Свежая выпечка и десерты":
      return <Coffee className="size-5" />;
    case "Качественный кофе":
      return <Star className="size-5" />;
    case "Удобное расположение":
      return <MapPin className="size-5" />;
    default:
      return <Wifi className="size-5" />;
  }
}
