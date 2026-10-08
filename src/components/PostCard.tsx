import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { bwSrc } from '@/lib/site-config'
import { formatDate, postPath, type Post } from '@/content/blog'

export function PostCard({ post, dark = false, priority = false, as: Heading = 'h3' }: { post: Post; dark?: boolean; priority?: boolean; as?: 'h2' | 'h3' }) {
  const muted = dark ? 'text-muted-dark' : 'text-muted'
  return (
    <Link href={postPath(post)} className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <Image
          src={bwSrc(post.image)}
          priority={priority}
          alt={post.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink">{post.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <Heading className="font-display text-xl font-semibold leading-snug">{post.title}</Heading>
        <p className={`mt-2 flex-1 text-sm leading-relaxed ${muted}`}>{post.excerpt}</p>
        <p className={`mt-4 flex items-center justify-between text-xs ${muted}`}>
          <span>
            {formatDate(post.updated)} · {post.readingMinutes} min de lecture
          </span>
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </p>
      </div>
    </Link>
  )
}
