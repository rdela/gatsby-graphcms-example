import React from "react";
import { graphql, Link } from "gatsby";
import Markdown from "react-markdown";

import Layout from "../components/layout";
import StarRatingComponent from "react-star-rating-component";

export default ({ data }) => {
  const review = data.vb.Review;
  return (
    <Layout>
      <div style={{ marginBottom: `4rem` }}>
        <article key={review.id} style={{ marginBottom: `3rem` }}>
          <h1 id={review.slug}>{review.title}</h1>
          <p>
            for{" "}
            <Link to={`/records/${review.record.slug}`}>
              <em>{review.record.title}</em>
            </Link>
            {` `}
            by
            {` `}
            <Link to={`/artists/${review.record.artist.slug}`}>
              <strong>{review.record.artist.name}</strong>
            </Link>
          </p>
          {review.rating && (
            <div
              className="star-wrapper"
              style={{ fontSize: `1.5rem`, marginBottom: `1rem` }}
            >
              <StarRatingComponent
                name="Rating"
                className="rating"
                starCount={5}
                value={review.rating}
                editing={false}
              />
            </div>
          )}
          {review.review && (
            <div>
              <Markdown source={review.review} escapeHtml={false} />
            </div>
          )}
          {review.comments.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h2>Comments</h2>
              {review.comments.map((comment, i) => (
                <p key={comment.body}>{comment.body}</p>
              ))}
            </div>
          ) : null}
        </article>
        <h4
          style={{
            marginBottom: `3rem`,
            marginTop: `2.5rem`,
            textTransform: `uppercase`
          }}
        >
          <Link to="/reviews">All Reviews</Link>
        </h4>
      </div>
    </Layout>
  );
};

export const reviewDetailPageQuery = graphql`
  query getReviewById($reviewID: ID!) {
    vb {
      Review(id: $reviewID) {
        id
        slug
        createdAt
        record {
          slug
          title
          artist {
            slug
            name
          }
        }
        title
        review
        rating
        comments {
          body
        }
      }
    }
  }
`;
