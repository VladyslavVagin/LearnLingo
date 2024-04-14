// @ts-nocheck
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import sprite from "../../../icons/icons.svg";
import { auth } from "../../../firebase/firebase";
import Levels from "../Levels/Levels";
import ReadMoreInfo from "../ReadMoreInfo/ReadMoreInfo";
import BookLessonBtn from "../ReadMoreInfo/BookLessonBtn/BookLessonBtn";
import BookLesson from "../BookLesson/BookLesson";
import { getUserData, addTeacher, getFavorites, removeTeacher } from "../../../firebase/api";
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
} from "./TeacherItem.styled";


const TeacherItem = ({ teach }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [favoritesArray, setFavoritArray] = useState(null);
  const [showBookModal, setShowBookModal] = useState(false);
  const [isLoggedIn] = useState(JSON.parse(localStorage.getItem('isLogin')) || false);
  const [isFavorite, setIsFavorite] = useState(false);
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
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const favData = await getFavorites();
          setFavoritArray(favData);
        } catch (error) {
          toast.error("Error fetching favorites");
        }
      } else {
        setFavoritArray(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if(favoritesArray?.length > 0) {
      favoritesArray?.some((favorite) => favorite?.id === id) ? setIsFavorite(true) : setIsFavorite(false);
    } else {
      return;
    }
  }, [favoritesArray, id])

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

  const handleAddFavorite = (e) => {
    const userData = getUserData();
    if (isLoggedIn || (!isLoggedIn && userData)) {
        const isTeachInFavorites = favoritesArray?.some((favorite) => favorite.id === id);
        if (!isTeachInFavorites) {
          addTeacher(teach);
          setIsFavorite(true);
        } else {
          removeTeacher(id);
          setIsFavorite(false);
          setFavoritArray((prevFavorites) => prevFavorites?.filter((item) => item?.id !== id));
        }
    } else {
      toast.warn('Please, Login first');
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
      <BtnAddFavorite type="button" id={id} onClick={handleAddFavorite}>
        <svg width={26} height={26} style={isFavorite ? {fill: "var(--accent-color)", stroke: "var(--accent-color)"} : {fill: 'transparent'}}>
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

export default TeacherItem;
