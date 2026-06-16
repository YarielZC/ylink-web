'use client'

import { useState } from 'react'
import { Kbd, TextField, InputGroup } from '@heroui/react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <TextField aria-label="Search" type="search">
      <InputGroup>
        <InputGroup.Prefix>
          {/* <SearchIcon className="text-base text-muted pointer-events-none flex-shrink-0" /> */}
        </InputGroup.Prefix>
        <InputGroup.Input className="text-sm" placeholder="Search..." />
        <InputGroup.Suffix>
          <Kbd className="hidden lg:inline-flex">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>K</Kbd.Content>
          </Kbd>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
  )
}
