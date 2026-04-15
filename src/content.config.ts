import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    url: z.string().optional(),
    pdf: z.string().optional(),
    abstract: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['peer-reviewed', 'communications', 'theses', 'other']).default('peer-reviewed'),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    location: z.string(),
    year: z.number(),
    slides: z.string().optional(),
    poster: z.string().optional(),
    type: z.enum(['conference', 'invited', 'workshop', 'poster']).default('conference'),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'completed', 'paused']).default('active'),
    start: z.number(),
    end: z.number().optional(),
    tags: z.array(z.string()).default([]),
    url: z.string().optional(),
    funding: z.string().optional(),
  }),
});

const links = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/links' }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    description: z.string(),
    category: z.string(),
    icon: z.string().optional(),
  }),
});

export const collections = { publications, talks, projects, links };
