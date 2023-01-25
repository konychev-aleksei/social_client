import Post from "../../components/Post/Post";
import Header from "../../components/Header/Header";
import style from "./style.module.scss";

const post = {
  id: 1,
  image:
    "https://wallpapershome.ru/images/wallpapers/galshtat-3840x2160-gmunden-avstriya-turizm-kurort-puteshestvie-7025.jpg",
  date: "12-09-2022",
  description: "dcnwerfn rf rfherf hefoe oer ",
  location: "Можга, Ижевск",
  user: {
    image:
      "https://paris10.ru/wp-content/webpc-passthru.php?src=https://paris10.ru/wp-content/uploads/2021/07/mathis-jrdl-jNhRkoKE_sU-unsplash_0-640x321.jpg&nocache=1",
    nick: "WEROFERGI",
  },
  likes: {
    count: 123,
    isLiked: true,
  },
  tags: ["Путешествия", "Архитектура"],
  comments: [
    {
      date: "12-09-2022",
      comment: "dcnwerfn rf rfherf hefoe oer ",
      user: {
        image:
          "https://paris10.ru/wp-content/webpc-passthru.php?src=https://paris10.ru/wp-content/uploads/2021/07/mathis-jrdl-jNhRkoKE_sU-unsplash_0-640x321.jpg&nocache=1",
        nick: "aAAXNJAQSJCN",
      },
    },
  ],
};

const PostPage = () => {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Post {...post} />
      </div>
    </>
  );
};

export default PostPage;
