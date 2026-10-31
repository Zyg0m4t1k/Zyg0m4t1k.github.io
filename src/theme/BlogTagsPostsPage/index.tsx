import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import { useBlogTagsPostsPageTitle } from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import { PageMetadata } from '@docusaurus/theme-common';
import type { Props } from '@theme/BlogTagsPostsPage';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function BlogTagsPostsPage({ tag, items, listMetadata, sidebar }: Props): JSX.Element {
  const title = useBlogTagsPostsPageTitle(tag);

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}
    >
      <PageMetadata title={title} description={tag.description} />
      <SearchMetadata tag="blog_tags_posts" />
      <Layout title={title}>
        <main className={styles.main}>
          {/* ── Tag header ── */}
          <header className={styles.header}>
            <div className={styles.headerInner}>
              <div className={styles.headerContent}>
                <Link className={styles.backLink} to={tag.allTagsPath}>
                  ← {translate({ id: 'blog.tags.all', message: 'Tous les tags' })}
                </Link>
                <div className={styles.labelRow}>
                  <span className={styles.hashmark}>#</span>
                  <h1 className={styles.tagTitle}>{tag.label}</h1>
                </div>
                {tag.description && (
                  <p className={styles.tagDescription}>{tag.description}</p>
                )}
                <p className={styles.countLine}>
                  {tag.count} article{tag.count > 1 ? 's' : ''}
                </p>
              </div>
              <svg
                className={styles.headerSvg}
                viewBox="0 0 340 160"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                style={{ color: 'var(--ifm-color-primary)' }}
              >
                <circle cx="270" cy="80" r="55" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35"/>
                <circle cx="270" cy="80" r="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
                <circle cx="270" cy="80" r="105" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1"/>
                <g transform="translate(245,55)" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
                  <path d="M2 2 L2 20 L20 38 L38 20 L20 2 Z"/>
                  <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.9"/>
                </g>
                <circle cx="60" cy="30" r="2.5" fill="currentColor" opacity="0.3"/>
                <circle cx="100" cy="130" r="2" fill="currentColor" opacity="0.25"/>
                <circle cx="160" cy="20" r="1.5" fill="currentColor" opacity="0.2"/>
                <circle cx="200" cy="140" r="2" fill="currentColor" opacity="0.2"/>
              </svg>
            </div>
          </header>

          {/* ── Articles grid ── */}
          <div className="container">
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
                          {post.tags.slice(0, 3).map((t) => (
                            <Link
                              key={t.label}
                              className={styles.tag}
                              to={t.permalink}
                            >
                              {t.label}
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
              <BlogListPaginator metadata={listMetadata} />
            </div>
          </div>
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
}
