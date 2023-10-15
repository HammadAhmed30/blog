import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/projects-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project],
}
