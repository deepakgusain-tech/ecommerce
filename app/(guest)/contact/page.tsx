"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Field, FieldLabel, FieldContent, FieldError } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle")
  const [errors, setErrors] = useState<string[]>([])

  function validate() {
    const errs: string[] = []
    if (!name.trim()) errs.push("Please enter your name.")
    if (!email.trim()) errs.push("Please enter your email.")
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push("Please enter a valid email address.")
    if (!message.trim()) errs.push("Please enter a message.")
    return errs
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrors([])
    const v = validate()
    if (v.length) {
      setErrors(v)
      return
    }

    try {
      setStatus("sending")

      // Simulate API call. Replace with real endpoint when available.
      await new Promise((r) => setTimeout(r, 800))

      setStatus("success")
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 bg-[radial-gradient(closest-side,_rgba(59,130,246,0.04),_transparent_40%),radial-gradient(closest-side,_rgba(16,185,129,0.03),_transparent_35%)]">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <section>
          <Card className="rounded-2xl border border-white/6 bg-gradient-to-br from-white/3 via-white/2 to-slate-900/5 p-6 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.6)]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Get in touch</p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact our team</h1>
              <p className="max-w-xl text-base leading-7 text-muted-foreground">
                Have a question about ShopHub, partnerships, or pricing? Fill out the form and our team will reply within one business day. For urgent inquiries, use the phone number below.
              </p>

              <div className="mt-4 grid gap-4">
                <div className="flex items-center gap-3 rounded-lg border border-white/6 bg-gradient-to-r from-sky-50/40 to-white/5 p-3 shadow-sm">
                  <span className="rounded-xl bg-sky-600/10 p-3 text-sky-500">
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold">Call sales</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-white/6 bg-gradient-to-r from-cyan-50/30 to-white/5 p-3 shadow-sm">
                  <span className="rounded-xl bg-cyan-600/10 p-3 text-cyan-500">
                    <Mail className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">support@shophub.example</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-white/6 bg-gradient-to-r from-emerald-50/30 to-white/5 p-3 shadow-sm">
                  <span className="rounded-xl bg-emerald-600/10 p-3 text-emerald-500">
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold">Headquarters</p>
                    <p className="text-sm text-muted-foreground">123 Commerce Ave, Suite 400, Austin, TX</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-muted-foreground">
                <p>
                  Business hours: <span className="font-medium text-foreground">Mon–Fri, 9am–6pm CST</span>
                </p>
                <p className="mt-2">We typically respond within one business day. For immediate assistance, call the number above.</p>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <Card className="rounded-2xl border border-white/8 bg-gradient-to-br from-white/5 via-white/2 to-slate-950/6 p-6 shadow-2xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <FieldContent>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <FieldContent>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" type="email" />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel>Subject</FieldLabel>
                  <FieldContent>
                    <Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="How can we help?" />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel>Message</FieldLabel>
                  <FieldContent>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your request"
                      className="h-32 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    />
                  </FieldContent>
                </Field>

                {errors.length > 0 && (
                  <div className="rounded-md border border-destructive/20 bg-destructive/5 p-3 text-sm text-destructive">
                    <ul className="list-disc pl-5">
                      {errors.map((err, i) => (
                        <li key={i}>{err}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md transition-transform hover:-translate-y-0.5" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send message"}
                  </Button>
                  <div className="text-sm">
                    {status === "success" && <p className="text-emerald-400">Thanks — we will reply shortly.</p>}
                    {status === "error" && <p className="text-destructive">Something went wrong. Please try again.</p>}
                    <p className="mt-2 text-muted-foreground">By contacting us you agree to our <span className="underline">privacy policy</span>.</p>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}

export default ContactPage