import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { getPost, postsFor } from '@/content/blog'
import { ArticleView } from '@/components/BlogViews'

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return postsFor('Clients').map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug, 'Clients')
  if (!post) return {}
  return buildMetadata({ title: `${post.title} | Sankéa`, description: post.metaDescription, path: `/blog/${slug}`, ogTitle: post.title })
}

export default async function ClientPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = getPost(slug, 'Clients')
  if (!post) notFound()
  return <ArticleView post={post} />
}
