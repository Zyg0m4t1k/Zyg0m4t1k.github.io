import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import BlogListPaginator from '@theme/BlogListPaginator';
import type { Props } from '@theme/BlogListPage';
import styles from './styles.module.css';

export default function BlogListPage({ metadata, items }: Props): JSX.Element {
  const isFirstPage = metadata.page === 1;

  return (
    <Layout
      title={translate({ id: 'blog.title', message: 'Blog' })}
      description={translate({
        id: 'blog.description',
        message: 'Articles autour des plugins Jeedom, domotique, Tailscale et NtfyBridge.',
      })}
    >
      <main className={styles.main}>
        <div className="container">

          {isFirstPage && (
            <p className={styles.heroSub}>
              {translate({
                id: 'blog.subtitle',
                message: 'Guides, astuces et nouveautés autour des plugins Jeedom.',
              })}
            </p>
          )}

          <div className={styles.grid}>
            {items.map(({ content: BlogPostContent }) => {
              const { metadata: post } = BlogPostContent;
              const coverImage = (post.frontMatter.image as string | undefined) ?? post.image;
              return (
                <article key={post.permalink} className={styles.card}>
                  <Link className={styles.coverLink} to={post.permalink} tabIndex={-1} aria-hidden>
                    <div className={styles.coverWrap}>
                      {coverImage ? (
                        <img
                          className={styles.cover}
                          src={coverImage}
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
                            to={tag.permalink}
                          >
                            {tag.label}
                          </Link>
                        ))}
                      </div>
                      {post.readingTime != null && (
                        <span className={styles.readTime}>
                          {Math.ceil(post.readingTime)} min
                        </span>
                      )}
                    </div>

                    <h2 className={styles.title}>
                      <Link className={styles.titleLink} to={post.permalink}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className={styles.description}>{post.description}</p>

                    <div className={styles.footer}>
                      <div className={styles.authorRow}>
                        {post.authors[0]?.imageURL && (
                          <img
                            className={styles.avatar}
                            src={post.authors[0].imageURL}
                            alt={post.authors[0].name}
                            loading="lazy"
                          />
                        )}
                        {post.authors[0] && (
                          <span className={styles.authorName}>{post.authors[0].name}</span>
                        )}
                        <span className={styles.dot}>·</span>
                        <span className={styles.date}>{post.formattedDate}</span>
                      </div>
                      <Link className={styles.cta} to={post.permalink}>
                        {translate({ id: 'blog.readmore', message: 'Lire →' })}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className={styles.paginator}>
            <BlogListPaginator metadata={metadata} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
