import { getArticles } from "./services/getarticles";
import CardArticle from "./components/card_article";

type Article = {
  id: number;
  title: string;
  urlimage: string;
  description: string;
  author: string;
};

export default async function ArticlesPage() {
  const articles: Article[] = await getArticles();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar Artikel</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id} className="border p-3 rounded">
            <CardArticle
              img={article.urlimage}
              title={article.title}
              desc={article.description}
              author={article.author}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
