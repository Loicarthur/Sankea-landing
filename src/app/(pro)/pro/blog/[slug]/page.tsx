import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { getPost, postsFor } from '@/content/blog'
import { ArticleView } from '@/components/BlogViews'

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return postsFor('Salons').map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug, 'Salons')
  if (!post) return {}
  return buildMetadata({ title: `${post.title} | Sankéa Pro`, description: post.metaDescription, path: `/pro/blog/${slug}`, ogTitle: post.title })
}

export default async function ProPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = getPost(slug, 'Salons')
  if (!post) notFound()
  return <ArticleView post={post} />
}
