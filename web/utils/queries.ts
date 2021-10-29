import groq from 'groq'

export const configQuery = groq`
  *[_id == "config"][0] {
    ...
  }
`
