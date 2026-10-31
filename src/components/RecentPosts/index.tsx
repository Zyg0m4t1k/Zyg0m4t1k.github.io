import React, { useRef, useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import blogPosts, { type BlogPostData } from '@site/src/data/blogPosts';
import styles from './styles.module.css';

function AuthorAvatar({ author }: { author: BlogPostData['authors'][0] }) {
  if (!author.imageURL) return null;
  return (
    <img
      className={styles.avatar}
      src={author.imageURL}
      alt={author.name}
      loading="lazy"
    />
  );
}

function PostCard({ post }: { post: BlogPostData }) {
  return (
    <article className={styles.card}>
      <Link className={styles.coverLink} to={post.permalink} tabIndex={-1} aria-hidden>
        <div className={styles.coverWrap}>
          {post.image ? (
            <img
              className={styles.cover}
              src={post.image}
              alt={post.title}
              loading="lazy"
            />
          ) : (
            <div className={styles.coverFallback} />
          )}
        </div>
      </Link>

      <div className={styles.body}>
        <div className={styles.topRow}>
          <div className={styles.tags}>
            {post.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag.label}
                className={styles.tag}
                to={`/blog/tags${tag.permalink}`}
              >
                {tag.label}
              </Link>
            ))}
          </div>
          <span className={styles.readTime}>{post.readingTime} min</span>
        </div>

        <h3 className={styles.title}>
          <Link className={styles.titleLink} to={post.permalink}>
            {translate({ id: `blog.${post.id}.title`, message: post.title })}
          </Link>
        </h3>

        <p className={styles.description}>
          {translate({ id: `blog.${post.id}.description`, message: post.description })}
        </p>

        <div className={styles.footer}>
          <div className={styles.authorRow}>
            {post.authors[0] && (
              <>
                <AuthorAvatar author={post.authors[0]} />
                <span className={styles.authorName}>{post.authors[0].name}</span>
              </>
            )}
            <span className={styles.dot}>·</span>
            <span className={styles.date}>{post.formattedDate}</span>
          </div>
          <Link className={styles.cta} to={post.permalink}>
            {translate({ id: 'recentposts.read', message: 'Lire →' })}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function RecentPosts(): JSX.Element | null {
  if (!blogPosts.length) return null;

  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    return () => el.removeEventListener('scroll', updateArrows);
  }, []);

  const scroll = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('article') as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.55;
    el.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Link className={styles.viewAll} to="/blog">
            {translate({ id: 'recentposts.viewall', message: 'Tous les articles →' })}
          </Link>
          <div className={styles.arrows}>
            <button
              className={`${styles.arrow} ${!canPrev ? styles.arrowDisabled : ''}`}
              onClick={() => scroll('prev')}
              aria-label="Article précédent"
              disabled={!canPrev}
            >
              ‹
            </button>
            <button
              className={`${styles.arrow} ${!canNext ? styles.arrowDisabled : ''}`}
              onClick={() => scroll('next')}
              aria-label="Article suivant"
              disabled={!canNext}
            >
              ›
            </button>
          </div>
        </div>

        <div className={styles.track} ref={trackRef}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.slide}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
