'use client'

// app/layout.tsx

import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react'
import { Providers } from '@/app/providers'
import { Header } from '@/app/component/Header'
import { Footer } from '@/app/component/Footer'

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
            templateAreas={`"header"
                            "main"
                            "footer"`}
            // gridTemplateColumns={{ base: '0fr' }}
            gridTemplateRows={{ base: '0fr 1fr 0fr' }}
            // h="0px"
            minHeight={'100vh'}
            gap="0"
          >
            <GridItem pl="0" area={'header'}>
              <Header
                label="hjhjhj"
                bgColor="facebook.400"
                textColor="white"
                fontSize="2xl"
              />
            </GridItem>
            <GridItem
              pl="0"
              bg="green.100"
              area={'main'}
              // height={'max-content'}
            >
              {children}
            </GridItem>
            <GridItem pl="0" bg="blue.300" area={'footer'}>
              <Footer
                label="© 2022 Chakra Templates. All rights reserved"
                bgColor={useColorModeValue('gray.50', 'gray.900')}
                textColor="gray.900"
                fontSize="md"
              />
            </GridItem>
          </Grid>
        </Providers>
      </body>
    </html>
  )
}
