"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"

export function ConnectButton() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState("")

  const connectWallet = () => {
    // Simulate wallet connection
    setConnected(true)
    setAddress("0x1234...5678")
  }

  const disconnectWallet = () => {
    setConnected(false)
    setAddress("")
  }

  if (connected) {
    return (
      <Button
        variant="outline"
        className="bg-white/10 border-purple-500/30 hover:bg-white/20 text-white"
        onClick={disconnectWallet}
      >
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          {address}
        </span>
      </Button>
    )
  }

  return (
    <Button
      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
      onClick={connectWallet}
    >
      <Wallet className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  )
}
