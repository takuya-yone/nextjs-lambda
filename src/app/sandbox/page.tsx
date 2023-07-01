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
            templateAreas={`"header header"
                            "main main"
                            "footer footer"`}
            gridTemplateColumns={{ base: '0fr' }}
            gridTemplateRows={{ base: '0fr 3fr 0fr' }}
            gap="0"
            w={'full'}
            backgroundImage={
              'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
            }
          >
            <GridItem pl="0" area={'header'} border={'2px'}>
              <Header
                label="hjhjhj"
                bgColor="transparent"
                textColor="white"
                fontSize="2xl"
              />
            </GridItem>
            <GridItem pl="0" area={'main'} height={'auto'}>
              {children}
            </GridItem>
            <GridItem pl="0" area={'footer'} border={'2px'}>
              <Footer
                label="© 2022 Chakra Templates. All rights reserved"
                bgColor="transparent"
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
