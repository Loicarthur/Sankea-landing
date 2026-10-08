import Image from 'next/image'
import { SITE_URL, absoluteUrl, bwSrc } from '@/lib/site-config'
import { ORG_ID, breadcrumbJsonLd, itemListJsonLd, pageJsonLd } from '@/lib/seo'
import { POSTS, formatDate, getPost, postPath, type Post } from '@/content/blog'
import { JsonLd } from './JsonLd'
import { Breadcrumb } from './Breadcrumb'
import { PostCard } from './PostCard'
import { ShareButtons } from './ShareButtons'
import { CtaBlock } from './CtaBlock'

type IndexProps = {
  posts: Post[]
  /** Blog des salons : thème sombre, vouvoiement. */
  pro?: boolean
  title: string
  intro: string
  ctaTitle: React.ReactNode
  ctaText: string
  ctaImage: { src: string; alt: string }
}

export function BlogIndexView({ posts, pro = false, title, intro, ctaTitle, ctaText, ctaImage }: IndexProps) {
  const base = pro ? '/pro/blog' : '/blog'
  const home = pro ? { name: 'Sankéa Pro', path: '/pro' } : { name: 'Accueil', path: '/' }
  const blog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${absoluteUrl(base)}#blog`,
    name: pro ? 'Blog Sankéa Pro' : 'Blog Sankéa',
    description: intro,
    url: absoluteUrl(base),
    inLanguage: 'fr-FR',
    publisher: { '@id': ORG_ID },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      '@id': `${absoluteUrl(postPath(p))}#article`,
      headline: p.title,
      url: absoluteUrl(postPath(p)),
      datePublished: p.date,
      dateModified: p.updated,
    })),
  }
  return (
    <>
      <JsonLd
        data={[
          pageJsonLd({ path: base, name: title, description: intro, type: 'CollectionPage', mainEntity: { '@id': `${absoluteUrl(base)}#blog` } }),
          blog,
          itemListJsonLd(title, posts.map((p) => ({ name: p.title, path: postPath(p) }))),
          breadcrumbJsonLd([home, { name: 'Blog', path: base }]),
        ]}
      />
      <section className={pro ? '' : 'bg-white'}>
        <div className="container-site py-10 md:py-16">
          <Breadcrumb items={[{ name: home.name, href: home.path }, { name: 'Blog' }]} dark={pro} />
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-tightest md:text-6xl">{title}</h1>
          <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${pro ? 'text-muted-dark' : 'text-muted'}`}>{intro}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {posts.map((p, i) => (
              <PostCard key={p.slug} post={p} dark={pro} as="h2" priority={i === 0} />
            ))}
          </div>
        </div>
      </section>
      <CtaBlock
        title={ctaTitle}
        text={ctaText}
        section={pro ? 'pro-blog-cta' : 'blog-cta'}
        image={{ ...ctaImage, position: 'center 30%' }}
      />
    </>
  )
}

export function ArticleView({ post }: { post: Post }) {
  const pro = post.category === 'Salons'
  const base = pro ? '/pro/blog' : '/blog'
  const home = pro ? { name: 'Sankéa Pro', path: '/pro' } : { name: 'Accueil', path: '/' }
  const muted = pro ? 'text-muted-dark' : 'text-muted'
  const picked = post.related.map((s) => getPost(s, post.category)).filter((p): p is Post => Boolean(p))
  const filler = POSTS.filter((p) => p.category === post.category && p.slug !== post.slug && !picked.some((r) => r.slug === p.slug))
  const related = [...picked, ...filler].slice(0, 3)

  const url = absoluteUrl(postPath(post))
  const words = [post.answer, ...post.sections.flatMap((sec) => [sec.h2, ...sec.body])].join(' ').split(/\s+/).length
  const blogId = `${absoluteUrl(base)}#blog`
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.metaDescription,
    abstract: post.answer,
    image: { '@type': 'ImageObject', url: absoluteUrl(post.image), caption: post.alt },
    datePublished: post.date,
    dateModified: post.updated,
    inLanguage: 'fr-FR',
    articleSection: pro ? 'Conseils pour les salons' : 'Conseils pour les clients',
    keywords: post.keywords.join(', '),
    wordCount: words,
    timeRequired: `PT${post.readingMinutes}M`,
    author: { '@type': 'Organization', '@id': ORG_ID, name: post.author, url: SITE_URL },
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': blogId },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
  }
  const webPage = pageJsonLd({
    path: postPath(post),
    name: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    dateModified: post.updated,
    mainEntity: { '@id': `${url}#article` },
  })

  return (
    <>
      <JsonLd data={[webPage, article, breadcrumbJsonLd([home, { name: 'Blog', path: base }, { name: post.title, path: postPath(post) }])]} />
      <article>
        <header className={pro ? '' : 'bg-white'}>
          <div className="container-site max-w-4xl py-10 md:py-16">
            <Breadcrumb items={[{ name: home.name, href: home.path }, { name: 'Blog', href: base }, { name: post.title }]} dark={pro} />
            <p className={`mt-8 text-sm font-semibold ${muted}`}>{post.category === 'Salons' ? 'Pour les salons' : 'Pour les clients'}</p>
            <h1 className="mt-2 font-display text-4xl font-semibold leading-[1.05] tracking-tightest md:text-6xl">{post.title}</h1>
            <p className={`mt-5 text-sm ${muted}`}>
              Par {post.author} · Mis à jour le <time dateTime={post.updated}>{formatDate(post.updated)}</time> · {post.readingMinutes} min de lecture
            </p>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-card bg-ink">
              <Image src={bwSrc(post.image)} alt={post.alt} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
            </div>
            <p data-speakable className={`mt-8 border-l-2 pl-5 text-lg leading-relaxed md:text-xl ${pro ? 'border-white' : 'border-ink'}`}>{post.answer}</p>
          </div>
        </header>

        <section className="pb-16 md:pb-24">
          <div className="container-site max-w-3xl space-y-10">
            {post.sections.map((s) => (
              <div key={s.h2}>
                <h2 className="font-display text-2xl font-semibold md:text-3xl">{s.h2}</h2>
                {s.body.map((para) => (
                  <p key={para.slice(0, 24)} className={`mt-4 text-lg leading-relaxed ${muted}`}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </article>

      <section className="pb-12 md:pb-16">
        <div className="container-site max-w-3xl">
          <div className={`border-t pt-8 ${pro ? 'border-border-dark' : 'border-line'}`}>
            <ShareButtons url={absoluteUrl(postPath(post))} title={post.title} dark={pro} />
          </div>
        </div>
      </section>

      {related.length ? (
        <section className={`section-y ${pro ? 'bg-ink-soft' : 'bg-paper-soft'}`}>
          <div className="container-site">
            <h2 className="font-display text-2xl font-semibold md:text-4xl">Articles similaires</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:max-w-none">
              {related.map((r) => (
                <PostCard key={r.slug} post={r} dark={pro} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBlock
        title={pro ? <>Remplissez votre <em>agenda</em>.</> : <>Réserve ta prochaine <em>coiffure</em>.</>}
        text={
          pro
            ? 'Découvrez Sankéa Pro : réservation en ligne, paiement à l’avance et rappels automatiques.'
            : 'Télécharge Sankéa et trouve un salon afro près de chez toi.'
        }
        section={`blog-${post.slug}`}
        image={{ src: post.image, alt: post.alt, position: 'center 30%' }}
      />

    </>
  )
}
