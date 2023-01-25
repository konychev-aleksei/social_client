import style from "../Feed/style.module.scss";

import SmallPost from "../../components/Post/SmallPost";
import Header from "../../components/Header/Header";
import UserInfo from "../../components/UserInfo/UserInfo";

const posts = [
  {
    id: 1,
    imageSrc:
      "http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-12/2880px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg?itok=oIz5nfIT",
    userSrc: "https://uznayvse.ru/images/catalog/2022/1/tom-cruise_87.jpg",
    userName: "31214",
    likesCount: 231,
    isLiked: true,
  },
  {
    id: 1,
    imageSrc:
      "https://img.gazeta.ru/files3/957/10301957/00-pic905-895x505-58873.jpg",
    userSrc: "https://uznayvse.ru/images/catalog/2022/1/tom-cruise_87.jpg",
    userName: "31214",
    likesCount: 231,
    isLiked: true,
  },
  {
    id: 1,
    imageSrc:
      "https://img.freepik.com/premium-photo/eiffel-tower-in-paris-france-vertical-photo_385604-12.jpg",
    userSrc: "https://uznayvse.ru/images/catalog/2022/1/tom-cruise_87.jpg",
    userName: "31214",
    likesCount: 231,
    isLiked: true,
  },
  {
    id: 1,
    imageSrc:
      "https://putidorogi-nn.ru/images/stories/evropa/rossiya/moskva_2.jpg",
    userSrc: "https://uznayvse.ru/images/catalog/2022/1/tom-cruise_87.jpg",
    userName: "31214",
    likesCount: 231,
    isLiked: true,
  },
  {
    id: 1,
    imageSrc:
      "https://blog.ostrovok.ru/wp-content/uploads/2019/03/ostrovok-filters-3661.jpg",
    userSrc: "https://uznayvse.ru/images/catalog/2022/1/tom-cruise_87.jpg",
    userName: "31214",
    likesCount: 231,
    isLiked: true,
  },
  {
    id: 1,
    imageSrc:
      "https://guide-tours.ru/wp-content/uploads/2021/05/dostoprimechatelnosti-rossii.jpg",
    userSrc: "https://uznayvse.ru/images/catalog/2022/1/tom-cruise_87.jpg",
    userName: "31214",
    likesCount: 231,
    isLiked: true,
  },
  {
    id: 1,
    imageSrc:
      "https://putidorogi-nn.ru/images/stories/evropa/rossiya/moskva_2.jpg",
    userSrc: "https://uznayvse.ru/images/catalog/2022/1/tom-cruise_87.jpg",
    userName: "31214",
    likesCount: 231,
    isLiked: true,
  },
  {
    id: 1,
    imageSrc:
      "https://img.freepik.com/premium-photo/eiffel-tower-in-paris-france-vertical-photo_385604-12.jpg",
    userSrc: "https://uznayvse.ru/images/catalog/2022/1/tom-cruise_87.jpg",
    userName: "31214",
    likesCount: 231,
    isLiked: true,
  },
  {
    id: 1,
    imageSrc:
      "https://putidorogi-nn.ru/images/stories/evropa/rossiya/moskva_2.jpg",
    userSrc: "https://uznayvse.ru/images/catalog/2022/1/tom-cruise_87.jpg",
    userName: "31214",
    likesCount: 231,
    isLiked: true,
  },
];


const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <UserInfo />
        <div className={style.grid}>
          {posts.map((post) => (
            <SmallPost {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
