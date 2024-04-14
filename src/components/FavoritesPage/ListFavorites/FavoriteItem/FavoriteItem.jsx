// @ts-nocheck
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import sprite from "../../../../icons/icons.svg";
import { auth } from "../../../../firebase/firebase";
import Levels from "../../../Teachers/Levels/Levels";
import ReadMoreInfo from "../../../Teachers/ReadMoreInfo/ReadMoreInfo";
import BookLessonBtn from "../../../Teachers/ReadMoreInfo/BookLessonBtn/BookLessonBtn";
import BookLesson from "../../../Teachers/BookLesson/BookLesson";
import { getFavorites, removeTeacher } from "../../../../firebase/api";
import {
  BtnAddFavorite,
  GeneralItem,
  ImageContainer,
  Langs,
  ListData,
  ListInfo,
  ListItemContainer,
  Price,
  ReadMoreBtn,
  TitleCardContainer,
  UpperContent,
} from "../../../Teachers/TeacherItem/TeacherItem.styled";

const FavoriteItem = ({ teach, setFavorites, favorites }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [favoritesArray, setFavoritArray] = useState(null);
  const [showBookModal, setShowBookModal] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const {
    id,
    avatar_url,
    conditions,
    experience,
    languages,
    lesson_info,
    lessons_done,
    levels,
    name,
    price_per_hour,
    rating,
    reviews,
    surname,
  } = teach;

  useEffect(() => {
    if(favoritesArray) {
      console.log(favoritesArray);
      setFavorites(favoritesArray);
    }
  }, [favoritesArray, setFavorites])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const favData = await getFavorites();
          favData?.some((elem) => elem?.id === id) ? setIsFav(true) : setIsFav(false);
        } catch (error) {
          toast.error("Error fetching favorites");
        }
      } else {
        setFavoritArray(null);
      }
    });
    return () => unsubscribe();
  }, [id]);

  useEffect(() => {
    if (showBookModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBookModal]);

  const handleRemoveFavorite = () => {
    if(isFav) {
      removeTeacher(id);
      setIsFav(false);
      setFavorites((prevFavorites) => prevFavorites?.filter((item) => item?.id !== id));
    }
  };

  return (
    <GeneralItem>
      <ListItemContainer>
        <ImageContainer>
          <img src={avatar_url} alt={`avatar of ${name}${surname}`} />
          <svg width={12} height={12}>
            <use xlinkHref={`${sprite}#icon-green-circle`}></use>
          </svg>
        </ImageContainer>
        <div>
          <UpperContent>
            <TitleCardContainer>
              <h2>Languages</h2>
              <h3>
                {name} {surname}
              </h3>
            </TitleCardContainer>
            <ListData>
              <li>
                <svg width={16} height={16}>
                  <use xlinkHref={`${sprite}#icon-book`}></use>
                </svg>
                <p>Lessons online</p>
              </li>
              <li>
                <p>Lessons done:</p>
                <span>{lessons_done}</span>
              </li>
              <li>
                <svg width={16} height={16}>
                  <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
                <p>
                  Rating: <span>{rating}</span>
                </p>
              </li>
              <li>
                <p>Price / 1 hour:</p>
                <Price>{price_per_hour}$</Price>
              </li>
            </ListData>
          </UpperContent>
          <div>
            <ListInfo>
              <li>
                <p>
                  Speaks:{" "}
                  <Langs>
                    {[...languages?.slice(0, -1), languages?.slice(-1)[0]].join(
                      ", "
                    )}
                  </Langs>
                </p>
              </li>
              <li>
                <p>
                  Lesson Info: <span>{lesson_info}</span>
                </p>
              </li>
              <li>
                <p>
                  Conditions: <span>{conditions}</span>
                </p>
              </li>
            </ListInfo>
            {showInfo ? (
              <ReadMoreInfo
                experience={experience}
                reviews={reviews}
                setShowInfo={setShowInfo}
              />
            ) : (
              <ReadMoreBtn onClick={() => setShowInfo(true)}>
                Read more
              </ReadMoreBtn>
            )}
            <Levels levels={levels} />
            {showInfo && <BookLessonBtn setShowBookModal={setShowBookModal} />}
          </div>
        </div>
      </ListItemContainer>
      <BtnAddFavorite type="button" id={id} onClick={handleRemoveFavorite}>
        <svg
          width={26}
          height={26}
          style={
            isFav
              ? { fill: "var(--accent-color)", stroke: "var(--accent-color)" }
              : { fill: "transparent" }
          }
        >
          <use xlinkHref={`${sprite}#icon-heart`}></use>
        </svg>
      </BtnAddFavorite>
      {showBookModal && (
        <BookLesson
          setShowBookModal={setShowBookModal}
          name={name}
          surname={surname}
          avatar_url={avatar_url}
        />
      )}
    </GeneralItem>
  );
};

export default FavoriteItem;
