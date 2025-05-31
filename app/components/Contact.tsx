"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { FadeInUp, SlideInLeft, SlideInRight } from "./ScrollAnimations"
import emailjs from "@emailjs/browser"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return
    emailjs
      .sendForm(
        "service_24ol4vo",
        "template_fe1obdp",
        form.current,
        "Ah15gz5DpwDtFEqlX"
      )
      .then(
        (result: any) => {
          toast({
            title: "Success!",
            description: "Message sent successfully.",
            duration: 3000,
          })
          form.current?.reset()
        },
        (error: any) => {
          toast({
            title: "Error!",
            description: "Error, try again later.",
            variant: "destructive",
            duration: 3000,
          })
          console.error("EmailJS error:", error)
        }
      )
  }

  return (
    <>
      <Toaster />
      <section id="contact" className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">Get In Touch</h2>
            </FadeInUp>

            <div className="grid md:grid-cols-2 gap-12">
              <SlideInLeft>
                <div>
                  <FadeInUp delay={0.2}>
                    <h3 className="text-2xl font-semibold text-purple-400 mb-6">Let's Work Together</h3>
                  </FadeInUp>

                  <FadeInUp delay={0.4}>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                      I'm always interested in new opportunities and exciting projects. Whether you have a question or
                      just want to say hi, feel free to reach out!
                    </p>
                  </FadeInUp>

                  <FadeInUp delay={0.6}>
                    <div className="space-y-4 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <Mail className="text-purple-500" size={24} />
                        <span className="text-gray-300">assirouaa25@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Phone className="text-purple-500" size={24} />
                        <span className="text-gray-300">+963 969161507</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <MapPin className="text-purple-500" size={24} />
                        <span className="text-gray-300">Available for remote/onsite work</span>
                      </div>
                    </div>
                  </FadeInUp>
                </div>
              </SlideInLeft>

              <SlideInRight>
                <FadeInUp delay={0.3}>
                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        required
                        className="w-full px-4 py-3 border border-purple-600 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        required
                        className="w-full px-4 py-3 border border-purple-600 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-purple-600 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center gap-2 hover:transform hover:scale-105"
                    >
                      <Send size={20} />
                      Send Message
                    </button>
                  </form>
                </FadeInUp>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
