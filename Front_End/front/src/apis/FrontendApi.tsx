import { mainAxios } from "../libs/axios";

/** 회원가입 */
export const postMember = () =>
  mainAxios.post(`/members/register`, {
    headers: { Accept: "application/json" },
  });

/** 회원정보 수정 */
export const putMember = (memberId: number) =>
  mainAxios.put(`/members/${memberId}`, {
    headers: { Accept: "application/json" },
  });

/** 회원 탈퇴 */
export const deleteMember = (memberId: number) =>
  mainAxios.delete(`/members/${memberId}`, {
    headers: { Accept: "application/json" },
  });

/** 개별 회원조회 */
export const getMember = (memberId: number) =>
  mainAxios.get(`/members/${memberId}`, {
    headers: { Accept: "application/json" },
  });

/** 전체 회원조회 */
export const getAllMembers = (page: number, size: number) =>
  mainAxios.get(`/members?page=${page}&size=${size}`, {
    headers: { Accept: "application/json" },
  });

// =================

/** 키워드 조회 */
export const getKeyword = (keywordId: number) =>
  mainAxios.get(`/keywords/${keywordId}`, {
    headers: { Accept: "application/json" },
  });

/** 전체 키워드조회 */
export const getAllKeywords = () =>
  mainAxios.get(`/keywords`, {
    headers: { Accept: "application/json" },
  });

// ================================

/** OTT 조회 */
export const getOTT = (ottId: number) =>
  mainAxios.get(`/otts/${ottId}`, {
    headers: { Accept: "application/json" },
  });

/** 전체 OTT조회 */
export const getAllOTTs = () =>
  mainAxios.get(`/otts`, {
    headers: { Accept: "application/json" },
  });

// ==============================

/** 팔로우 등록 */
export const postFollow = () =>
  mainAxios.post(`/follows/register`, {
    headers: { Accept: "application/json" },
  });

/** 팔로우 조회 */
export const getFollow = (followId: number) =>
  mainAxios.get(`/follows/${followId}`, {
    headers: { Accept: "application/json" },
  });

/** 팔로우 전체 조회 */
export const getAllFollows = () =>
  mainAxios.get(`/follows`, {
    headers: { Accept: "application/json" },
  });

/** 팔로우 삭제 */
export const deleteFollow = (followId: number) =>
  mainAxios.delete(`/follows/${followId}`, {
    headers: { Accept: "application/json" },
  });

// ==============================

/** 영화 조회 */
export const getMovie = (movieId: number) =>
  mainAxios.get(`/movies/${movieId}`, {
    headers: { Accept: "application/json" },
  });

/** 영화 전체 조회 */
export const getAllMovies = () =>
  mainAxios.get(`/movies`, {
    headers: { Accept: "application/json" },
  });

// ========================================

/** 싫어요 등록 */
export const postHeart = () =>
  mainAxios.post(`/heart-movies/register`, {
    headers: { Accept: "application/json" },
  });

/** 싫어요 조회 */
export const getHeart = (heartMovieId: number) =>
  mainAxios.get(`/heart-movies/${heartMovieId}`, {
    headers: { Accept: "application/json" },
  });

/** 싫어요 삭제 */
export const deleteHeart = (heartMovieId: number) =>
  mainAxios.delete(`/heart-movies/${heartMovieId}`, {
    headers: { Accept: "application/json" },
  });

//====================================================

/** 싫어요 등록 */
export const postHate = () =>
  mainAxios.post(`/hate-movies/register`, {
    headers: { Accept: "application/json" },
  });

/** 싫어요 조회 */
export const getHate = (hateMovieId: number) =>
  mainAxios.get(`/hate-movies/${hateMovieId}`, {
    headers: { Accept: "application/json" },
  });

/** 싫어요 삭제 */
export const deleteHate = (hateMovieId: number) =>
  mainAxios.delete(`/hate-movies/${hateMovieId}`, {
    headers: { Accept: "application/json" },
  });

//====================================================

/** 인생영화 등록 */
export const postBest = () =>
  mainAxios.post(`/best-movies/register`, {
    headers: { Accept: "application/json" },
  });

/** 인생영화 조회 */
export const getBest = (bestMovieId: number) =>
  mainAxios.get(`/best-movies/${bestMovieId}`, {
    headers: { Accept: "application/json" },
  });

/** 인생영화 삭제 */
export const deletBest = (bestMovieId: number) =>
  mainAxios.delete(`/best-movies/${bestMovieId}`, {
    headers: { Accept: "application/json" },
  });

//==============================================

/** 리뷰 등록 */
export const postReview = () =>
  mainAxios.post(`/reviews/register`, {
    headers: { Accept: "application/json" },
  });

/** 리뷰 조회 */
export const getReview = (reviewId: number) =>
  mainAxios.get(`/reviews/${reviewId}`, {
    headers: { Accept: "application/json" },
  });

/** 리뷰 삭제 */
export const deletReview = (reviewId: number) =>
  mainAxios.delete(`/reviews/${reviewId}`, {
    headers: { Accept: "application/json" },
  });

//===============================================