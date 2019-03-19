import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";

export default ({ data }) => {
  const record = data.vb.Record;
  return (
    <Layout>
      <h1 id={record.slug}>{record.title}</h1>
      {record.artist ? (
        <h3>
          <Link to={`/artists/${record.artist.slug}`}>
            {record.artist.name}
          </Link>
        </h3>
      ) : (
        <p>(Compilation album, various artists)</p>
      )}
      <figure style={{ marginBottom: `1rem` }}>
        <img
          src={`https://media.graphcms.com/resize=w:512,h:512,a:top,fit:crop/${
            record.cover.handle
          }`}
          alt={record.name}
          title={record.name}
          width="256"
          style={{ marginBottom: `0.5rem` }}
        />
      </figure>
      {record.tracks.length ? (
        <h5 style={{ marginBottom: `1.5rem`, textTransform: `uppercase` }}>
          Tracklist
        </h5>
      ) : null}
      {record.tracks.map((track, i) => (
        <div key={track.id}>
          <h6>
            {track.title}
            {` `}
            {new Date(1000 * track.length).toISOString().substr(14, 5)}
          </h6>
        </div>
      ))}
      {record.reviews.length ? (
        <h5
          style={{
            marginBottom: `1.5rem`,
            marginTop: `3rem`,
            textTransform: `uppercase`
          }}
        >
          Reviews
        </h5>
      ) : null}
      {record.reviews.map((review, i) => (
        <div
          key={review.id}
          style={{
            marginBottom: `2.5rem`
          }}
        >
          <p>
            <Link to={`/reviews/${review.slug}`}>{review.title}</Link>
          </p>
        </div>
      ))}
      <p style={{ marginBottom: `2.5rem`, marginTop: `2.5rem` }}>
        <small>
          <a href={`https://media.graphcms.com/${record.cover.handle}`}>
            full-size, hi-res cover photo
          </a>
        </small>
      </p>
      <h4
        style={{
          marginBottom: `3rem`,
          marginTop: `2.5rem`,
          textTransform: `uppercase`
        }}
      >
        <Link to="/records">All Records</Link>
      </h4>
    </Layout>
  );
};

export const recordDetailPageQuery = graphql`
  query getRecordById($recordID: ID!) {
    vb {
      Record(id: $recordID) {
        id
        slug
        title
        artist {
          id
          slug
          name
        }
        tracks {
          id
          title
          length
        }
        cover {
          handle
        }
        reviews {
          id
          slug
          title
        }
      }
    }
  }
`;
