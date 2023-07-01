'use client'

// app/layout.tsx

import { Grid, GridItem } from '@chakra-ui/react'
import { Providers } from './providers'
import { Header } from './component/header'
import { Footer } from './component/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Grid
            templateAreas={`"header header"
                            "nav main"
                            "footer footer"`}
            gridTemplateColumns={{ base: '0fr' }}
            gridTemplateRows={{ base: '1fr 3fr 1fr' }}
            h="0px"
            gap="0"
          >
            <GridItem pl="10" bg="orange.300" area={'header'}>
              <Header />
            </GridItem>
            <GridItem pl="0" bg="green.100" area={'main'} height={'auto'}>
              {children}
            </GridItem>
            <GridItem pl="10" bg="blue.300" area={'footer'}>
              <Footer />
            </GridItem>
          </Grid>
        </Providers>
      </body>
    </html>
  )
}
