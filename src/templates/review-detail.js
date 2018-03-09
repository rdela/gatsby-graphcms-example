import React from "react";
import * as PropTypes from "prop-types";
import Link from "gatsby-link";
import Markdown from "react-markdown";
import StarRatingComponent from "react-star-rating-component";

const propTypes = {
  data: PropTypes.object.isRequired
};

class ReviewDetailTemplate extends React.Component {
  render() {
<<<<<<< HEAD
    const review = this.props.data.reviews;
=======
    const { review } = this.props.data;
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
    return (
      <div style={{ marginBottom: `4rem` }}>
        <article key={review.id} style={{ marginBottom: `3rem` }}>
          <h1 id={review.slug}>{review.title}</h1>
          <p>
            for{" "}
            <Link to={`/records/${review.record.slug}`}>
              <em>{review.record.title}</em>
            </Link>
            {` `}
            by{` `}
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
    );
  }
}

ReviewDetailTemplate.propTypes = propTypes;

export default ReviewDetailTemplate;

export const ReviewDetailPageQuery = graphql`
  query getReviewById($slug: String!) {
<<<<<<< HEAD
    reviews(slug: { eq: $slug }) {
=======
    review(slug: { eq: $slug }) {
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
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
`;
