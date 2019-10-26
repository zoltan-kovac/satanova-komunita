import React from 'react'
import Container from '@material-ui/core/Container'

export default function Footer() {
  return (
    <footer>
      <Container>
        © {new Date().getFullYear()}
      </Container>
    </footer>
  )
}