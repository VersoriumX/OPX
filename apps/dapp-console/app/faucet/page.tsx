'use client'

import { CardContent, CardHeader } from '@eth-optimism/ui-components'
import { Card } from '@eth-optimism/ui-components/src/components/ui/card/card'
import { Text } from '@eth-optimism/ui-components/src/components/ui/text/text'
import { FaucetHeader } from '@/app/faucet/components/FaucetHeader'
import { useEffect } from 'react'
import { useFeatureFlag } from '@/app/hooks/useFeatureFlag'
import { useRouter } from 'next/navigation'

export default function Faucet() {
  const isSignedIn = false
  const isWalletConnected = false
  const authentications = {
    coinbase: true,
    worldId: true,
    gitcoin: true,
    eas: false,
  }
  const isConsoleFaucetEnabled = useFeatureFlag('enable_console_faucet')
  const router = useRouter()

  // Redirect to the home page if the faucet is disabled
  useEffect(() => {
    if (!isConsoleFaucetEnabled) {
      router.push('/')
    }
  }, [isConsoleFaucetEnabled, router])

  return (
    <div className="flex flex-col w-full items-center py-10 px-2 sm:px-6 ">
      <div className="text-center mb-10 px-4">
        <Text as="h1" className="text-3xl sm:text-5xl font-semibold mb-2">
          Superchain Faucet
        </Text>
        <Text
          as="p"
          className="text-md sm:text-lg text-center text-muted-foreground"
        >
          Get test tokens for building applications on the Superchain
        </Text>
      </div>

      <Card className="w-full max-w-screen-lg">
        <CardHeader>
          <FaucetHeader
            isSignedIn={isSignedIn}
            isWalletConnected={isWalletConnected}
            authentications={authentications}
          />
        </CardHeader>
        <div className="w-full border-t-1 border-border pb-6" />
        <CardContent>content here</CardContent>
      </Card>
    </div>
  )
}
