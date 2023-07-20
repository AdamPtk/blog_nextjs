import Layout from 'components/Layout';
import { getListOfArticles, getArticle } from 'services/articles';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticleProps } from 'pages';

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticPaths = async () => {
  const articles = getListOfArticles();

  return {
    paths: articles.map((art) => ({ params: { slug: art.slug } })),
    fallback: false
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const article = await getArticle(slug);

  return {
    props: { article }
  };
};

export default function Article({ article }: { article: ArticleProps }) {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div>
        <h1 className="text-center text-3xl mb-10">{article.title}</h1>
        <div
          className="max-w-3xl mx-auto articleBody"
          dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
    </Layout>
  );
}
