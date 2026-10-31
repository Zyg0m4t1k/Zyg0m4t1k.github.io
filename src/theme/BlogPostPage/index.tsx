import React, { type ReactNode } from 'react';
import { HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common';
import {
  BlogPostProvider,
  useBlogPost,
} from '@docusaurus/plugin-content-blog/client';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import BlogPostPageStructuredData from '@theme/BlogPostPage/StructuredData';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import type { Props } from '@theme/BlogPostPage';
import styles from './styles.module.css';

function MetaSidebar() {
  const { metadata } = useBlogPost();
  const { title, authors, formattedDate, readingTime, tags, image, permalink } = metadata;
  const author = authors[0];

  return (
    <aside className={styles.metaSidebar}>
      {/* Cover image */}
      {image && (
        <div className={styles.coverWrap}>
          <img className={styles.cover} src={image} alt={title} loading="lazy" />
        </div>
      )}

      {/* Author */}
      {author && (
        <div className={styles.authorCard}>
          {author.imageURL && (
            <img
              className={styles.avatar}
              src={author.imageURL}
              alt={author.name}
              loading="lazy"
            />
          )}
          <div>
            <div className={styles.authorName}>{author.name}</div>
            <div className={styles.authorLabel}>
              {translate({ id: 'blog.author.label', message: 'Auteur' })}
            </div>
          </div>
        </div>
      )}

      {/* Date + reading time */}
      <div className={styles.metaRow}>
        <div className={styles.metaItem}>
          <span className={styles.metaIcon}>📅</span>
          <span>{formattedDate}</span>
        </div>
        {readingTime != null && (
          <div className={styles.metaItem}>
            <span className={styles.metaIcon}>⏱</span>
            <span>
              {Math.ceil(readingTime)}{' '}
              {translate({ id: 'blog.reading.min', message: 'min' })}
            </span>
          </div>
        )}
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className={styles.tagsWrap}>
          {tags.map((tag) => (
            <Link key={tag.label} className={styles.tag} to={tag.permalink}>
              {tag.label}
            </Link>
          ))}
        </div>
      )}

      {/* Back link */}
      <Link className={styles.backLink} to="/blog">
        ← {translate({ id: 'blog.back', message: 'Tous les articles' })}
      </Link>
    </aside>
  );
}

function BlogPostPageContent({ children }: { children: ReactNode }) {
  const { metadata } = useBlogPost();
  const { nextItem, prevItem } = metadata;

  return (
    <div className={styles.page}>
      <MetaSidebar />

      <main className={styles.content}>
        <article>
          {children}
        </article>
        {(nextItem || prevItem) && (
          <div className={styles.paginator}>
            <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
          </div>
        )}
      </main>
    </div>
  );
}

export default function BlogPostPage(props: Props): ReactNode {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}
      >
        <BlogPostPageMetadata />
        <BlogPostPageStructuredData />
        <Layout
          title={props.content.metadata.title}
          description={props.content.metadata.description}
        >
          <BlogPostPageContent>
            <BlogPostContent />
          </BlogPostPageContent>
        </Layout>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
