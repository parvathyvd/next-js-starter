import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News page</h1>
      <ul>
        <Link href="news/nextjs">
          <li>Next Js</li>
        </Link>
        <Link href="news/frameworks">
          <li>Frameworks</li>
        </Link>
      </ul>
    </>
  );
};

export default NewsPage;
