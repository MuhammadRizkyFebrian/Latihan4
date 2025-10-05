type CardArticleProps = {
  img: string;
  title: string;
  desc: string;
  author: string;
};

export default function CardArticle({ img, title, desc, author }: CardArticleProps) {
  return (
    <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex">
      <img className="rounded-l-lg w-48 object-cover" src={img} alt={title} />
      <div className="p-5 flex flex-col justify-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <small className="text-gray-500">By: {author}</small>
      </div>
    </div>
  );
}