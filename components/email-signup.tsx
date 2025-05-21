"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You'll be notified when we launch.",
      })
      setEmail("")
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <motion.div
      className="w-full max-w-md mx-auto px-2 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Be the first to know when we launch</h3>
        <p className="text-sm sm:text-base text-slate-300">Sign up to get notified when Wits Newsroom goes live.</p>
      </div>

      {isSubmitted ? (
        <motion.div
          className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-400 mb-3 sm:mb-4" />
          <h4 className="text-lg sm:text-xl font-medium text-white mb-1 sm:mb-2">You're on the list!</h4>
          <p className="text-sm sm:text-base text-slate-300 text-center">
            We'll notify you as soon as Wits Newsroom launches.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex gap-2 p-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-0 text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base h-9 sm:h-10"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white h-9 sm:h-10 px-3 sm:px-4"
            >
              {isSubmitting ? (
                <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="hidden sm:inline mr-2">Notify Me</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </motion.div>
  )
}
