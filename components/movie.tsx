"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}
export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const handleImgOnClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={handleImgOnClick} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
