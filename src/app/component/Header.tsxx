'use client'
import Image from 'next/image'
import { logger } from '@/app/utils/logger'
import * as React from 'react'
import * as CSS from 'csstype'
import { BackgroundProps, TypographyProps, ColorProps } from '@chakra-ui/react'

import Head from 'next/head'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Center,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'

interface HeaderProps {
  label: string
  bgColor: BackgroundProps['bg']
  textColor: ColorProps['color']
  fontSize: TypographyProps['fontSize']
  onClick?: () => void
}

export function Header({
  label,
  bgColor,
  textColor,
  fontSize,
  onClick,
}: HeaderProps) {
  return (
    <Box bg={bgColor} py={4}>
      <Center>
        <Text fontSize={fontSize} color={textColor}>
          {label}
        </Text>
        <Text fontSize={fontSize} color={textColor}>
          へっだあ
        </Text>
      </Center>
    </Box>
  )
}
